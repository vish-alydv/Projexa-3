import os
from dotenv import load_dotenv

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
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
        )
        text = response.text.strip() if response.text else ""
        return {
            "explanation": text,
            "fun_fact": "You're doing fantastic! Asking 'why' is how true scientists and mathematicians learn! 🌟"
        }
    except Exception as e:
        return {
            "explanation": f"'{correct_answer}' is the right answer because it directly satisfies the rules for this {grade} lesson. While '{user_answer}' was a good attempt, check the definition closely!",
            "fun_fact": f"Note: ({str(e)[:80]})"
        }

def generate_ai_quiz(grade: str, subject: str, chapter: str, num_questions: int = 5):
    api_key = os.getenv("GEMINI_API_KEY", "").strip()
    if not api_key:
        return None
    
    try:
        from google import genai
        import json
        client = genai.Client(api_key=api_key)
        prompt = f"""
Generate {num_questions} multiple-choice questions for {grade} students for the subject "{subject}" and chapter "{chapter}".
Format your response ONLY as a valid JSON array of objects.
Each object must have:
- "id": number (1 to {num_questions})
- "question": string
- "options": array of 4 strings
- "correctIndex": integer (0, 1, 2, or 3)
- "explanation": string (kid-friendly explanation)

Do not include any markdown backticks or other text, only the raw JSON array.
"""
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
        )
        content = response.text.strip()
        if content.startswith("```json"):
            content = content[7:]
        if content.startswith("```"):
            content = content[3:]
        if content.endswith("```"):
            content = content[:-3]
        return json.loads(content.strip())
    except Exception as err:
        print(f"Gemini Quiz Gen Error: {err}")
        return None
