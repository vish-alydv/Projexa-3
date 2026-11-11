import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Award, 
  RotateCcw, 
  Sparkles, 
  Target,
  Calculator,
  Microscope,
  BookOpenCheck,
  Globe2
} from 'lucide-react';

const PRACTICE_QUESTIONS = {
  "maths-5": [
    {
      question: "What is the perimeter of a rectangular garden that is 14 meters long and 8 meters wide?",
      options: ["44 meters", "28 meters", "112 meters", "22 meters"],
      correct: 0,
      explanation: "Perimeter = 2 × (Length + Breadth) = 2 × (14 + 8) = 2 × 22 = 44 meters."
    },
    {
      question: "Which of the following is equivalent to 3/4 as a decimal?",
      options: ["0.34", "0.75", "0.43", "0.25"],
      correct: 1,
      explanation: "3 ÷ 4 = 0.75 or 75 hundredths."
    },
    {
      question: "What is the Roman numeral representation for the number 90?",
      options: ["LXXXX", "CX", "XC", "IC"],
      correct: 2,
      explanation: "XC represents 100 - 10 = 90."
    }
  ],
  "science-5": [
    {
      question: "Which organ system protects delicate internal organs like the brain, heart, and lungs?",
      options: ["Digestive System", "Skeletal System", "Respiratory System", "Circulatory System"],
      correct: 1,
      explanation: "The skull protects the brain, and the ribcage protects the heart and lungs."
    },
    {
      question: "Dandelion seeds have tiny parachute-like hair. How are they primarily dispersed?",
      options: ["By Animals", "By Water", "By Wind", "By Explosion"],
      correct: 2,
      explanation: "Dandelion seeds are extremely light with tufts of hair suited for wind dispersal."
    },
    {
      question: "A see-saw is an example of which simple machine?",
      options: ["Inclined Plane", "Pulley", "Class 1 Lever", "Wheel and Axle"],
      correct: 2,
      explanation: "A see-saw has the fulcrum in the middle, making it a Class 1 lever."
    }
  ],
  "english-5": [
    {
      question: "Identify the adjective in the sentence: 'The curious detective solved the difficult puzzle.'",
      options: ["detective", "curious & difficult", "solved", "puzzle"],
      correct: 1,
      explanation: "'Curious' describes the detective and 'difficult' describes the puzzle."
    },
    {
      question: "Choose the correct past continuous form: 'The students _____ their homework when the power went out.'",
      options: ["were doing", "are doing", "did", "have done"],
      correct: 0,
      explanation: "For plural 'students' in past continuous tense, we use 'were doing'."
    },
    {
      question: "What is the synonym of the word 'ANXIOUS'?",
      options: ["Calm", "Eager", "Worried", "Confident"],
      correct: 2,
      explanation: "'Anxious' means experiencing worry, unease, or nervousness."
    }
  ],
  "sst-5": [
    {
      question: "Which imaginary line divides the Earth into the Northern and Southern Hemispheres at 0° latitude?",
      options: ["Prime Meridian", "Tropic of Cancer", "The Equator", "Arctic Circle"],
      correct: 2,
      explanation: "The Equator is the 0° line of latitude dividing the Earth into two equal halves."
    },
    {
      question: "How many continents are there on planet Earth?",
      options: ["5", "6", "7", "8"],
      correct: 2,
      explanation: "The 7 continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
    },
    {
      question: "In which year did India attain independence from British rule?",
      options: ["1942", "1947", "1950", "1930"],
      correct: 1,
      explanation: "India became an independent sovereign nation on August 15, 1947."
    }
  ]
};

export default function PracticeModal({ subject, onClose }) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  if (!subject) return null;

  const questions = PRACTICE_QUESTIONS[subject.id] || PRACTICE_QUESTIONS["maths-5"];
  const currentQ = questions[currentQuestionIdx];

  const handleSelectOption = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQ.correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx + 1 < questions.length) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/45 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Close practice"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-teal-100">
          <div className="w-10 h-10 rounded-xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] font-bold">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#CCFBF1] text-[#0D9488]">
                {subject.grade}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Interactive Practice
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              {subject.title} Practice Test
            </h3>
          </div>
        </div>

        {completed ? (
          /* Results Screen */
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-3xl bg-[#CCFBF1] border border-teal-200 flex items-center justify-center text-[#0D9488] mx-auto mb-4 shadow-sm">
              <Award className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-extrabold text-slate-900 mb-1">
              Practice Complete!
            </h4>
            <p className="text-sm text-slate-600 mb-6">
              You scored <strong className="text-[#0D9488] text-base">{score} out of {questions.length}</strong> questions correctly!
            </p>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 mb-8 max-w-sm mx-auto">
              <div className="text-xs font-semibold text-teal-800">
                {score === questions.length ? "🌟 Outstanding Mastery! Ready for next chapter." : "👍 Great effort! Review the explanations to achieve 100%."}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs font-semibold shadow-md shadow-teal-700/20 transition-all"
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Question View */
          <div>
            {/* Progress indicators */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
              <span>Question {currentQuestionIdx + 1} of {questions.length}</span>
              <span className="text-[#0D9488] font-bold">Class 5th Standard</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-6">
              <div 
                className="h-full bg-[#0D9488] rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-5">
              {currentQ.question}
            </h4>

            {/* Options List */}
            <div className="space-y-2.5 mb-6">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = isSubmitted && idx === currentQ.correct;
                const isWrong = isSubmitted && isSelected && idx !== currentQ.correct;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-150 flex items-center justify-between text-xs sm:text-sm font-medium ${
                      isCorrect
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold'
                        : isWrong
                        ? 'bg-rose-50 border-rose-300 text-rose-900'
                        : isSelected
                        ? 'bg-[#CCFBF1]/60 border-[#0D9488] text-[#0D9488] font-semibold'
                        : 'bg-white hover:bg-slate-50 border-slate-200/80 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                        isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isWrong
                          ? 'bg-rose-600 text-white'
                          : isSelected
                          ? 'bg-[#0D9488] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after submit */}
            {isSubmitted && (
              <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200/70 text-xs text-slate-700 mb-6 animate-in fade-in">
                <span className="font-bold text-[#0D9488] block mb-1">Explanation:</span>
                {currentQ.explanation}
              </div>
            )}

            {/* Bottom Button */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              {!isSubmitted ? (
                <button
                  disabled={selectedOption === null}
                  onClick={handleConfirmAnswer}
                  className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedOption !== null
                      ? 'bg-[#0D9488] hover:bg-teal-700 text-white shadow-sm active:scale-[0.98]'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold shadow-sm active:scale-[0.98]"
                >
                  <span>{currentQuestionIdx + 1 < questions.length ? "Next Question" : "View Summary"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
