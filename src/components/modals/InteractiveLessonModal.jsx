import React, { useState } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle,
  Award
} from 'lucide-react';

export default function InteractiveLessonModal({ chapter, subjectTitle, onClose }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);

  if (!chapter) return null;

  // Generate interactive slides based on chapter topics
  const topics = chapter.topics || ["Topic 1 Overview", "Topic 2 Key Rules", "Topic 3 Practice"];
  const slides = topics.map((topic, idx) => ({
    id: idx + 1,
    title: topic,
    content: `In this lesson slide, we explore ${topic} in detail for Class 5. Understanding this concept builds strong foundational clarity for ${subjectTitle || 'Class 5th curriculum'}.`,
    keyPoints: [
      `Key Concept Rule 0${idx + 1}: Always pay attention to place value, definitions, and real-world examples.`,
      `Practical Tip: Use mental visualization or scratch paper to solve multi-step problems accurately.`,
      `Common Mistake to Avoid: Double-check calculations and read questions carefully before choosing an option.`
    ],
    miniQuestion: {
      question: `Quick Check for ${topic}: Which step is most important when studying this topic?`,
      options: [
        "Reading the rule carefully and practicing example questions",
        "Guessing the answer without calculating",
        "Skipping the definitions",
        "Ignoring units and measurements"
      ],
      correctIndex: 0,
      explanation: "Careful reading and structured practice always yield 100% accuracy!"
    }
  }));

  const currentSlide = slides[currentSlideIndex] || slides[0];

  const handleNextSlide = () => {
    setSelectedQuizOption(null);
    setShowAnswerFeedback(false);
    if (currentSlideIndex + 1 < slides.length) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      onClose();
    }
  };

  const handlePrevSlide = () => {
    setSelectedQuizOption(null);
    setShowAnswerFeedback(false);
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-[90] bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
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
              <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                {subjectTitle} • Interactive Lesson
              </span>
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

        {/* Body */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto space-y-6">
          {/* Progress Pill Bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Lesson Slide {currentSlideIndex + 1} of {slides.length}</span>
            <span className="text-indigo-600 font-bold">{Math.round(((currentSlideIndex + 1) / slides.length) * 100)}% Completed</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
            />
          </div>

          {/* Slide Content Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6">
            <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>{currentSlide.title}</span>
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">
              {currentSlide.content}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Key Concepts & Rules:</span>
              {currentSlide.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Interactive Practice Check */}
          <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Quick Knowledge Check</span>
            </div>
            <p className="text-sm font-bold text-slate-900 mb-4">
              {currentSlide.miniQuestion.question}
            </p>

            <div className="space-y-2 mb-4">
              {currentSlide.miniQuestion.options.map((opt, oIdx) => {
                const isSelected = selectedQuizOption === oIdx;
                const isCorrect = oIdx === currentSlide.miniQuestion.correctIndex;

                return (
                  <button
                    key={oIdx}
                    onClick={() => {
                      setSelectedQuizOption(oIdx);
                      setShowAnswerFeedback(true);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      isSelected
                        ? isCorrect
                          ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold'
                          : 'bg-rose-100 border-rose-300 text-rose-900'
                        : 'bg-white hover:bg-slate-50 border-slate-200/90 text-slate-800'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {showAnswerFeedback && (
              <div className={`p-3.5 rounded-xl text-xs font-semibold ${
                selectedQuizOption === currentSlide.miniQuestion.correctIndex
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}>
                {selectedQuizOption === currentSlide.miniQuestion.correctIndex ? '✓ Correct! ' : '✗ Keep trying! '}
                {currentSlide.miniQuestion.explanation}
              </div>
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-5 border-t border-slate-100 flex items-center justify-between">
          <button
            disabled={currentSlideIndex === 0}
            onClick={handlePrevSlide}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
              currentSlideIndex > 0
                ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                : 'opacity-40 text-slate-400 border-transparent cursor-not-allowed'
            }`}
          >
            Previous Slide
          </button>

          <button
            onClick={handleNextSlide}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
          >
            <span>{currentSlideIndex + 1 < slides.length ? "Next Slide" : "Finish Lesson"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
