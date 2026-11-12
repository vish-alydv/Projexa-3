from pydantic import BaseModel, EmailStr
from typing import Optional, List, Any
from datetime import datetime

# --- USER AUTH SCHEMAS ---
class UserRegister(BaseModel):
    name: str
    email: EmailStr
    password: str
    grade: str = "Class 5th"

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    grade: str
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# --- QUIZ SCHEMAS ---
class QuizSubmitRequest(BaseModel):
    user_id: Optional[int] = None
    user_name: str
    grade: str
    subject: str
    chapter: str
    score: int
    total: int
    accuracy: int

class QuizAttemptResponse(BaseModel):
    id: int
    user_name: str
    grade: str
    subject: str
    chapter: str
    score: int
    total: int
    accuracy: int
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# --- AI GEMINI SCHEMAS ---
class AIExplainRequest(BaseModel):
    question: str
    user_answer: str
    correct_answer: str
    grade: Optional[str] = "Class 5th"
    subject: Optional[str] = "General"

class AIExplainResponse(BaseModel):
    explanation: str
    fun_fact: Optional[str] = None

class AIGenerateQuizRequest(BaseModel):
    topic: str
    grade: Optional[str] = "Class 5th"
    subject: Optional[str] = "General"
    num_questions: Optional[int] = 5
