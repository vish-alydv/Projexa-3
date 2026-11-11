# Learn Easy — Multi-Grade EdTech Learning Platform

A modern full-stack EdTech web platform featuring full-screen interactive quizzes, student grade selection (Class 1st to 10th), a SQLite database, and an AI Tutor powered by Google Gemini.

---

## 📁 Project Architecture

```
Learn-Easy/
├── frontend/                  # React 18 + Vite + Tailwind CSS
│   ├── src/                   # Components, Pages, Context
│   ├── package.json           # Frontend dependencies
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/                   # FastAPI + SQLite + Gemini AI
│   ├── main.py                # REST API routes (Auth, Quizzes, AI)
│   ├── database.py            # SQLite connection (learn_easy.db)
│   ├── models.py              # SQLAlchemy models (User, QuizAttempt)
│   ├── schemas.py             # Pydantic validation schemas
│   ├── ai_service.py          # Google Gemini AI Tutor service
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # GEMINI_API_KEY configuration
│
└── package.json               # Root helper scripts
```

---

## 🚀 Quick Start Guide

### 1. Run Frontend (React + Vite)
```bash
# Option A: From root directory
npm run dev

# Option B: From frontend directory
cd frontend
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

### 2. Run Backend (FastAPI + Python)
```bash
# Option A: From root directory
npm run backend

# Option B: From backend directory
cd backend
python -m uvicorn main:app --reload --port 8000
```
- API Health Check: **[http://localhost:8000](http://localhost:8000)**
- Interactive Swagger Docs: **[http://localhost:8000/docs](http://localhost:8000/docs)**

---

## 🔑 Configure Gemini AI API Key

Add your Gemini API key in `backend/.env`:
```env
GEMINI_API_KEY="your_api_key_here"
```
*(Get a free key from [Google AI Studio](https://aistudio.google.com/)).*

---

## 📄 License
MIT License
