import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  PlayCircle, 
  Clock, 
  BookOpen, 
  Award, 
  Sparkles, 
  ChevronRight,
  Calculator,
  Microscope,
  BookOpenCheck,
  Globe2,
  FileText,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export default function SubjectChapterModal({ subject, onClose, onStartLesson }) {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  if (!subject) return null;

  const iconMap = {
    Calculator: Calculator,
    Microscope: Microscope,
    BookOpenCheck: BookOpenCheck,
    Globe2: Globe2,
  };

  const Icon = iconMap[subject.iconName] || BookOpen;
  const currentChapter = subject.chapters[activeChapterIndex] || subject.chapters[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip with Teal accent */}
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
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {subject.subjectCode}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {subject.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {subject.tagline}
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

        {/* Modal Body: Two columns layout */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {/* Left Column: Chapters List */}
          <div className="lg:col-span-5 p-5 sm:p-6 space-y-2.5 overflow-y-auto max-h-[450px]">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <span>Syllabus Chapters ({subject.chapters.length})</span>
              <span className="text-[#0D9488]">{subject.progress}% Completed</span>
            </div>

            {subject.chapters.map((chap, idx) => {
              const isSelected = idx === activeChapterIndex;
              return (
                <button
                  key={chap.id}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-150 flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#CCFBF1]/40 border-teal-300/80 shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      chap.status === 'completed'
                        ? 'bg-emerald-100 text-emerald-700'
                        : isSelected
                        ? 'bg-[#0D9488] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {chap.status === 'completed' ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        `0${idx + 1}`
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className={`text-xs sm:text-sm font-semibold truncate ${
                        isSelected ? 'text-[#0D9488]' : 'text-slate-900'
                      }`}>
                        {chap.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {chap.lessons} lessons • {chap.duration}
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

          {/* Right Column: Selected Chapter Details */}
          <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between bg-slate-50/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                  Chapter 0{activeChapterIndex + 1} Overview
                </span>
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                  currentChapter.status === 'completed'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : currentChapter.status === 'in_progress'
                    ? 'bg-[#CCFBF1] text-[#0D9488] border-teal-200'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
                  {currentChapter.status === 'completed'
                    ? 'Completed ✓'
                    : currentChapter.status === 'in_progress'
                    ? 'In Progress'
                    : 'Up Next'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {currentChapter.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#0D9488]" />
                  {currentChapter.lessons} Interactive Lessons
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {currentChapter.duration} Total Duration
                </span>
              </div>

              {/* Topics list */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Core Topics Covered:
                </h4>
                <div className="space-y-2">
                  {currentChapter.topics?.map((topic, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-slate-200/70 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#0D9488]" />
                        <span className="font-medium text-slate-800">{topic}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">15m practice</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key competencies */}
              <div className="p-4 rounded-2xl bg-[#CCFBF1]/40 border border-teal-200/70 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0D9488] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Class 5th Learning Milestone</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Completing this chapter qualifies students for the end-of-module interactive test and earns the <strong>{subject.title} Junior Master</strong> badge.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onStartLesson(currentChapter);
                }}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-teal-700/20 transition-all active:scale-[0.98]"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Start Chapter Lessons</span>
              </button>

              <button
                onClick={() => {
                  alert(`Downloading practice worksheet for: ${currentChapter.title}`);
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                <FileText className="w-4 h-4 text-[#0D9488]" />
                <span>Worksheet PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
