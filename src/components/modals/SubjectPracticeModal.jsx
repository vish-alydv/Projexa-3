import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  PlayCircle, 
  Clock, 
  Award, 
  Sparkles, 
  ChevronRight,
  Calculator,
  Microscope,
  BookOpenCheck,
  Globe2,
  Target,
  Zap,
  RotateCcw,
  ArrowRight,
  Flame,
  Check,
  HelpCircle
} from 'lucide-react';

const CHAPTER_PRACTICE_QUESTIONS = {
  // Sample interactive questions for active practice session
  default: [
    {
      question: "Which of the following represents the core concept tested in this chapter?",
      options: ["Systematic Application", "Direct Memorization", "Trial and Error", "Unstructured Guessing"],
      correct: 0,
      explanation: "Concepts in this Grade 5 module focus on systematic conceptual understanding and structured problem-solving."
    },
    {
      question: "In standard Class 5th assessments, what is the best strategy to verify your answer?",
      options: ["Skip verification", "Reverse calculation or substitution", "Choose the longest option", "Guess based on intuition"],
      correct: 1,
      explanation: "Reverse calculation and checking boundary values ensures 100% computational accuracy."
    },
    {
      question: "Which unit or standard convention applies when measuring this chapter's target metrics?",
      options: ["Standard Metric Units (SI)", "Arbitrary Non-standard units", "Random approximations", "Undefined symbols"],
      correct: 0,
      explanation: "Class 5th follows international standard metric conventions (meters, grams, liters, seconds)."
    }
  ],
  // Subject specific drills
  "maths-5": [
    {
      question: "What is the perimeter of a rectangle with length 16 cm and breadth 9 cm?",
      options: ["50 cm", "25 cm", "144 cm", "45 cm"],
      correct: 0,
      explanation: "Perimeter = 2 × (Length + Breadth) = 2 × (16 + 9) = 2 × 25 = 50 cm."
    },
    {
      question: "What is the Roman numeral for 95?",
      options: ["LXXXXV", "XCV", "VC", "CV"],
      correct: 1,
      explanation: "XC = 90, V = 5, therefore XCV = 95."
    },
    {
      question: "Which fraction is equivalent to 0.4?",
      options: ["1/4", "2/5", "4/100", "3/8"],
      correct: 1,
      explanation: "0.4 = 4/10 = 2/5."
    }
  ],
  "science-5": [
    {
      question: "Which simple machine consists of a grooved wheel with a rope around it?",
      options: ["Lever", "Pulley", "Screw", "Wedge"],
      correct: 1,
      explanation: "A pulley uses a grooved wheel and rope to change the direction of force."
    },
    {
      question: "What part of the human brain controls involuntary actions like heartbeat and breathing?",
      options: ["Cerebrum", "Cerebellum", "Medulla (Brainstem)", "Skull"],
      correct: 2,
      explanation: "The medulla oblongata controls essential involuntary actions like breathing and circulation."
    },
    {
      question: "Which of these seeds is primarily dispersed by water?",
      options: ["Coconut", "Dandelion", "Pea pod", "Cocklebur"],
      correct: 0,
      explanation: "Coconuts have a fibrous waterproof husk allowing them to float across water bodies."
    }
  ],
  "english-5": [
    {
      question: "Identify the conjunction in: 'She wanted to play outside, but it started raining.'",
      options: ["wanted", "outside", "but", "raining"],
      correct: 2,
      explanation: "'But' connects the two independent clauses as a coordinating conjunction."
    },
    {
      question: "Choose the correct past tense of 'FREEZE':",
      options: ["Freezed", "Froze", "Frozen", "Frozed"],
      correct: 1,
      explanation: "The past simple form of 'freeze' is 'froze'."
    },
    {
      question: "Which sentence is punctuated correctly?",
      options: [
        "Where are my books asked Rahul.",
        "\"Where are my books?\" asked Rahul.",
        "\"Where are my books\", asked Rahul",
        "Where are my books? asked Rahul"
      ],
      correct: 1,
      explanation: "Direct speech requires quotation marks and the question mark inside the quote."
    }
  ],
  "sst-5": [
    {
      question: "The 0° line of longitude passing through Greenwich, England is known as:",
      options: ["Equator", "Prime Meridian", "Tropic of Capricorn", "International Date Line"],
      correct: 1,
      explanation: "The Prime Meridian is the reference 0° longitude line."
    },
    {
      question: "Which zone lies between the Tropic of Cancer and the Tropic of Capricorn?",
      options: ["Frigid Zone", "Temperate Zone", "Torrid Zone", "Polar Zone"],
      correct: 2,
      explanation: "The Torrid Zone is the hottest climatic zone situated between the tropics."
    },
    {
      question: "Who is known as the Chief Architect of the Indian Constitution?",
      options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
      correct: 1,
      explanation: "Dr. B.R. Ambedkar chaired the Drafting Committee of the Indian Constitution."
    }
  ]
};

export default function SubjectPracticeModal({ subject, onClose }) {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [activeSession, setActiveSession] = useState(null); // null = session list view, object = quiz in progress
  const [quizState, setQuizState] = useState({
    currentQIdx: 0,
    selectedOption: null,
    isSubmitted: false,
    score: 0,
    completed: false
  });

  if (!subject) return null;

  const iconMap = {
    Calculator: Calculator,
    Microscope: Microscope,
    BookOpenCheck: BookOpenCheck,
    Globe2: Globe2,
  };

  const Icon = iconMap[subject.iconName] || Target;
  const currentChapter = subject.chapters[activeChapterIndex] || subject.chapters[0];

  // Structured practice sessions for the selected chapter
  const practiceSessions = [
    {
      id: 1,
      title: "Concept Warmup Drill",
      type: "Quick MCQs",
      questionsCount: 10,
      duration: "10 mins",
      difficulty: "Foundational",
      accuracy: "90%",
      status: "completed",
      description: "Quick-fire conceptual questions to refresh core definitions and fundamental rules."
    },
    {
      id: 2,
      title: "Problem-Solving & Application Practice",
      type: "Applied Exercises",
      questionsCount: 12,
      duration: "15 mins",
      difficulty: "Intermediate",
      accuracy: "75%",
      status: "in_progress",
      description: "Step-by-step problem sets mirroring Class 5th curriculum and textbook exercises."
    },
    {
      id: 3,
      title: "Speed & Accuracy Challenge",
      type: "Timed Sprint",
      questionsCount: 15,
      duration: "15 mins",
      difficulty: "Advanced",
      accuracy: null,
      status: "pending",
      description: "Fast-paced timed test to build rapid mental calculations and exam fluency."
    },
    {
      id: 4,
      title: "Chapter Mastery Assessment",
      type: "Comprehensive Test",
      questionsCount: 12,
      duration: "20 mins",
      difficulty: "Exam Ready",
      accuracy: null,
      status: "pending",
      description: "End-of-chapter summative test evaluating overall retention and problem solving."
    }
  ];

  const questions = CHAPTER_PRACTICE_QUESTIONS[subject.id] || CHAPTER_PRACTICE_QUESTIONS.default;
  const currentQ = questions[quizState.currentQIdx] || questions[0];

  const handleStartSession = (session) => {
    setActiveSession(session);
    setQuizState({
      currentQIdx: 0,
      selectedOption: null,
      isSubmitted: false,
      score: 0,
      completed: false
    });
  };

  const handleSelectOption = (idx) => {
    if (quizState.isSubmitted) return;
    setQuizState(prev => ({ ...prev, selectedOption: idx }));
  };

  const handleSubmitAnswer = () => {
    if (quizState.selectedOption === null) return;
    const isCorrect = quizState.selectedOption === currentQ.correct;
    setQuizState(prev => ({
      ...prev,
      isSubmitted: true,
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQIdx + 1 < questions.length) {
      setQuizState(prev => ({
        ...prev,
        currentQIdx: prev.currentQIdx + 1,
        selectedOption: null,
        isSubmitted: false
      }));
    } else {
      setQuizState(prev => ({ ...prev, completed: true }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/45 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip with Teal accent (Same type as View Syllabus) */}
        <div className="p-6 sm:p-7 border-b border-teal-100 bg-gradient-to-r from-teal-50/80 via-white to-teal-50/50 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] border border-teal-200/80 flex items-center justify-center text-[#0D9488] shadow-sm flex-shrink-0">
              <Icon className="w-6 h-6" strokeWidth={2.2} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#CCFBF1] text-[#0D9488] border border-teal-200/70">
                  {subject.grade}
                </span>
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                  Practice Zone
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {subject.subjectCode}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {subject.title} Practice
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Select a chapter to practice step-by-step problem sets and interactive test drills.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two columns layout (Same type as View Syllabus) */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {/* Left Column: Chapters List */}
          <div className="lg:col-span-5 p-5 sm:p-6 space-y-2.5 overflow-y-auto max-h-[480px]">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <span>Select Chapter ({subject.chapters.length})</span>
              <span className="text-[#0D9488] font-semibold">Practice Drills</span>
            </div>

            {subject.chapters.map((chap, idx) => {
              const isSelected = idx === activeChapterIndex;
              return (
                <button
                  key={chap.id}
                  onClick={() => {
                    setActiveChapterIndex(idx);
                    setActiveSession(null); // Return to session list for newly selected chapter
                  }}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-150 flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#CCFBF1]/40 border-teal-300/80 shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      isSelected
                        ? 'bg-[#0D9488] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div className="min-w-0">
                      <div className={`text-xs sm:text-sm font-semibold truncate ${
                        isSelected ? 'text-[#0D9488]' : 'text-slate-900'
                      }`}>
                        {chap.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        4 Practice Sessions • 49 Questions
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 flex-shrink-0 ${
                    isSelected ? 'text-[#0D9488]' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Chapter's Practice Sessions */}
          <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between bg-slate-50/40 overflow-y-auto max-h-[480px]">
            {activeSession ? (
              /* Interactive Quiz In-Progress inside the session */
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/60">
                    <div>
                      <button
                        onClick={() => setActiveSession(null)}
                        className="text-xs font-semibold text-[#0D9488] hover:underline flex items-center gap-1 mb-1"
                      >
                        ← Back to {currentChapter.title} Sessions
                      </button>
                      <h3 className="text-lg font-bold text-slate-900">
                        {activeSession.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488]">
                      Question {quizState.currentQIdx + 1} of {questions.length}
                    </span>
                  </div>

                  {quizState.completed ? (
                    /* Score Completion */
                    <div className="py-8 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center mx-auto mb-3">
                        <Award className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">Session Complete!</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mb-6">
                        You scored <strong className="text-[#0D9488]">{quizState.score} out of {questions.length}</strong>!
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => handleStartSession(activeSession)}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Retry Session</span>
                        </button>
                        <button
                          onClick={() => setActiveSession(null)}
                          className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#0D9488] text-white text-xs font-semibold shadow-sm hover:bg-teal-700"
                        >
                          <span>Back to Sessions</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Active Question */
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-4 leading-snug">
                        {currentQ.question}
                      </h4>

                      <div className="space-y-2 mb-4">
                        {currentQ.options.map((opt, i) => {
                          const isSelected = quizState.selectedOption === i;
                          const isCorrect = quizState.isSubmitted && i === currentQ.correct;
                          const isWrong = quizState.isSubmitted && isSelected && i !== currentQ.correct;

                          return (
                            <button
                              key={i}
                              onClick={() => handleSelectOption(i)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                                isCorrect
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold'
                                  : isWrong
                                  ? 'bg-rose-50 border-rose-300 text-rose-900'
                                  : isSelected
                                  ? 'bg-[#CCFBF1] border-[#0D9488] text-[#0D9488] font-semibold'
                                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className={`w-5 h-5 rounded-md text-[11px] font-bold flex items-center justify-center ${
                                  isSelected ? 'bg-[#0D9488] text-white' : 'bg-slate-100 text-slate-600'
                                }`}>
                                  {String.fromCharCode(65 + i)}
                                </span>
                                <span>{opt}</span>
                              </div>
                              {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                            </button>
                          );
                        })}
                      </div>

                      {quizState.isSubmitted && (
                        <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-xs text-slate-700 mb-4">
                          <strong className="text-[#0D9488] block mb-0.5">Explanation:</strong>
                          {currentQ.explanation}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {!quizState.completed && (
                  <div className="pt-3 border-t border-slate-100 flex justify-end">
                    {!quizState.isSubmitted ? (
                      <button
                        disabled={quizState.selectedOption === null}
                        onClick={handleSubmitAnswer}
                        className={`px-5 py-2 rounded-xl text-xs font-semibold ${
                          quizState.selectedOption !== null
                            ? 'bg-[#0D9488] text-white hover:bg-teal-700 shadow-sm'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="px-5 py-2 rounded-xl bg-[#0D9488] text-white text-xs font-semibold hover:bg-teal-700 shadow-sm flex items-center gap-1.5"
                      >
                        <span>{quizState.currentQIdx + 1 < questions.length ? "Next" : "Finish"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              /* Default View: Chapter Name and its Practice Sessions */
              <div>
                {/* Chapter Banner */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                    Chapter 0{activeChapterIndex + 1} Practice Hub
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] border border-teal-200">
                    4 Structured Sessions
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                  {currentChapter.title}
                </h3>
                <p className="text-xs text-slate-600 mb-5">
                  Complete these four practice sessions to build speed, conceptual clarity, and exam readiness.
                </p>

                {/* Practice Sessions List */}
                <div className="space-y-3 mb-6">
                  {practiceSessions.map((session) => (
                    <div
                      key={session.id}
                      className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-teal-300 shadow-xs hover:shadow-sm transition-all duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-5 h-5 rounded-md bg-[#CCFBF1] text-[#0D9488] font-bold text-[10px] flex items-center justify-center">
                            S{session.id}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                            {session.title}
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded font-medium bg-slate-100 text-slate-600">
                            {session.difficulty}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mb-2">
                          {session.description}
                        </p>
                        <div className="flex items-center gap-3 text-[11px] text-slate-400">
                          <span className="flex items-center gap-1 text-slate-600 font-medium">
                            <Target className="w-3 h-3 text-[#0D9488]" />
                            {session.questionsCount} Questions
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {session.duration}
                          </span>
                          {session.accuracy && (
                            <>
                              <span>•</span>
                              <span className="text-emerald-600 font-semibold">
                                Best: {session.accuracy}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Start Practice Session Button */}
                      <button
                        onClick={() => handleStartSession(session)}
                        className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs font-semibold shadow-xs hover:shadow transition-all active:scale-[0.98]"
                      >
                        <PlayCircle className="w-3.5 h-3.5 text-white" />
                        <span>Start Drill</span>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Bottom Helpful Tip */}
                <div className="p-3.5 rounded-xl bg-[#CCFBF1]/40 border border-teal-200/70 flex items-center justify-between text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#0D9488] flex-shrink-0" />
                    <span>Practice sessions adapt to your error patterns automatically.</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#0D9488]">Smart Recall</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
