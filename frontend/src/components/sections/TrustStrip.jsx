import React from 'react';
import { Layers, Zap, LineChart, Clock3 } from 'lucide-react';
import GlassCard from '../common/GlassCard';

export default function TrustStrip() {
  const benefits = [
    {
      title: 'Structured Learning',
      description: 'Step-by-step roadmaps without confusing gaps or random tangents.',
      icon: Layers,
      accent: 'text-brand-600 bg-brand-50 border-brand-100',
    },
    {
      title: 'Practical Concepts',
      description: 'Real production scenarios and code patterns that matter on the job.',
      icon: Zap,
      accent: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Progress Tracking',
      description: 'Granular skill telemetry to verify your mental mastery every day.',
      icon: LineChart,
      accent: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      title: 'Learn at Your Pace',
      description: 'Bite-sized modules built to smoothly fit around your daily schedule.',
      icon: Clock3,
      accent: 'text-slate-700 bg-slate-100 border-slate-200',
    },
  ];

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <GlassCard
                key={index}
                hoverEffect
                padding="p-6"
                className="flex flex-col items-start text-left border-slate-200/60"
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border mb-4 ${benefit.accent} shadow-sm`}>
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
