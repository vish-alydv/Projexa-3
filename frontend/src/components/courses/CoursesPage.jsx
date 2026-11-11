import React, { useState } from 'react';
import { 
  Calculator, 
  FlaskConical, 
  BookOpen, 
  BookOpenCheck, 
  Globe, 
  Sparkles
} from 'lucide-react';
import SubjectChapterModal from '../modals/SubjectChapterModal';
import SubjectPracticeModal from '../modals/SubjectPracticeModal';

export default function CoursesPage() {
  const [selectedSubjectModal, setSelectedSubjectModal] = useState(null);
  const [practiceSubjectModal, setPracticeSubjectModal] = useState(null);

  const courses = [
    {
      id: 'maths-5',
      title: 'Mathematics',
      subtitle: '14 Chapters • 48 Lessons',
      progressPercent: 65,
      icon: Calculator,
      iconBg: 'bg-amber-100 text-amber-700',
      progressColor: 'bg-indigo-600',
    },
    {
      id: 'science-5',
      title: 'Science & Environment',
      subtitle: '12 Chapters • 42 Lessons',
      progressPercent: 60,
      icon: FlaskConical,
      iconBg: 'bg-emerald-100 text-emerald-700',
      progressColor: 'bg-emerald-500',
    },
    {
      id: 'english-5',
      title: 'English Literature',
      subtitle: '10 Chapters • 38 Lessons',
      progressPercent: 25,
      icon: BookOpen,
      iconBg: 'bg-blue-100 text-blue-700',
      progressColor: 'bg-blue-500',
    },
    {
      id: 'english-grammar-5',
      title: 'English Grammar',
      subtitle: '12 Chapters • 44 Lessons',
      progressPercent: 50,
      icon: BookOpenCheck,
      iconBg: 'bg-indigo-100 text-indigo-700',
      progressColor: 'bg-indigo-500',
    },
    {
      id: 'hindi-literature-5',
      title: 'Hindi (हिंदी साहित्य)',
      subtitle: '14 पाठ • 40 पाठ्य सामग्री',
      progressPercent: 35,
      icon: BookOpen,
      iconBg: 'bg-orange-100 text-orange-700',
      progressColor: 'bg-orange-500',
    },
    {
      id: 'hindi-grammar-5',
      title: 'Hindi Grammar (व्याकरण)',
      subtitle: '12 अध्याय • 36 पाठ्य सामग्री',
      progressPercent: 40,
      icon: BookOpenCheck,
      iconBg: 'bg-rose-100 text-rose-700',
      progressColor: 'bg-rose-500',
    },
    {
      id: 'general-knowledge-5',
      title: 'General Knowledge (GK)',
      subtitle: '15 Chapters • 50 Quizzes',
      progressPercent: 55,
      icon: Sparkles,
      iconBg: 'bg-teal-100 text-teal-800',
      progressColor: 'bg-teal-600',
    },
    {
      id: 'sst-5',
      title: 'Social Studies & Civics',
      subtitle: '10 Chapters • 36 Lessons',
      progressPercent: 30,
      icon: Globe,
      iconBg: 'bg-purple-100 text-purple-700',
      progressColor: 'bg-purple-600',
    }
  ];

  return (
    <div className="p-6 sm:p-8 max-w-6xl mx-auto flex flex-col gap-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Class 5 Courses
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
          Select a subject to explore units, lessons, and practice drills.
        </p>
      </div>

      {/* Course Cards Grid */}
      <div className="flex flex-col gap-3 mt-1">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">
            Available Subjects ({courses.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div 
                key={course.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between gap-4 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl ${course.iconBg} shrink-0 mt-0.5`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">
                        {course.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1.5">
                    <span>Progress</span>
                    <span className="text-indigo-600 font-bold">{course.progressPercent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
                    <div 
                      className={`h-full rounded-full ${course.progressColor}`}
                      style={{ width: `${course.progressPercent}%` }}
                    />
                  </div>

                  <button
                    onClick={() => setSelectedSubjectModal(course.id)}
                    className="w-full py-2.5 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold transition-colors"
                  >
                    View Lessons
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modals */}
      <SubjectChapterModal
        subjectId={selectedSubjectModal}
        onClose={() => setSelectedSubjectModal(null)}
        onStartPractice={(subject) => {
          setSelectedSubjectModal(null);
          setPracticeSubjectModal(subject);
        }}
      />

      <SubjectPracticeModal
        subject={practiceSubjectModal}
        onClose={() => setPracticeSubjectModal(null)}
      />
    </div>
  );
}
