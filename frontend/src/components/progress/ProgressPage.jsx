import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  Calculator, 
  FlaskConical, 
  BookOpenCheck, 
  Globe, 
  Database
} from 'lucide-react';
import { CLASS_5_SUBJECTS } from '../../data/class5Data';
import StudentProfileCard from './StudentProfileCard';

export default function ProgressPage({ onNavigateCourses }) {
  const [recentAttempts, setRecentAttempts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/quiz/attempts?limit=8')
      .then(res => res.json())
      .then(d => {
        if (Array.isArray(d)) setRecentAttempts(d);
      })
      .catch(() => {});
  }, []);

  const iconMap = {
    Calculator: Calculator,
    Microscope: FlaskConical,
    BookOpenCheck: BookOpenCheck,
    Globe2: Globe,
  };

  return (
    <div className="p-6 sm:p-8 max-w-6xl mx-auto flex flex-col gap-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Progress & Learning Analytics
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
          Track subject completion, syllabus progress, and review your live quiz attempts.
        </p>
      </div>

      {/* Student Profile Card */}
      <StudentProfileCard />

      {/* Recent Quiz Attempts From SQLite Database */}
      {recentAttempts.length > 0 && (
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-indigo-600" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Recent Quizzes Saved in Database
              </h2>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              SQLite Synced
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 uppercase font-semibold">
                  <th className="pb-3 font-semibold">Chapter</th>
                  <th className="pb-3 font-semibold">Subject</th>
                  <th className="pb-3 font-semibold">Grade</th>
                  <th className="pb-3 font-semibold text-center">Score</th>
                  <th className="pb-3 font-semibold text-right">Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {recentAttempts.map((att) => (
                  <tr key={att.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 font-bold text-slate-800">{att.chapter}</td>
                    <td className="py-3 text-slate-600">{att.subject}</td>
                    <td className="py-3 text-indigo-600 font-semibold">{att.grade}</td>
                    <td className="py-3 text-center font-bold text-slate-900">{att.score} / {att.total}</td>
                    <td className="py-3 text-right">
                      <span className={`px-2 py-0.5 rounded-full font-bold ${
                        att.accuracy >= 80 ? 'bg-emerald-50 text-emerald-700' : 'bg-indigo-50 text-indigo-700'
                      }`}>
                        {att.accuracy}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Class 5th Subject Deep-Dives / Subject Mastery Breakdown */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Subject Mastery Breakdown
          </h2>
          <button
            onClick={onNavigateCourses}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
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
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
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
    </div>
  );
}
