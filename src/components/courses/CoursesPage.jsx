import React, { useState } from 'react';
import { 
  Calculator, 
  Microscope, 
  BookOpenCheck, 
  Globe2, 
  ArrowLeft, 
  BookOpen, 
  GraduationCap, 
  PlayCircle,
  Sparkles
} from 'lucide-react';
import GlassCard from '../common/GlassCard';
import { CLASS_5_SUBJECTS } from '../../data/class5Data';
import SubjectChapterModal from '../modals/SubjectChapterModal';
import PracticeModal from '../modals/PracticeModal';

export default function CoursesPage({ onBackToHome, onOpenAuth }) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [practiceSubject, setPracticeSubject] = useState(null);

  const iconMap = {
    Calculator: Calculator,
    Microscope: Microscope,
    BookOpenCheck: BookOpenCheck,
    Globe2: Globe2,
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-radial-teal min-h-screen">
      {/* Background Soft Lighting - Teal ambience rgb(204, 251, 241) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-[#CCFBF1]/80 rounded-full blur-[110px]" />
        <div className="absolute top-28 right-1/4 w-[400px] h-[400px] bg-teal-200/50 rounded-full blur-[130px]" />
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

          {/* Grade Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#CCFBF1] border border-teal-200 text-xs font-bold text-[#0D9488]">
            <GraduationCap className="w-4 h-4" />
            <span>Class 5th Curriculum</span>
          </div>
        </div>

        {/* Page Hero Header with Teal Educational Design */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] border border-teal-200/90 text-xs font-bold text-[#0D9488] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grade 5 Foundation Courses</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Class 5th{' '}
            <span className="text-[#0D9488] relative">
              Core Subjects
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#0D9488]/30 rounded-full" />
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Built specifically for 5th Grade learners. Understand core principles through interactive chapter breakdowns, visual explanations, and self-paced worksheets.
          </p>
        </div>

        {/* 4 Subjects Grid according to Class 5th */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLASS_5_SUBJECTS.map((subject) => {
            const Icon = iconMap[subject.iconName] || BookOpen;

            return (
              <GlassCard
                key={subject.id}
                hoverEffect
                padding="p-7 sm:p-8"
                className="flex flex-col justify-between border-teal-100/90 group relative overflow-hidden"
              >
                {/* Soft ambient corner glow inside card */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#CCFBF1]/50 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Top Strip: Icon, Grade & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-[#CCFBF1] border border-teal-200 flex items-center justify-center text-[#0D9488] shadow-sm group-hover:scale-105 transition-transform duration-200">
                        <Icon className="w-7 h-7" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
                            {subject.grade}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs font-medium text-slate-500">
                            {subject.subjectCode}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#0D9488] transition-colors">
                          {subject.title}
                        </h2>
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-bold bg-[#CCFBF1] text-[#0D9488] border border-teal-200">
                      {subject.badge}
                    </span>
                  </div>

                  {/* Tagline */}
                  <div className="text-xs font-semibold text-teal-700 mb-2">
                    {subject.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {subject.description}
                  </p>

                  {/* Progress Bar in Teal */}
                  <div className="p-3.5 rounded-2xl bg-[#CCFBF1]/30 border border-teal-100 mb-6">
                    <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                      <span className="text-slate-700">Course Completion</span>
                      <span className="text-[#0D9488] font-bold">{subject.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-teal-200/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#0D9488] rounded-full transition-all duration-700"
                        style={{ width: `${subject.progress}%` }}
                      />
                    </div>
                    <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between">
                      <span>Last: {subject.lastAccessed}</span>
                      <span className="text-[#0D9488] font-medium">Synced</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Stats & TWO Separate Buttons */}
                <div className="pt-5 border-t border-slate-100">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-600 mb-5">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="font-bold text-slate-900 text-sm">{subject.chaptersCount}</div>
                      <div className="text-[10px] text-slate-500">Chapters</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="font-bold text-slate-900 text-sm">{subject.lessonsCount}</div>
                      <div className="text-[10px] text-slate-500">Lessons</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="font-bold text-slate-900 text-sm">{subject.worksheetsCount}</div>
                      <div className="text-[10px] text-slate-500">Worksheets</div>
                    </div>
                  </div>

                  {/* Two Separate Buttons: Start Practice & View Syllabus */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    {/* Button 1: Start Practice */}
                    <button
                      onClick={() => setPracticeSubject(subject)}
                      className="w-full sm:flex-1 group/btn flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-teal-700/20 hover:shadow-lg transition-all duration-150 active:scale-[0.98]"
                    >
                      <PlayCircle className="w-4 h-4 text-white" />
                      <span>Start Practice</span>
                    </button>

                    {/* Button 2: View Syllabus */}
                    <button
                      onClick={() => setSelectedSubject(subject)}
                      className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-[#0D9488] border border-teal-200/90 hover:border-[#0D9488] text-xs sm:text-sm font-semibold shadow-xs hover:shadow transition-all duration-150 active:scale-[0.98]"
                    >
                      <BookOpen className="w-4 h-4 text-[#0D9488]" />
                      <span>View Syllabus</span>
                    </button>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Bottom Educational Banner */}
        <div className="mt-16 rounded-3xl bg-[#CCFBF1]/50 border border-teal-200/80 p-8 text-center backdrop-blur-xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Class 5th Academic Standards Compliance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              All 4 core subjects are aligned with modern pedagogical frameworks (CBSE, ICSE, and International Cambridge Primary), focusing on deep conceptual clarity rather than rote memorization.
            </p>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-teal-200 text-[#0D9488] text-xs sm:text-sm font-bold shadow-sm transition-all"
            >
              <span>Return to Main Platform</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Chapter & Syllabus Inspector Modal */}
      <SubjectChapterModal
        subject={selectedSubject}
        onClose={() => setSelectedSubject(null)}
        onStartLesson={(chap) => {
          setSelectedSubject(null);
          setPracticeSubject(selectedSubject);
        }}
      />

      {/* Interactive Practice Questions Modal */}
      <PracticeModal
        subject={practiceSubject}
        onClose={() => setPracticeSubject(null)}
      />
    </div>
  );
}
