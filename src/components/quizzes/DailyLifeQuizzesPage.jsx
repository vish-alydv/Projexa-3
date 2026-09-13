import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  ShoppingCart, 
  Utensils, 
  Navigation, 
  MessageSquare, 
  PlayCircle, 
  Clock, 
  Target, 
  Lightbulb, 
  CheckCircle2, 
  Compass,
  Smile,
  Award
} from 'lucide-react';
import GlassCard from '../common/GlassCard';
import { DAILY_LIFE_QUIZZES } from '../../data/dailyLifeQuizzesData';
import DailyLifeQuizModal from './DailyLifeQuizModal';

export default function DailyLifeQuizzesPage({ onBackToHome, onOpenAuth }) {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const iconMap = {
    ShoppingCart: ShoppingCart,
    Utensils: Utensils,
    Navigation: Navigation,
    MessageSquare: MessageSquare,
  };

  const filteredQuizzes = DAILY_LIFE_QUIZZES.filter((q) => {
    if (activeFilter === 'all') return true;
    return q.subjectId === activeFilter;
  });

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
            <Compass className="w-3.5 h-3.5" />
            <span>Real-World Learning Lab</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] border border-teal-200/90 text-xs font-bold text-[#0D9488] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beyond Classroom Textbooks</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Daily Life{' '}
            <span className="text-[#0D9488] relative">
              Interactive Quizzes
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#0D9488]/30 rounded-full" />
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            See how Class 5th subjects apply to daily life! Practice supermarket billing math, kitchen physics, road safety signs, and everyday polite communication with scenario-based MCQs.
          </p>

          {/* Subject Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Life Quizzes' },
              { id: 'maths', label: 'Supermarket & Money Math' },
              { id: 'science', label: 'Kitchen Science' },
              { id: 'sst', label: 'Road Safety & Maps' },
              { id: 'english', label: 'Everyday English' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#0D9488] text-white shadow-sm'
                    : 'bg-white/80 hover:bg-teal-50 text-slate-700 border border-teal-100 shadow-xs'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Daily Life Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredQuizzes.map((quiz) => {
            const Icon = iconMap[quiz.iconName] || Sparkles;

            return (
              <GlassCard
                key={quiz.id}
                hoverEffect
                padding="p-7 sm:p-8"
                className="flex flex-col justify-between border-teal-100/90 group relative overflow-hidden"
              >
                {/* Soft ambient corner glow inside card */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#CCFBF1]/50 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Top Strip */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-[#CCFBF1] border border-teal-200 flex items-center justify-center text-[#0D9488] shadow-sm group-hover:scale-105 transition-transform duration-200">
                        <Icon className="w-7 h-7" strokeWidth={2.2} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
                          {quiz.subjectName}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0D9488] transition-colors">
                          {quiz.title}
                        </h2>
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-bold bg-[#CCFBF1] text-[#0D9488] border border-teal-200">
                      {quiz.badge}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-teal-700 mb-2">
                    {quiz.tagline}
                  </div>

                  {/* Real World Scenario Snippet */}
                  <div className="p-3.5 rounded-2xl bg-[#CCFBF1]/30 border border-teal-100 mb-5 text-xs text-slate-700">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0D9488] mb-1">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Everyday Context:</span>
                    </div>
                    <p className="line-clamp-2 leading-relaxed">
                      {quiz.realWorldScenario}
                    </p>
                  </div>

                  {/* Life Skill Pill */}
                  <div className="mb-6 flex items-center gap-2 text-xs text-slate-600">
                    <Award className="w-4 h-4 text-[#0D9488]" />
                    <span>Skill learned: <strong className="text-slate-800">{quiz.lifeSkill}</strong></span>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{quiz.questionsCount} Real Scenarios</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      ~{quiz.estimatedMinutes} mins
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedQuiz(quiz)}
                    className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all active:scale-[0.98]"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>Play Daily Life Quiz</span>
                  </button>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Why Daily Life Learning Matters Banner */}
        <div className="rounded-3xl bg-[#CCFBF1]/50 border border-teal-200/80 p-8 sm:p-10 text-center backdrop-blur-xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Why Connect School Subjects to Daily Life?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              When 5th grade students realize that fraction lessons help them split grocery items, and states of matter explain kitchen cooking, their learning shifts from boring memorization to everyday observation and life intelligence.
            </p>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-teal-200 text-[#0D9488] text-xs sm:text-sm font-bold shadow-xs transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home Platform</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Daily Life Quiz Player Modal */}
      <DailyLifeQuizModal
        quiz={selectedQuiz}
        onClose={() => setSelectedQuiz(null)}
      />
    </div>
  );
}
