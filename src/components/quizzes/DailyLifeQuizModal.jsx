import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  Sparkles, 
  Lightbulb, 
  Compass, 
  ShoppingCart, 
  Utensils, 
  Navigation, 
  MessageSquare,
  Check
} from 'lucide-react';

export default function DailyLifeQuizModal({ quiz, onClose }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!quiz) return null;

  const currentQ = quiz.questions[currentIdx];

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === currentQ.correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quiz.questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/45 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-teal-100 bg-gradient-to-r from-teal-50/80 via-white to-teal-50/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#CCFBF1] border border-teal-200 flex items-center justify-center text-[#0D9488] shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#CCFBF1] text-[#0D9488]">
                  {quiz.subjectName}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {quiz.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                {quiz.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {isCompleted ? (
            /* Completed Screen */
            <div className="py-6 text-center">
              <div className="w-16 h-16 rounded-3xl bg-[#CCFBF1] border border-teal-200 flex items-center justify-center text-[#0D9488] mx-auto mb-4 shadow-sm">
                <Award className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-[#CCFBF1] px-3 py-1 rounded-full border border-teal-200">
                Daily Life Master
              </span>

              <h3 className="text-2xl font-extrabold text-slate-900 mt-3 mb-1">
                Quiz Finished!
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                You scored <strong className="text-[#0D9488] text-base">{score} out of {quiz.questions.length}</strong>!
              </p>

              {/* Life skill certificate card */}
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200/80 mb-8 max-w-md mx-auto text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0D9488] mb-1">
                  <Lightbulb className="w-4 h-4" />
                  <span>Practical Life Skill Unlocked:</span>
                </div>
                <div className="text-xs font-bold text-slate-800 mb-1">
                  {quiz.lifeSkill}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You now know how to apply 5th grade academic concepts in everyday grocery markets, home kitchens, and community environments.
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs font-semibold shadow-md shadow-teal-700/20"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Active Question Screen */
            <div>
              {/* Progress Tracker */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                <span>Daily Life Case {currentIdx + 1} of {quiz.questions.length}</span>
                <span className="text-[#0D9488] font-bold">Real-World Application</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-[#0D9488] rounded-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / quiz.questions.length) * 100}%` }}
                />
              </div>

              {/* Real World Scenario Box */}
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 mb-5">
                <div className="flex items-center gap-2 text-[11px] font-bold text-[#0D9488] uppercase tracking-wider mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Everyday Scenario</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  "{currentQ.scenario}"
                </p>
              </div>

              {/* Question */}
              <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-5">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5 mb-6">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = isAnswered && idx === currentQ.correct;
                  const isWrong = isAnswered && isSelected && idx !== currentQ.correct;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold'
                          : isWrong
                          ? 'bg-rose-50 border-rose-300 text-rose-900'
                          : isSelected
                          ? 'bg-[#CCFBF1] border-[#0D9488] text-[#0D9488] font-semibold'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                          isSelected ? 'bg-[#0D9488] text-white' : 'bg-slate-100 text-slate-600'
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

              {/* Instant Real-World Explanation & Takeaway */}
              {isAnswered && (
                <div className="p-4 rounded-2xl bg-teal-50/90 border border-teal-200 text-xs text-slate-700 mb-6 space-y-2 animate-in fade-in">
                  <div>
                    <strong className="text-[#0D9488] block mb-0.5">💡 Why this happens in real life:</strong>
                    <p className="text-slate-700">{currentQ.realLifeExplanation}</p>
                  </div>
                  <div className="pt-2 border-t border-teal-200/60 flex items-start gap-1.5 text-slate-600">
                    <span className="font-semibold text-[#0D9488]">Takeaway:</span>
                    <span>{currentQ.takeaway}</span>
                  </div>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                {!isAnswered ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleCheckAnswer}
                    className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      selectedOption !== null
                        ? 'bg-[#0D9488] hover:bg-teal-700 text-white shadow-sm active:scale-[0.98]'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Check Everyday Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold shadow-sm active:scale-[0.98]"
                  >
                    <span>{currentIdx + 1 < quiz.questions.length ? "Next Daily Life Case" : "See Life Skills Score"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
