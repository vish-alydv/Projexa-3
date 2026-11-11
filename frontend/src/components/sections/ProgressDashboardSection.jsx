import React from 'react';
import { 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Calendar, 
  ArrowUpRight,
  Flame,
  Award,
  ChevronRight,
  BarChart3
} from 'lucide-react';
import GlassCard from '../common/GlassCard';
import { USER_PROGRESS_MOCK } from '../../data/coursesData';

export default function ProgressDashboardSection({ onStartLearning }) {
  const data = USER_PROGRESS_MOCK;

  return (
    <section id="progress" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/70 text-xs font-semibold text-brand-700 uppercase tracking-wider mb-4 shadow-sm">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Learner Diagnostic Console</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Track Progress With Granular Precision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our diagnostic telemetry turns everyday learning into clear, momentum-driven milestones. Know exactly where your knowledge stands.
          </p>
        </div>

        {/* Large Premium Glass Dashboard */}
        <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.06),0_1px_3px_rgba(0,0,0,0.02)] p-6 sm:p-10">
          {/* Top 4 Core Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-8 border-b border-slate-100">
            {/* Metric 1: Weekly Progress: 82% */}
            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-3">
                <span>Weekly Progress</span>
                <span className="p-1 rounded-lg bg-brand-50 text-brand-600">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  82%
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-brand-600 font-semibold">
                  <span>+14% vs last week</span>
                </div>
              </div>
            </div>

            {/* Metric 2: Lessons Completed: 12 */}
            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-3">
                <span>Lessons Completed</span>
                <span className="p-1 rounded-lg bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  12
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
                  <span>Target: 15 / week</span>
                </div>
              </div>
            </div>

            {/* Metric 3: Learning Time: 4 hours */}
            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-3">
                <span>Learning Time</span>
                <span className="p-1 rounded-lg bg-indigo-50 text-indigo-600">
                  <Clock className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  4 hours
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
                  <span>Active study focus</span>
                </div>
              </div>
            </div>

            {/* Metric 4: Courses in Progress: 3 */}
            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-3">
                <span>Courses in Progress</span>
                <span className="p-1 rounded-lg bg-violet-50 text-violet-600">
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  3
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
                  <span>Web Dev, AI & SQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visualization Row: Activity Graph & Active Track */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-stretch">
            {/* Left: Weekly Progress Visualization Bar Graph */}
            <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-2xl bg-slate-50/60 border border-slate-200/60">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Weekly Learning Intensity</h3>
                    <p className="text-xs text-slate-600">Daily minutes recorded across sandboxes & exercises</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200/60">
                    Week 37, 2026
                  </span>
                </div>

                {/* Bar Graph Visual */}
                <div className="h-44 flex items-end justify-between gap-3 pt-4 px-2">
                  {data.weeklyActivity.map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                      <div className="text-[10px] font-semibold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.minutes}m
                      </div>
                      <div className="w-full max-w-[36px] bg-slate-200/80 rounded-xl overflow-hidden h-32 flex items-end p-0.5">
                        <div
                          className={`w-full rounded-lg transition-all duration-500 ${
                            item.minutes > 50
                              ? 'bg-brand-600 shadow-sm'
                              : item.minutes > 0
                              ? 'bg-brand-400'
                              : 'bg-transparent'
                          }`}
                          style={{ height: item.height }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900">
                        {item.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
                  Peak day: <strong className="text-slate-800">Thursday (75 mins)</strong>
                </span>
                <span>Average: <strong className="text-slate-800">48 mins / day</strong></span>
              </div>
            </div>

            {/* Right: Active Course Detail & Resume Action */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/70 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
                    Active Session
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>In Progress</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {data.activeCourse}
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  {data.activeModule}
                </p>

                {/* Progress bar */}
                <div className="space-y-1.5 mb-6">
                  <div className="flex justify-between text-xs font-medium text-slate-600">
                    <span>Path completion</span>
                    <span className="font-bold text-slate-900">78%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-600 rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>

                {/* Up Next Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                  <span className="text-[10px] uppercase font-bold text-slate-600 tracking-wider">
                    Next Lesson
                  </span>
                  <div className="text-xs font-semibold text-slate-800 mt-1">
                    {data.activeLesson}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    Estimated 25 mins • Interactive sandbox included
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onStartLearning}
                className="w-full group flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-brand-600 text-white text-xs sm:text-sm font-semibold transition-all duration-150 shadow-sm hover:shadow"
              >
                <span>Resume Lesson 28</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
