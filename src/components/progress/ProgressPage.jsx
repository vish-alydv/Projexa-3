import React from 'react';
import { 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Flame, 
  Award, 
  Sparkles, 
  ChevronRight, 
  Calculator, 
  FlaskConical, 
  BookOpenCheck, 
  Globe, 
  PlayCircle,
  Target
} from 'lucide-react';
import { CLASS_5_SUBJECTS } from '../../data/class5Data';
import { USER_PROGRESS_MOCK } from '../../data/coursesData';
import StudentProfileCard from './StudentProfileCard';

export default function ProgressPage({ onNavigateCourses }) {
  const data = USER_PROGRESS_MOCK;

  const iconMap = {
    Calculator: Calculator,
    Microscope: FlaskConical,
    BookOpenCheck: BookOpenCheck,
    Globe2: Globe,
  };

  const achievements = [
    { title: "4-Day Focus Streak", desc: "Practiced 4 consecutive days without missing a single lesson.", icon: Flame, color: "text-amber-500 bg-amber-50 border-amber-200" },
    { title: "Fraction Virtuoso", desc: "Scored 100% on Chapter 4 Visual Fractions Drill.", icon: Award, color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
    { title: "Science Investigator", desc: "Completed 5 virtual seed germination labs.", icon: Sparkles, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { title: "Grammar Champion", desc: "Mastered all 8 parts of speech in English Language.", icon: Target, color: "text-blue-600 bg-blue-50 border-blue-200" },
  ];

  return (
    <div className="p-6 sm:p-8 max-w-6xl mx-auto flex flex-col gap-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Progress & Learning Analytics
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
          Track concept comprehension, active focus minutes, completed practice drills, and weekly milestones.
        </p>
      </div>

      {/* Student Profile Card */}
      <StudentProfileCard />

      {/* 4 Core Top Stat Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Weekly Progress</span>
            <span className="p-1 rounded-lg bg-indigo-50 text-indigo-600">
              <TrendingUp className="w-4 h-4" />
            </span>
          </div>
          <div className="text-3xl font-black text-slate-900 tracking-tight">
            82%
          </div>
          <div className="mt-2 text-xs font-semibold text-indigo-600">
            +14% ahead of schedule
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Lessons Completed</span>
            <span className="p-1 rounded-lg bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
            </span>
          </div>
          <div className="text-3xl font-black text-slate-900 tracking-tight">
            12
          </div>
          <div className="mt-2 text-xs text-slate-500 font-medium">
            Target: 15 / week
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Learning Time</span>
            <span className="p-1 rounded-lg bg-indigo-50 text-indigo-600">
              <Clock className="w-4 h-4" />
            </span>
          </div>
          <div className="text-3xl font-black text-slate-900 tracking-tight">
            4 hours
          </div>
          <div className="mt-2 text-xs text-slate-500 font-medium">
            Active drill & study time
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Courses in Progress</span>
            <span className="p-1 rounded-lg bg-indigo-50 text-indigo-600">
              <BookOpen className="w-4 h-4" />
            </span>
          </div>
          <div className="text-3xl font-black text-slate-900 tracking-tight">
            8
          </div>
          <div className="mt-2 text-xs text-slate-500 font-medium">
            Math, Science, GK & English
          </div>
        </div>
      </div>

      {/* Weekly Learning Intensity Bar Graph & Active Study Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Weekly Graph */}
        <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Weekly Study Intensity</h3>
                <p className="text-xs text-slate-500 font-medium">Minutes spent in lessons & practice drills</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-indigo-700">
                Week 37 • 2026
              </span>
            </div>

            {/* Bar Graph */}
            <div className="h-44 flex items-end justify-between gap-3 pt-6 px-2">
              {data.weeklyActivity.map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                  <span className="text-[10px] font-semibold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.minutes}m
                  </span>
                  <div className="w-full max-w-[36px] bg-slate-100 rounded-xl overflow-hidden h-32 flex items-end p-0.5">
                    <div
                      className={`w-full rounded-lg transition-all duration-500 ${
                        item.minutes > 50
                          ? 'bg-indigo-600 shadow-sm'
                          : item.minutes > 0
                          ? 'bg-indigo-400'
                          : 'bg-transparent'
                      }`}
                      style={{ height: item.height }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-indigo-600">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              Peak day: <strong className="text-slate-900">Thursday (75 mins)</strong>
            </span>
            <span>Average: <strong className="text-slate-900">48 mins / day</strong></span>
          </div>
        </div>

        {/* Right: Active Session Spotlight */}
        <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                Currently In Progress
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active</span>
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Class 5 Mathematics
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-5">
              Chapter 4: Visual Fractions & Decimal Notation
            </p>

            <div className="space-y-2 mb-5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">Subject Completion</span>
                <span className="text-indigo-600 font-bold">65%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 mb-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                Up Next in Practice Hub:
              </div>
              <div className="text-xs font-bold text-slate-900 mt-1">
                Speed & Accuracy Challenge (15 Questions)
              </div>
              <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                Est. 15 mins • Decimal conversion drills
              </div>
            </div>
          </div>

          <button
            onClick={onNavigateCourses}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all active:scale-[0.98]"
          >
            <PlayCircle className="w-4 h-4 text-white" />
            <span>Resume Math Practice</span>
          </button>
        </div>
      </div>

      {/* Class 5th Subject Deep-Dives */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Subject Mastery Breakdown
          </h2>
          <button
            onClick={onNavigateCourses}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
          >
            <span>View All Courses</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CLASS_5_SUBJECTS.map((subject) => {
            const Icon = iconMap[subject.iconName] || BookOpen;

            return (
              <div key={subject.id} className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 shadow-sm">
                        <Icon className="w-5 h-5" strokeWidth={2.2} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {subject.subjectCode}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 leading-tight">
                          {subject.title}
                        </h3>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-extrabold text-indigo-600">
                        {subject.progress}%
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">Completed</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
                    <div 
                      className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-3">
                    <span>{subject.chaptersCount} Chapters</span>
                    <span>{subject.lessonsCount} Lessons</span>
                    <span>{subject.worksheetsCount} Worksheets</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Recent: <strong className="text-slate-800">{subject.lastAccessed}</strong>
                  </span>
                  <button
                    onClick={onNavigateCourses}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <span>Practice</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Student Badges & Achievements */}
      <div className="mb-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Student Badges & Achievements
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Earned by mastering chapters and scoring above 80% on practice drills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-5 text-center flex flex-col items-center shadow-sm">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-3 shadow-sm ${ach.color}`}>
                  <Icon className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{ach.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {ach.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
