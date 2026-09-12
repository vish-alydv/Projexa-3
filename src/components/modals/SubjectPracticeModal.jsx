import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  PlayCircle, 
  Clock, 
  Sparkles, 
  ChevronRight,
  Calculator,
  Microscope,
  BookOpenCheck,
  Globe2,
  Target,
  Award
} from 'lucide-react';
import FullScreenDrillModal from '../practice/FullScreenDrillModal';

export default function SubjectPracticeModal({ subject, onClose }) {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [fullScreenDrill, setFullScreenDrill] = useState(null);

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
      questionsCount: 5,
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
      questionsCount: 5,
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
      questionsCount: 5,
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
      questionsCount: 5,
      duration: "20 mins",
      difficulty: "Exam Ready",
      accuracy: null,
      status: "pending",
      description: "End-of-chapter summative test evaluating overall retention and problem solving."
    }
  ];

  return (
    <>
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
                    onClick={() => setActiveChapterIndex(idx)}
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
                          4 Practice Sessions • Fullscreen Drills
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
                  Click <strong>Start Drill</strong> on any session to open the full-screen interactive practice test with timers, instant solutions, and navigation.
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

                      {/* Start Drill Button -> Opens Full Screen Drill */}
                      <button
                        onClick={() => setFullScreenDrill({ session, chapter: currentChapter })}
                        className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                      >
                        <PlayCircle className="w-4 h-4 text-white" />
                        <span>Start Drill</span>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Bottom Helpful Tip */}
                <div className="p-3.5 rounded-xl bg-[#CCFBF1]/40 border border-teal-200/70 flex items-center justify-between text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#0D9488] flex-shrink-0" />
                    <span>Fullscreen drills simulate real school exams with zero distractions.</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#0D9488]">Exam Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Drill Window */}
      {fullScreenDrill && (
        <FullScreenDrillModal
          subject={subject}
          chapter={fullScreenDrill.chapter}
          session={fullScreenDrill.session}
          onClose={() => setFullScreenDrill(null)}
        />
      )}
    </>
  );
}
