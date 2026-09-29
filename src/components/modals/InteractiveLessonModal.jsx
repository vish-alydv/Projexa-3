import React, { useState } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  Award,
  RotateCcw,
  HelpCircle
} from 'lucide-react';

export default function InteractiveLessonModal({ chapter, subjectTitle, onClose }) {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!chapter) return null;

  // Generate dynamic quiz questions based on chapter title and topics
  const generateQuestionsForChapter = (chap, subjectName) => {
    const title = chap?.title?.toLowerCase() || '';
    const topics = chap?.topics || [];

    if (title.includes('human body') || title.includes('bones') || title.includes('nerves')) {
      return [
        {
          id: 1,
          question: "Which part of the human skeletal system forms a protective cage around the heart and lungs?",
          options: ["Ribcage (12 pairs of ribs)", "Skull (Cranium)", "Spine (Backbone)", "Pelvic Girdle"],
          correctIndex: 0,
          explanation: "The ribcage consists of 12 pairs of curved bones that protect the vital heart and lungs."
        },
        {
          id: 2,
          question: "What type of joint allows maximum 360-degree rotational movement at the shoulder and hip?",
          options: ["Ball and Socket Joint", "Hinge Joint", "Pivot Joint", "Fixed Joint"],
          correctIndex: 0,
          explanation: "Ball and socket joints allow movement in almost all directions, found at shoulder and hip joints."
        },
        {
          id: 3,
          question: "Which major organ acts as the control center of the human nervous system?",
          options: ["Brain", "Heart", "Spinal Cord", "Stomach"],
          correctIndex: 0,
          explanation: "The brain processes information from senses and controls all body functions."
        },
        {
          id: 4,
          question: "How many total bones are in a fully developed adult human skeleton?",
          options: ["206 bones", "300 bones", "150 bones", "500 bones"],
          correctIndex: 0,
          explanation: "An adult human body has 206 distinct bones supporting and protecting organs."
        },
        {
          id: 5,
          question: "Which long bundle of nerves inside the backbone transmits signals between the brain and body parts?",
          options: ["Spinal Cord", "Femur", "Tendons", "Cartilage"],
          correctIndex: 0,
          explanation: "The spinal cord runs inside the vertebral column and carries messages to and from the brain."
        }
      ];
    }

    if (title.includes('plant') || title.includes('reproduction') || title.includes('adaptation')) {
      return [
        {
          id: 1,
          question: "Which part of a flower develops into a seed after successful fertilization?",
          options: ["Ovule", "Petal", "Sepal", "Stem"],
          correctIndex: 0,
          explanation: "The ovule inside the ovary develops into a seed containing the plant embryo."
        },
        {
          id: 2,
          question: "Which of these seeds is light with feathery bristles adapted for wind dispersal?",
          options: ["Dandelion & Cotton", "Coconut", "Mango", "Pea Pod"],
          correctIndex: 0,
          explanation: "Dandelion seeds have light hair-like structures (parachutes) easily carried by wind currents."
        },
        {
          id: 3,
          question: "What is the process called when a seed sprouts and begins growing into a young seedling?",
          options: ["Germination", "Photosynthesis", "Transpiration", "Pollination"],
          correctIndex: 0,
          explanation: "Germination is the process where a seed absorbs water and warmth to sprout into a plant."
        },
        {
          id: 4,
          question: "Why do desert plants like Cactus modify their leaves into sharp spines?",
          options: ["To prevent water loss through transpiration", "To attract insects", "To capture more sunlight", "To store heavy rainfall"],
          correctIndex: 0,
          explanation: "Spines reduce surface area, preventing water loss in hot, dry desert climates."
        },
        {
          id: 5,
          question: "Which green pigment inside leaf cells absorbs sunlight energy for photosynthesis?",
          options: ["Chlorophyll", "Stomata", "Xylem", "Carotene"],
          correctIndex: 0,
          explanation: "Chlorophyll traps sunlight to convert carbon dioxide and water into plant nutrients."
        }
      ];
    }

    if (title.includes('number') || title.includes('roman') || title.includes('operation')) {
      return [
        {
          id: 1,
          question: "Which Roman numeral correctly represents the number 90?",
          options: ["XC", "LXXXX", "CX", "LXL"],
          correctIndex: 0,
          explanation: "100 is C and 10 is X. Subtracting 10 from 100 gives XC (90)."
        },
        {
          id: 2,
          question: "In the number 7,84,315, what is the place value of digit 8?",
          options: ["80,000 (Eighty Thousand)", "8,000", "800", "8,00,000"],
          correctIndex: 0,
          explanation: "The digit 8 is in the ten-thousands place, so its value is 80,000."
        },
        {
          id: 3,
          question: "What is 1 Million equivalent to in the Indian numbering system?",
          options: ["10 Lakhs", "1 Crore", "100 Thousands", "1 Lakh"],
          correctIndex: 0,
          explanation: "1 Million = 1,000,000 which equals 10 Lakhs in the Indian system."
        },
        {
          id: 4,
          question: "What is the successor of 9,99,999?",
          options: ["10,00,000 (Ten Lakh)", "9,99,990", "1,00,00,000", "9,99,998"],
          correctIndex: 0,
          explanation: "Adding 1 to 9,99,999 gives 10,00,000."
        },
        {
          id: 5,
          question: "What is the result when any non-zero number is divided by itself?",
          options: ["1", "0", "The number itself", "Undefined"],
          correctIndex: 0,
          explanation: "Any non-zero number divided by itself always equals 1."
        }
      ];
    }

    if (title.includes('fraction') || title.includes('decimal')) {
      return [
        {
          id: 1,
          question: "Which fraction is equivalent to 3/5 when both numerator and denominator are multiplied by 3?",
          options: ["9/15", "6/10", "3/15", "9/5"],
          correctIndex: 0,
          explanation: "(3×3)/(5×3) = 9/15."
        },
        {
          id: 2,
          question: "What is 0.75 expressed as a simplified vulgar fraction?",
          options: ["3/4", "1/2", "1/4", "2/5"],
          correctIndex: 0,
          explanation: "75/100 simplifies to 3/4."
        },
        {
          id: 3,
          question: "What is the sum of 2/7 and 3/7?",
          options: ["5/7", "5/14", "6/7", "1/7"],
          correctIndex: 0,
          explanation: "Like fractions add numerators directly: (2+3)/7 = 5/7."
        },
        {
          id: 4,
          question: "Which decimal number is greater: 0.8 or 0.79?",
          options: ["0.8", "0.79", "Both are equal", "Cannot be compared"],
          correctIndex: 0,
          explanation: "0.8 = 0.80 which is greater than 0.79."
        },
        {
          id: 5,
          question: "How many hundredths are there in the decimal number 0.45?",
          options: ["45 hundredths", "4 hundredths", "5 hundredths", "450 hundredths"],
          correctIndex: 0,
          explanation: "0.45 represents 45 parts out of 100, which is 45 hundredths."
        }
      ];
    }

    // Default questions generated from topics
    return topics.slice(0, 5).map((topic, idx) => ({
      id: idx + 1,
      question: `Practice Question ${idx + 1} on ${topic}: Which concept rule is most accurate for ${topic}?`,
      options: [
        `Option A: ${topic} requires precise observation and standard step-by-step methods`,
        `Option B: ${topic} can be solved without checking units or definitions`,
        `Option C: ${topic} is only applicable in theoretical calculations`,
        `Option D: ${topic} ignores standard mathematical/scientific rules`
      ],
      correctIndex: 0,
      explanation: `Mastering ${topic} involves following fundamental concepts and checking calculations thoroughly!`
    }));
  };

  const questions = generateQuestionsForChapter(chapter, subjectTitle);
  const currentQ = questions[currentQIndex] || questions[0];

  const handleSelectOption = (optIdx) => {
    if (showFeedback) return;
    setSelectedOption(optIdx);
    setShowFeedback(true);
    setUserAnswers((prev) => ({
      ...prev,
      [currentQIndex]: optIdx
    }));
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      const prevIdx = currentQIndex - 1;
      setCurrentQIndex(prevIdx);
      setSelectedOption(userAnswers[prevIdx] ?? null);
      setShowFeedback(userAnswers[prevIdx] !== undefined);
    }
  };

  const handleRestart = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setUserAnswers({});
    setIsCompleted(false);
  };

  // Calculate score
  let score = 0;
  questions.forEach((q, idx) => {
    if (userAnswers[idx] === q.correctIndex) {
      score += 1;
    }
  });

  const accuracy = Math.round((score / questions.length) * 100);

  return (
    <div className="fixed inset-0 z-[90] bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-indigo-100 bg-gradient-to-r from-indigo-50/90 via-white to-purple-50/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                  {subjectTitle || 'Class 5th'} • Chapter Quiz
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-indigo-100 text-indigo-700">
                  Direct Quiz Mode
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                {chapter.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Body */}
        {!isCompleted ? (
          <div className="p-6 sm:p-8 flex-1 overflow-y-auto space-y-6">
            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600 font-bold">
                <span>Question {currentQIndex + 1} of {questions.length}</span>
                <span className="text-indigo-600 font-extrabold">
                  {Math.round(((currentQIndex + 1) / questions.length) * 100)}% Progress
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Chapter Test Question</span>
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                {currentQ.question}
              </h4>
            </div>

            {/* MCQ Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedOption === oIdx;
                const isCorrect = oIdx === currentQ.correctIndex;

                let optionStyle = "bg-white hover:bg-slate-50 border-slate-200/90 text-slate-800 hover:border-indigo-300";
                if (showFeedback) {
                  if (isCorrect) {
                    optionStyle = "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold shadow-xs";
                  } else if (isSelected && !isCorrect) {
                    optionStyle = "bg-rose-50 border-rose-300 text-rose-900 font-medium";
                  } else {
                    optionStyle = "bg-white border-slate-200/60 text-slate-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    disabled={showFeedback}
                    className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                        showFeedback && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : showFeedback && isSelected && !isCorrect
                          ? 'bg-rose-600 text-white'
                          : 'bg-indigo-50 text-indigo-700'
                      }`}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {showFeedback && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {showFeedback && (
              <div className={`p-4 rounded-2xl text-xs sm:text-sm font-medium border animate-in fade-in duration-200 ${
                selectedOption === currentQ.correctIndex
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                  : 'bg-amber-50 text-amber-900 border-amber-200'
              }`}>
                <div className="flex items-center gap-2 font-bold mb-1">
                  {selectedOption === currentQ.correctIndex ? (
                    <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                    </span>
                  ) : (
                    <span className="text-amber-700 font-extrabold flex items-center gap-1">
                      <HelpCircle className="w-4 h-4" /> Solution Explanation:
                    </span>
                  )}
                </div>
                <p className="leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}
          </div>
        ) : (
          /* Score Summary Screen */
          <div className="p-6 sm:p-10 flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-md">
              <Award className="w-10 h-10" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">
                Chapter Quiz Completed
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                {accuracy >= 80 ? "🎉 Outstanding Score!" : accuracy >= 50 ? "👍 Good Effort!" : "💪 Keep Practicing!"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium max-w-md">
                You scored <strong className="text-indigo-700 font-bold">{score} out of {questions.length}</strong> ({accuracy}% accuracy) on <strong>{chapter.title}</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100 text-center">
                <div className="text-2xl font-extrabold text-indigo-700">{score}/{questions.length}</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Correct Answers</div>
              </div>
              <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100 text-center">
                <div className="text-2xl font-extrabold text-indigo-700">{accuracy}%</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Accuracy Rate</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 w-full max-w-sm">
              <button
                onClick={handleRestart}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 text-xs font-bold transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-colors"
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        {!isCompleted && (
          <div className="p-5 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
            <button
              disabled={currentQIndex === 0}
              onClick={handlePrev}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                currentQIndex > 0
                  ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  : 'opacity-40 text-slate-400 border-transparent cursor-not-allowed'
              }`}
            >
              Previous Question
            </button>

            <button
              onClick={handleNext}
              disabled={!showFeedback}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                showFeedback
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 active:scale-95'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{currentQIndex + 1 < questions.length ? "Next Question" : "Finish Quiz"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
