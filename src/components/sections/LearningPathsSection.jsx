import React, { useState } from 'react';
import { 
  Globe, 
  Code2, 
  BrainCircuit, 
  Database, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  Sparkles,
  CheckCircle,
  BarChart2
} from 'lucide-react';
import GlassCard from '../common/GlassCard';
import { LEARNING_PATHS } from '../../data/coursesData';

export default function LearningPathsSection({ onSelectPath }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const iconComponents = {
    Globe: Globe,
    Code2: Code2,
    BrainCircuit: BrainCircuit,
    Database: Database,
  };

  const difficultyColors = {
    Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
    Intermediate: 'bg-brand-50 text-brand-700 border-brand-200/70',
    Advanced: 'bg-indigo-50 text-indigo-700 border-indigo-200/70',
  };

  return (
    <section id="paths" className="py-24 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/70 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Structured Curricula</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Explore Learning Paths
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Curated, career-focused learning tracks engineered to turn complex engineering concepts into crystal-clear fundamentals.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/80 border border-slate-200/70 backdrop-blur-md self-start md:self-auto shadow-sm">
            {['all', 'core', 'applied'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all duration-150 ${
                  activeFilter === filter
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {filter === 'all' ? 'All Paths' : filter === 'core' ? 'Foundations' : 'Applied Tech'}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Professional Course / Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEARNING_PATHS.map((path) => {
            const Icon = iconComponents[path.iconName] || Globe;
            const diffClass = difficultyColors[path.difficulty] || 'bg-slate-100 text-slate-700';

            return (
              <GlassCard
                key={path.id}
                hoverEffect
                padding="p-6 sm:p-7"
                className="flex flex-col justify-between h-full border-slate-200/80 group"
              >
                <div>
                  {/* Top strip: Icon & Difficulty */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50/80 border border-brand-100 flex items-center justify-center text-brand-600 shadow-sm group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${diffClass}`}>
                      {path.difficulty}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-3">
                    <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                      {path.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-brand-600 transition-colors">
                      {path.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {path.description}
                  </p>
                </div>

                <div>
                  {/* Metadata info: lessons & projects */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 mb-5">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-brand-600" />
                      <span className="font-semibold text-slate-800">{path.lessonsCount} lessons</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-600" />
                      <span>{path.projectsCount} projects</span>
                    </div>
                  </div>

                  {/* Explore Path Button */}
                  <button
                    onClick={() => onSelectPath(path)}
                    className="w-full group/btn flex items-center justify-between py-2.5 px-4 rounded-xl bg-white hover:bg-brand-600 text-slate-800 hover:text-white border border-slate-200/80 hover:border-brand-600 text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-brand-600/20"
                  >
                    <span>Explore Path</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all duration-150" />
                  </button>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
