import React from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import GlassCard from '../common/GlassCard';

export default function FinalCtaSection({ onStartLearning }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08),0_2px_8px_rgba(0,0,0,0.02)] p-8 sm:p-14 text-center relative overflow-hidden">
          {/* Subtle ambient light orbs inside card */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/70 text-xs font-semibold text-brand-700 uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join 45,000+ Focused Learners</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-2xl mx-auto">
            Ready to make learning easier?
          </h2>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Start building your knowledge with a clearer and more structured way to learn.
          </p>

          {/* Button */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartLearning}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-2xl shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/35 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full curriculum access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Self-paced lifetime sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
