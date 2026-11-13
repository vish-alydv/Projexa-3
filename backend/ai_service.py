import os
from pathlib import Path
from dotenv import load_dotenv

# Automatically load from backend/.env or root .env
_backend_env = Path(__file__).resolve().parent / ".env"
if _backend_env.exists():
    load_dotenv(dotenv_path=_backend_env)
load_dotenv()

def get_ai_explanation(question: str, user_answer: str, correct_answer: str, grade: str = "Class 5th", subject: str = "Science"):
    api_key = os.getenv("GEMINI_API_KEY", "").strip()
    
    if not api_key:
        return {
            "explanation": f"In {grade} {subject}, '{correct_answer}' is the correct choice! '{user_answer}' was a great try, but remember: '{correct_answer}' directly matches the definition and real-world function for this topic.",
            "fun_fact": "Tip: Always visualize the concept with real-life examples to remember it easily! 💡"
        }
    
    try:
        from google import genai
        client = genai.Client(api_key=api_key)
        prompt = f"""
You are a warm, supportive, and friendly school teacher for a {grade} student in India studying {subject}.
Question: "{question}"
Student chose: "{user_answer}"
Correct answer: "{correct_answer}"

Task:
1. Gently explain why "{user_answer}" is not the right choice.
2. Clearly explain why "{correct_answer}" is correct using a simple, relatable real-world example or analogy (e.g. helmet, building blocks, shopping cart).
3. Keep it under 3-4 sentences. Tone should be positive, encouraging, and easy to grasp for a young student.
"""
        for model_name in ['gemini-3.1-flash-lite', 'gemini-3.5-flash-lite', 'gemini-3.5-flash']:
            try:
                response = client.models.generate_content(
                    model=model_name,
                    contents=prompt,
                )
                if response and response.text:
                    break
            except Exception:
                continue
        text = response.text.strip() if response and response.text else ""
        return {
            "explanation": text,
            "fun_fact": "You're doing fantastic! Asking 'why' is how true scientists and mathematicians learn! 🌟"
        }
    except Exception as e:
        return {
            "explanation": f"'{correct_answer}' is the right answer because it directly satisfies the rules for this {grade} lesson. While '{user_answer}' was a good attempt, check the definition closely!",
            "fun_fact": f"Note: ({str(e)[:80]})"
        }

def generate_ai_quiz(topic: str, grade: str = "Class 5th", subject: str = "General", num_questions: int = 5):
    api_key = os.getenv("GEMINI_API_KEY", "").strip()
    
    if api_key:
        try:
            from google import genai
            import json
            client = genai.Client(api_key=api_key)
            prompt = f"""
You are an expert school educator for {grade} students in India.
Generate a fun, engaging, and curriculum-appropriate multiple-choice quiz of {num_questions} questions on the topic: "{topic}".

Rules:
1. Every question must be clear, educational, and suitable for a {grade} student.
2. Provide exactly 4 options per question.
3. The options must be realistic and unambiguous.
4. Provide a kid-friendly explanation for the correct answer.

Format your output STRICTLY as a valid JSON array of objects with these keys:
- "id": integer (1 to {num_questions})
- "question": string
- "options": list of 4 strings
- "correctIndex": integer (0, 1, 2, or 3)
- "explanation": string

Return ONLY the raw JSON array. Do not wrap in markdown or backticks.
"""
            content = ""
            for model_name in ['gemini-3.1-flash-lite', 'gemini-3.5-flash-lite', 'gemini-3.5-flash']:
                try:
                    response = client.models.generate_content(
                        model=model_name,
                        contents=prompt,
                    )
                    if response and response.text:
                        content = response.text.strip()
                        break
                except Exception:
                    continue
            if "```" in content:
                lines = content.split("\n")
                lines = [l for l in lines if not l.strip().startswith("```")]
                content = "\n".join(lines).strip()
            
            parsed = json.loads(content)
            if isinstance(parsed, list) and len(parsed) > 0:
                return parsed
        except Exception as err:
            print(f"Gemini generation error: {err}")

    # High quality smart fallback generator
    title_clean = topic.title().strip() or "General Knowledge"
    return [
        {
            "id": 1,
            "question": f"Which of the following is the most fundamental concept when studying {title_clean} in {grade}?",
            "options": [
                f"Understanding key principles and definitions of {title_clean}",
                f"Memorizing answers without understanding",
                f"Skipping diagrams and real-life examples",
                f"Ignoring units and measurements"
            ],
            "correctIndex": 0,
            "explanation": f"Understanding core principles and definitions of {title_clean} builds strong conceptual clarity."
        },
        {
            "id": 2,
            "question": f"How do we observe the practical application of {title_clean} in our daily life?",
            "options": [
                f"Through real-world physical and natural phenomena",
                f"Only inside advanced research laboratories",
                f"It has zero connection with everyday life",
                f"Only during annual school examinations"
            ],
            "correctIndex": 0,
            "explanation": f"Most topics in {grade} connect directly to phenomena we see, touch, or use every day!"
        },
        {
            "id": 3,
            "question": f"When solving practice problems related to {title_clean}, which step should you always take first?",
            "options": [
                "Carefully read the question and identify what is being asked",
                "Guess option A immediately",
                "Skip to the final answer without working out the steps",
                "Ignore given numbers or conditions"
            ],
            "correctIndex": 0,
            "explanation": "Reading questions attentively and identifying given parameters prevents common silly mistakes."
        },
        {
            "id": 4,
            "question": f"What is a primary benefit of mastering {title_clean} in your {grade} curriculum?",
            "options": [
                "Develops analytical thinking and problem-solving skills",
                "Requires no practice at all",
                "It is only useful for one day",
                "None of the above"
            ],
            "correctIndex": 0,
            "explanation": f"Mastering {title_clean} trains young minds to think logically and solve complex challenges with confidence."
        },
        {
            "id": 5,
            "question": f"Which of the following statements about {title_clean} is TRUE?",
            "options": [
                "Regular interactive practice leads to 100% mastery",
                "It can never be learned",
                "Definitions are unimportant in exams",
                "Only adults can understand it"
            ],
            "correctIndex": 0,
            "explanation": "Consistent practice with immediate feedback turns tricky topics into your greatest strengths!"
        }
    ]
