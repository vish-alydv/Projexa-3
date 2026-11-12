from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List, Optional
import os

from .database import engine, Base, get_db
from .models import User, QuizAttempt
from .schemas import (
    UserRegister, 
    UserLogin, 
    UserResponse, 
    QuizSubmitRequest, 
    QuizAttemptResponse,
    AIExplainRequest,
    AIExplainResponse,
    AIGenerateQuizRequest
)
from .ai_service import get_ai_explanation, generate_ai_quiz

# Initialize database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Learn-Easy Backend API",
    description="Multi-Grade Learning Platform with SQLite Database & Gemini AI integration",
    version="1.0.0"
)

# Enable CORS for React Frontend (runs on localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for local dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- ROOT HEALTHCHECK ---
@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "Learn-Easy API",
        "database": "SQLite (learn_easy.db)",
        "docs_url": "/docs"
    }

# --- AUTHENTICATION & USER MANAGEMENT ---
@app.post("/api/auth/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def register_user(user_data: UserRegister, db: Session = Depends(get_db)):
    # Check if email already exists
    existing_user = db.query(User).filter(User.email == user_data.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An account with this email already exists."
        )
    
    new_user = User(
        name=user_data.name.strip(),
        email=user_data.email.strip().lower(),
        password=user_data.password,  # In production, use bcrypt hash
        grade=user_data.grade.strip()
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@app.post("/api/auth/login", response_model=UserResponse)
def login_user(credentials: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(
        User.email == credentials.email.strip().lower(),
        User.password == credentials.password
    ).first()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password."
        )
    return user

@app.get("/api/auth/users", response_model=List[UserResponse])
def get_all_users(grade: Optional[str] = None, db: Session = Depends(get_db)):
    query = db.query(User)
    if grade:
        query = query.filter(User.grade == grade)
    return query.order_by(User.id.desc()).all()

# --- QUIZ & PROGRESS TRACKING ---
@app.post("/api/quiz/submit", response_model=QuizAttemptResponse, status_code=status.HTTP_201_CREATED)
def submit_quiz_attempt(attempt_data: QuizSubmitRequest, db: Session = Depends(get_db)):
    new_attempt = QuizAttempt(
        user_id=attempt_data.user_id,
        user_name=attempt_data.user_name,
        grade=attempt_data.grade,
        subject=attempt_data.subject,
        chapter=attempt_data.chapter,
        score=attempt_data.score,
        total=attempt_data.total,
        accuracy=attempt_data.accuracy
    )
    db.add(new_attempt)
    db.commit()
    db.refresh(new_attempt)
    return new_attempt

@app.get("/api/quiz/attempts", response_model=List[QuizAttemptResponse])
def get_quiz_attempts(
    user_id: Optional[int] = None, 
    grade: Optional[str] = None, 
    limit: int = 20, 
    db: Session = Depends(get_db)
):
    query = db.query(QuizAttempt)
    if user_id:
        query = query.filter(QuizAttempt.user_id == user_id)
    if grade:
        query = query.filter(QuizAttempt.grade == grade)
    return query.order_by(QuizAttempt.id.desc()).limit(limit).all()

@app.get("/api/quiz/stats")
def get_quiz_statistics(user_id: Optional[int] = None, grade: Optional[str] = None, db: Session = Depends(get_db)):
    query = db.query(QuizAttempt)
    if user_id:
        query = query.filter(QuizAttempt.user_id == user_id)
    if grade:
        query = query.filter(QuizAttempt.grade == grade)
        
    attempts = query.all()
    total_quizzes = len(attempts)
    if total_quizzes == 0:
        return {
            "total_quizzes": 0,
            "average_accuracy": 0,
            "total_questions_solved": 0,
            "subjects_breakdown": {}
        }
    
    total_acc = sum(a.accuracy for a in attempts)
    total_solved = sum(a.total for a in attempts)
    avg_accuracy = round(total_acc / total_quizzes)
    
    # Subject wise stats
    subject_map = {}
    for a in attempts:
        if a.subject not in subject_map:
            subject_map[a.subject] = {"attempts": 0, "total_score": 0, "total_possible": 0}
        subject_map[a.subject]["attempts"] += 1
        subject_map[a.subject]["total_score"] += a.score
        subject_map[a.subject]["total_possible"] += a.total
        
    return {
        "total_quizzes": total_quizzes,
        "average_accuracy": avg_accuracy,
        "total_questions_solved": total_solved,
        "subjects_breakdown": subject_map
    }

# --- GEMINI AI SERVICES ---
@app.post("/api/ai/explain", response_model=AIExplainResponse)
def explain_with_ai(payload: AIExplainRequest):
    result = get_ai_explanation(
        question=payload.question,
        user_answer=payload.user_answer,
        correct_answer=payload.correct_answer,
        grade=payload.grade,
        subject=payload.subject
    )
    return result

@app.post("/api/ai/generate-quiz")
def generate_dynamic_quiz(payload: AIGenerateQuizRequest):
    topic = payload.topic.strip() if payload.topic else "General Knowledge"
    questions = generate_ai_quiz(
        topic=topic,
        grade=payload.grade or "Class 5th",
        subject=payload.subject or "General",
        num_questions=payload.num_questions or 5
    )
    return {
        "topic": topic,
        "chapter": topic,
        "title": f"{topic} (AI Quiz)",
        "questions": questions
    }
