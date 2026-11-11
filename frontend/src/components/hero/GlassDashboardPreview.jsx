import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  Flame, 
  Clock, 
  Code2, 
  BookMarked,
  Sparkles,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export default function GlassDashboardPreview({ onContinueLearning }) {
  const [completedLessonsCount, setCompletedLessonsCount] = useState(28);
  const [isHovered, setIsHovered] = useState(false);

  const totalLessons = 36;
  const progressPercent = Math.round((completedLessonsCount / totalLessons) * 100);

  const lessons = [
    { id: 26, title: "Modern CSS Architecture & Tailwind", duration: "24m", done: true },
    { id: 27, title: "Component Composition & Clean Props", duration: "18m", done: true },
    { id: 28, title: "State Machines & UI Synchronization", duration: "32m", active: true },
    { id: 29, title: "Fullstack Data Fetching & Cache Tuning", duration: "40m", done: false },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background soft ambient glow behind the glass card (Adobe CC aesthetic) */}
      <div className="absolute -top-6 -left-6 w-72 h-72 bg-brand-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -right-6 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glass Dashboard Card */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.07),0_1px_3px_rgba(0,0,0,0.02)] p-6 sm:p-7 transition-all duration-300"
      >
        {/* Top Header Strip: Current Learning Path */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-50 border border-brand-200/60 flex items-center justify-center text-brand-600 shadow-sm">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                Current learning path
              </span>
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                Web Development
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4 Day Streak</span>
          </div>
        </div>

        {/* Progress Metric Section (78% Progress) */}
        <div className="my-5 p-4 rounded-2xl bg-slate-50/70 border border-slate-100/80 backdrop-blur-md">
          <div className="flex items-baseline justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Overall Progress</span>
              <span className="text-xs px-2 py-0.5 rounded-md bg-white text-slate-700 font-medium border border-slate-200/60">
                {completedLessonsCount} of {totalLessons} completed
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-brand-600 tracking-tight">78%</span>
            </div>
          </div>

          {/* Smooth Progress Bar */}
          <div className="w-full h-2.5 bg-slate-200/70 rounded-full overflow-hidden p-0.5">
            <div 
              className="h-full bg-gradient-to-r from-brand-500 to-indigo-600 rounded-full transition-all duration-700 ease-out shadow-sm"
              style={{ width: '78%' }}
            />
          </div>

          <div className="flex items-center justify-between mt-2.5 text-[11px] text-slate-600">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> 8h remaining to certification
            </span>
            <span className="text-brand-600 font-medium">On Track</span>
          </div>
        </div>

        {/* Completed Lessons & Up Next List */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-1">
            <span>Completed Lessons & Next Topic</span>
            <span className="text-[11px] font-normal text-slate-600">Module 4 of 6</span>
          </div>

          <div className="space-y-1.5">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`flex items-center justify-between p-2.5 rounded-xl border transition-all duration-150 ${
                  lesson.active
                    ? 'bg-brand-50/70 border-brand-200/80 shadow-sm'
                    : lesson.done
                    ? 'bg-white/60 border-slate-100/80 text-slate-600'
                    : 'bg-slate-50/40 border-slate-100/50 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {lesson.done ? (
                    <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  ) : lesson.active ? (
                    <div className="w-4 h-4 rounded-full border-2 border-brand-600 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex-shrink-0" />
                  )}
                  <span className={`text-xs truncate font-medium ${lesson.active ? 'text-slate-900 font-semibold' : ''}`}>
                    {lesson.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                  <span className="text-[11px] text-slate-600">{lesson.duration}</span>
                  {lesson.active && (
                    <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-brand-600 text-white rounded">
                      Now
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Learning Button */}
        <button
          onClick={onContinueLearning}
          className="w-full group flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all duration-200 active:scale-[0.99]"
        >
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <Play className="w-3 h-3 fill-white text-white ml-0.5" />
          </div>
          <span>Continue Learning</span>
          <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 transition-transform duration-150" />
        </button>

        {/* Floating micro-pill badge */}
        <div className="absolute -bottom-3 -right-2 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xl border border-white shadow-lg text-xs text-slate-700 font-medium">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
          <span>Top 5% learning velocity</span>
        </div>
      </div>
    </div>
  );
}
