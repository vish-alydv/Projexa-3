import React from 'react';
import { Compass, BookOpen, Award, ArrowRight } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import { HOW_IT_WORKS } from '../../data/coursesData';

export default function HowItWorksSection({ onStartLearning }) {
  const stepIcons = {
    "01": Compass,
    "02": BookOpen,
    "03": Award,
  };

  return (
    <section id="how-it-works" className="py-24 relative bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/70 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4 shadow-sm">
            <span>Simple Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Learn Easy Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A frictionless, scientifically backed 3-step learning loop designed for maximum comprehension and long-term recall.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS.map((item, idx) => {
            const Icon = stepIcons[item.step] || Compass;

            return (
              <GlassCard
                key={item.step}
                hoverEffect
                padding="p-8"
                className="flex flex-col justify-between relative border-slate-200/80 group"
              >
                <div>
                  {/* Top: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl sm:text-4xl font-black text-slate-200 group-hover:text-brand-500/30 transition-colors tracking-tighter font-mono">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-50/70 border border-brand-100 flex items-center justify-center text-brand-600 shadow-sm group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-4">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-600 group-hover:text-brand-600 transition-colors">
                  <span>Step {item.step} in your journey</span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
