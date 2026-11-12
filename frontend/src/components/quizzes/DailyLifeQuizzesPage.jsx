import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Bot, 
  CheckCircle2, 
  X
} from 'lucide-react';
import supermarketCartImg from '../../assets/supermarket_cart.jpg';
import kitchenScienceImg from '../../assets/kitchen_science.jpg';
import roadSafetyImg from '../../assets/road_safety.jpg';
import InteractiveLessonModal from '../modals/InteractiveLessonModal';
import { useAuth } from '../../context/AuthContext';

export default function DailyLifeQuizzesPage() {
  const { currentUser } = useAuth();
  const [topicInput, setTopicInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState('');
  const [activeQuizModal, setActiveQuizModal] = useState(null);

  // Curated static quizzes
  const curatedQuizzes = [
    {
      id: 'supermarket',
      title: 'Supermarket Checkout Math',
      categoryTag: 'Practical Math',
      description: 'Calculate small discounts, grocery weights, and count change at the billing counter.',
      duration: '3 mins',
      questionsCount: '5 Qs',
      image: supermarketCartImg,
      questions: [
        {
          id: 1,
          question: "Riya buys a notebook for ₹35 and a pen for ₹15. She gives a ₹100 note. How much change does she get?",
          options: ["₹40", "₹50", "₹60", "₹30"],
          correctIndex: 1,
          explanation: "Total cost = ₹35 + ₹15 = ₹50. Change returned = ₹100 - ₹50 = ₹50."
        },
        {
          id: 2,
          question: "If 1 kilogram of fresh apples costs ₹60, how much will 2.5 kg cost?",
          options: ["₹120", "₹150", "₹160", "₹180"],
          correctIndex: 1,
          explanation: "Cost = ₹60 × 2.5 = ₹120 + ₹30 = ₹150."
        },
        {
          id: 3,
          question: "A ₹20 box of biscuits has a ₹5 discount offer. How much do you pay?",
          options: ["₹15", "₹25", "₹10", "₹18"],
          correctIndex: 0,
          explanation: "Discounted price = ₹20 - ₹5 = ₹15."
        },
        {
          id: 4,
          question: "You need 2 litres of milk. Each packet contains 500ml. How many packets should you take?",
          options: ["2 packets", "3 packets", "4 packets", "5 packets"],
          correctIndex: 2,
          explanation: "1 litre = 1000ml, so 2 litres = 2000ml. 2000ml ÷ 500ml = 4 packets."
        },
        {
          id: 5,
          question: "A packet of butter weighs 250 grams. How many packets equal exactly 1 kilogram?",
          options: ["2 packets", "3 packets", "4 packets", "5 packets"],
          correctIndex: 2,
          explanation: "1 kilogram = 1000 grams. 1000g ÷ 250g = 4 packets."
        }
      ]
    },
    {
      id: 'kitchen',
      title: 'Kitchen Science in Daily Life',
      categoryTag: 'Practical Science',
      description: 'Discover why milk boils over, how bread rises with yeast, and why ice floats on water.',
      duration: '3 mins',
      questionsCount: '5 Qs',
      image: kitchenScienceImg,
      questions: [
        {
          id: 1,
          question: "Why does ice float on top of water in a drinking glass?",
          options: [
            "Ice expands and is less dense than liquid water",
            "Ice is heavier and gets pushed up by air",
            "Cold water pulls ice upward",
            "Ice contains invisible helium pockets"
          ],
          correctIndex: 0,
          explanation: "When water freezes, its molecular structure expands, making ice less dense than water!"
        },
        {
          id: 2,
          question: "Which gas produced by yeast makes bread soft and fluffy when baked?",
          options: ["Carbon dioxide gas", "Oxygen gas", "Nitrogen gas", "Hydrogen gas"],
          correctIndex: 0,
          explanation: "Yeast feeds on sugar and releases tiny bubbles of carbon dioxide that puff up bread dough."
        },
        {
          id: 3,
          question: "Why does milk foam and spill over quickly when boiled on a high flame?",
          options: [
            "Proteins and fat form a top skin that traps steam",
            "Milk has no water in it",
            "Gas from the burner gets inside milk",
            "Milk turns into solid ice"
          ],
          correctIndex: 0,
          explanation: "A skin of proteins and fats forms on heated milk, trapping boiling steam underneath until it overflows."
        },
        {
          id: 4,
          question: "What type of change occurs when raw batter is baked into a cake?",
          options: [
            "Chemical change (cannot be reversed)",
            "Physical change only",
            "Freezing change",
            "Reversible state change"
          ],
          correctIndex: 0,
          explanation: "Baking causes irreversible chemical reactions between heat, flour, sugar, and baking powder."
        },
        {
          id: 5,
          question: "When table salt dissolves completely in water, what is the clear liquid called?",
          options: ["A Solution", "A Suspension", "A Solid", "An Element"],
          correctIndex: 0,
          explanation: "A homogeneous mixture of solute (salt) dissolved in solvent (water) is called a solution."
        }
      ]
    },
    {
      id: 'road-safety',
      title: 'Civics & Road Safety Rules',
      categoryTag: 'Civics & Safety',
      description: 'Learn zebra crossing rules, bicycle helmet safety, and traffic signal symbols.',
      duration: '3 mins',
      questionsCount: '5 Qs',
      image: roadSafetyImg,
      questions: [
        {
          id: 1,
          question: "What does a steady RED traffic light indicate to vehicle drivers?",
          options: ["Stop completely behind the stop line", "Slow down and proceed", "Speed up to cross", "Blow horn loudly"],
          correctIndex: 0,
          explanation: "A red traffic signal strictly instructs all vehicles to stop completely for pedestrian and cross safety."
        },
        {
          id: 2,
          question: "Where should pedestrians always cross a busy city street?",
          options: ["At a marked Zebra Crossing", "Between parked cars", "Anywhere in the middle of traffic", "Running across without looking"],
          correctIndex: 0,
          explanation: "Zebra crossings give pedestrians a safe and designated area to cross roads legally."
        },
        {
          id: 3,
          question: "Why is wearing a certified safety helmet essential when riding a bicycle?",
          options: [
            "Protects the skull and brain from traumatic impact",
            "Makes you ride 2x faster",
            "Keeps your hair dry from light wind",
            "Changes bike direction"
          ],
          correctIndex: 0,
          explanation: "Helmets absorb dangerous impact forces, protecting the fragile brain during accidental falls."
        },
        {
          id: 4,
          question: "On which side of the road should vehicles normally drive in India?",
          options: ["Left side", "Right side", "Middle lane always", "Sidewalk path"],
          correctIndex: 0,
          explanation: "Under the Indian Motor Vehicles Act, traffic strictly moves on the left side of the carriageway."
        },
        {
          id: 5,
          question: "What should you do before stepping onto a road to cross safely?",
          options: [
            "Look right, look left, look right again, then cross",
            "Run as fast as possible without stopping",
            "Keep looking down at your shoes",
            "Close your eyes and walk"
          ],
          correctIndex: 0,
          explanation: "Always check traffic from both directions before stepping onto any roadway."
        }
      ]
    }
  ];

  // Call FastAPI backend to generate AI quiz via Gemini
  const handleGenerateAIQuiz = async (topicToUse) => {
    const finalTopic = (topicToUse || topicInput).trim();
    if (!finalTopic) return;

    setIsGenerating(true);
    setGenerateError('');

    try {
      const res = await fetch('http://localhost:8000/api/ai/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: finalTopic,
          grade: currentUser?.grade || "Class 5th",
          subject: "Interactive AI Quiz",
          num_questions: 5
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || "Failed to generate AI quiz");
      }

      if (data.questions && data.questions.length > 0) {
        setActiveQuizModal({
          chapter: { title: `${finalTopic} • AI Quiz` },
          subjectTitle: `${currentUser?.grade || "Class 5th"} • Gemini AI Quiz`,
          customQuestions: data.questions
        });
      } else {
        throw new Error("No questions were returned by AI.");
      }
    } catch (err) {
      console.error(err);
      setGenerateError(err.message || "Failed to connect to AI server. Please ensure backend is running.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-6xl mx-auto flex flex-col gap-8">
      {/* 1. TOP HERO: GEMINI AI QUIZ GENERATOR PROMPT BAR */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 p-6 sm:p-10 text-white shadow-xl border border-indigo-700/50">
        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Google Gemini AI Powered</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/30 text-purple-200 border border-purple-400/30">
              Instant Quiz Engine
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-2">
            Ask Gemini AI to Generate Any Quiz
          </h1>
          <p className="text-xs sm:text-sm text-indigo-100 max-w-2xl font-medium leading-relaxed mb-6">
            Type any topic, concept, or chapter you want to practice. Our AI will automatically generate a tailored, interactive 5-question quiz for <strong>{currentUser?.grade || "Class 5th"}</strong> with instant feedback and smart explanations!
          </p>

          {/* Prompt Input Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleGenerateAIQuiz(topicInput);
            }} 
            className="flex flex-col sm:flex-row items-center gap-2.5 bg-white/10 backdrop-blur-xl border border-white/20 p-2 sm:p-2.5 rounded-2xl shadow-inner mb-0"
          >
            <div className="relative flex-1 w-full flex items-center">
              <Bot className="w-5 h-5 text-indigo-300 absolute left-3.5" />
              <input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                placeholder="Enter any topic (e.g. Solar System, Fractions, Photosynthesis, Akbar the Great, Verbs)..."
                className="w-full bg-transparent pl-11 pr-8 py-3 text-sm text-white placeholder-indigo-200/70 font-medium outline-none"
              />
              {topicInput && (
                <button
                  type="button"
                  onClick={() => setTopicInput('')}
                  className="p-1 rounded-lg text-indigo-300 hover:text-white mr-2"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={isGenerating || !topicInput.trim()}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                isGenerating || !topicInput.trim()
                  ? 'bg-white/20 text-indigo-200 cursor-not-allowed'
                  : 'bg-white text-indigo-900 hover:bg-indigo-50 active:scale-95 shadow-indigo-950/30'
              }`}
            >
              {isGenerating ? (
                <>
                  <span className="inline-block animate-spin">⏳</span>
                  <span>Generating AI Quiz...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Generate AI Quiz</span>
                </>
              )}
            </button>
          </form>

          {/* Error Message */}
          {generateError && (
            <div className="mt-4 p-3 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs font-semibold">
              ⚠️ {generateError}
            </div>
          )}
        </div>
      </div>

      {/* 2. CURATED REAL-WORLD SCENARIO QUIZZES */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Curated Daily Life & Scenario Quizzes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              Hand-crafted interactive problem sets applying math, science, and civics to real situations.
            </p>
          </div>
          <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
            {curatedQuizzes.length} Scenarios
          </span>
        </div>

        {/* 3-Column Grid for Curated Quizzes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curatedQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={quiz.image}
                    alt={quiz.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-white/95 backdrop-blur-md text-indigo-700 shadow-sm border border-slate-100">
                      {quiz.categoryTag}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1.5 leading-snug">
                    {quiz.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4 line-clamp-2">
                    {quiz.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1 font-bold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                      {quiz.questionsCount}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {quiz.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    setActiveQuizModal({
                      chapter: { title: quiz.title },
                      subjectTitle: `${quiz.categoryTag} • Daily Scenario`,
                      customQuestions: quiz.questions
                    });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 group-hover:bg-indigo-600 group-hover:text-white shadow-xs"
                >
                  <span>Start Scenario Quiz</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. FULL SCREEN INTERACTIVE QUIZ MODAL */}
      {activeQuizModal && (
        <InteractiveLessonModal
          chapter={activeQuizModal.chapter}
          subjectTitle={activeQuizModal.subjectTitle}
          customQuestions={activeQuizModal.customQuestions}
          onClose={() => setActiveQuizModal(null)}
        />
      )}
    </div>
  );
}
