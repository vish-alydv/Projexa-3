import React from 'react';
import { 
  ArrowLeft, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Flame, 
  Award, 
  Calendar, 
  Sparkles, 
  ChevronRight, 
  Calculator, 
  Microscope, 
  BookOpenCheck, 
  Globe2, 
  PlayCircle,
  BarChart3,
  Target
} from 'lucide-react';
import GlassCard from '../common/GlassCard';
import { CLASS_5_SUBJECTS } from '../../data/class5Data';
import { USER_PROGRESS_MOCK } from '../../data/coursesData';
import StudentProfileCard from './StudentProfileCard';

export default function ProgressPage({ onBackToHome, onNavigateCourses, onOpenAuth }) {
  const data = USER_PROGRESS_MOCK;

  const iconMap = {
    Calculator: Calculator,
    Microscope: Microscope,
    BookOpenCheck: BookOpenCheck,
    Globe2: Globe2,
  };

  const achievements = [
    { title: "4-Day Focus Streak", desc: "Practiced 4 consecutive days without missing a single lesson.", icon: Flame, color: "text-amber-500 bg-amber-50 border-amber-200" },
    { title: "Fraction Virtuoso", desc: "Scored 100% on Chapter 4 Visual Fractions Drill.", icon: Award, color: "text-teal-600 bg-teal-50 border-teal-200" },
    { title: "Science Investigator", desc: "Completed 5 virtual seed germination labs.", icon: Sparkles, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { title: "Grammar Champion", desc: "Mastered all 8 parts of speech in English Language.", icon: Target, color: "text-blue-600 bg-blue-50 border-blue-200" },
  ];

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-radial-teal min-h-screen">
      {/* Background Soft Lighting - Teal ambience rgb(204, 251, 241) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#CCFBF1]/80 rounded-full blur-[120px]" />
        <div className="absolute top-28 right-1/4 w-[420px] h-[420px] bg-teal-200/40 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 hover:bg-white border border-teal-200/70 text-xs sm:text-sm font-semibold text-[#0D9488] shadow-sm hover:shadow transition-all duration-150"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#CCFBF1] border border-teal-200 text-xs font-bold text-[#0D9488]">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Live Student Telemetry</span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] border border-teal-200/90 text-xs font-bold text-[#0D9488] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grade 5 Learning Analytics</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Learning Progress &{' '}
            <span className="text-[#0D9488] relative">
              Mastery Console
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#0D9488]/30 rounded-full" />
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Track concept comprehension, active focus minutes, completed practice drills, and weekly milestones across all 4 Grade 5 subjects.
          </p>
        </div>

        {/* Student Identity & Contact Profile Card */}
        <StudentProfileCard />

        {/* 4 Core Top Stat Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* Metric 1 */}
          <GlassCard padding="p-6" className="border-teal-100/90">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
              <span>Weekly Progress</span>
              <span className="p-1 rounded-lg bg-teal-50 text-[#0D9488]">
                <TrendingUp className="w-4 h-4" />
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              82%
            </div>
            <div className="mt-2 text-xs font-semibold text-[#0D9488]">
              +14% ahead of schedule
            </div>
          </GlassCard>

          {/* Metric 2 */}
          <GlassCard padding="p-6" className="border-teal-100/90">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
              <span>Lessons Completed</span>
              <span className="p-1 rounded-lg bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              12
            </div>
            <div className="mt-2 text-xs text-slate-500">
              Target: 15 / week
            </div>
          </GlassCard>

          {/* Metric 3 */}
          <GlassCard padding="p-6" className="border-teal-100/90">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
              <span>Learning Time</span>
              <span className="p-1 rounded-lg bg-teal-50 text-[#0D9488]">
                <Clock className="w-4 h-4" />
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              4 hours
            </div>
            <div className="mt-2 text-xs text-slate-500">
              Active drill & study time
            </div>
          </GlassCard>

          {/* Metric 4 */}
          <GlassCard padding="p-6" className="border-teal-100/90">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
              <span>Courses in Progress</span>
              <span className="p-1 rounded-lg bg-teal-50 text-[#0D9488]">
                <BookOpen className="w-4 h-4" />
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              3
            </div>
            <div className="mt-2 text-xs text-slate-500">
              Maths, Science & English
            </div>
          </GlassCard>
        </div>

        {/* Weekly Learning Intensity Bar Graph & Active Study Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Interactive Weekly Graph */}
          <GlassCard padding="p-7 sm:p-8" className="lg:col-span-7 border-teal-100/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Weekly Study Intensity</h3>
                  <p className="text-xs text-slate-500">Minutes spent in lessons & fullscreen practice drills</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-teal-100 text-[#0D9488]">
                  Week 37 • 2026
                </span>
              </div>

              {/* Bar Graph */}
              <div className="h-48 flex items-end justify-between gap-3 pt-6 px-2">
                {data.weeklyActivity.map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                    <span className="text-[10px] font-semibold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.minutes}m
                    </span>
                    <div className="w-full max-w-[40px] bg-slate-100 rounded-xl overflow-hidden h-36 flex items-end p-0.5">
                      <div
                        className={`w-full rounded-lg transition-all duration-500 ${
                          item.minutes > 50
                            ? 'bg-[#0D9488] shadow-sm shadow-teal-700/20'
                            : item.minutes > 0
                            ? 'bg-teal-400'
                            : 'bg-transparent'
                        }`}
                        style={{ height: item.height }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 group-hover:text-[#0D9488]">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488]" />
                Peak day: <strong className="text-slate-900">Thursday (75 mins)</strong>
              </span>
              <span>Average: <strong className="text-slate-900">48 mins / day</strong></span>
            </div>
          </GlassCard>

          {/* Right: Active Session Spotlight */}
          <GlassCard padding="p-7 sm:p-8" className="lg:col-span-5 border-teal-100/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
                  Currently In Progress
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Active</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Class 5 Mathematics
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Chapter 4: Visual Fractions & Decimal Notation
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">Subject Completion</span>
                  <span className="text-[#0D9488]">65%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0D9488] rounded-full" style={{ width: '65%' }} />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#CCFBF1]/40 border border-teal-200/70 mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
                  Up Next in Practice Hub:
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">
                  Speed & Accuracy Challenge (15 Questions)
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Est. 15 mins • Decimal conversion drills
                </div>
              </div>
            </div>

            <button
              onClick={onNavigateCourses}
              className="w-full group flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-teal-700/20 transition-all active:scale-[0.98]"
            >
              <PlayCircle className="w-4 h-4 text-white" />
              <span>Resume Math Practice</span>
            </button>
          </GlassCard>
        </div>

        {/* 4 Class 5th Subject Deep-Dives */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Subject Mastery Breakdown
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Detailed progress across all 4 Grade 5 subjects.
              </p>
            </div>
            <button
              onClick={onNavigateCourses}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#0D9488] hover:underline"
            >
              <span>View All Courses</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLASS_5_SUBJECTS.map((subject) => {
              const Icon = iconMap[subject.iconName] || BookOpen;

              return (
                <GlassCard key={subject.id} padding="p-6 sm:p-7" className="border-teal-100/90 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] border border-teal-200 flex items-center justify-center text-[#0D9488] shadow-sm">
                          <Icon className="w-6 h-6" strokeWidth={2.2} />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            {subject.subjectCode}
                          </span>
                          <h3 className="text-lg font-bold text-slate-900">
                            {subject.title}
                          </h3>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xl font-black text-[#0D9488]">
                          {subject.progress}%
                        </div>
                        <div className="text-[10px] text-slate-400">Completed</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                      <div 
                        className="h-full bg-[#0D9488] rounded-full transition-all duration-500"
                        style={{ width: `${subject.progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-600 mb-4">
                      <span>{subject.chaptersCount} Total Chapters</span>
                      <span>{subject.lessonsCount} Lessons</span>
                      <span>{subject.worksheetsCount} Worksheets</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Recent: <strong className="text-slate-700">{subject.lastAccessed}</strong>
                    </span>
                    <button
                      onClick={onNavigateCourses}
                      className="text-xs font-bold text-[#0D9488] hover:text-teal-700 flex items-center gap-1"
                    >
                      <span>Practice</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Trophy & Badge Cabinet */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Student Badges & Achievements
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Earned by mastering chapters and scoring above 80% on practice drills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((ach, idx) => {
              const Icon = ach.icon;
              return (
                <GlassCard key={idx} padding="p-5 sm:p-6" className="text-center border-teal-100/90 flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-4 shadow-sm ${ach.color}`}>
                    <Icon className="w-7 h-7" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{ach.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {ach.desc}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
