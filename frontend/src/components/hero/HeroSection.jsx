import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Star, Users, Sparkles } from 'lucide-react';

export default function HeroSection({ onStartLearning, onExploreCourses }) {
  const handleScrollToCourses = () => {
    const el = document.getElementById('paths');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background Soft Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-[#CCFBF1]/70 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-[450px] h-[450px] bg-teal-200/40 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle announcement chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-teal-200/70 shadow-sm text-xs font-semibold text-slate-700 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-[#0D9488]" />
          <span className="text-slate-900 font-medium">Class 5th Learning Platform</span>
          <span className="text-slate-300">|</span>
          <span className="text-[#0D9488]">Concept Clarity & Daily Life Practice</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] max-w-3xl">
          Learn Smarter.{' '}
          <span className="bg-gradient-to-r from-[#0D9488] via-teal-600 to-teal-800 bg-clip-text text-transparent">
            Understand Better.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          Learn Easy helps you understand complex concepts through structured lessons, practical examples, and a focused learning experience.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onStartLearning}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0D9488] hover:bg-teal-700 rounded-2xl shadow-lg shadow-teal-700/20 hover:shadow-xl hover:shadow-teal-700/30 transition-all duration-200 active:scale-[0.98]"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
          </button>

          <button
            onClick={() => {
              if (onExploreCourses) onExploreCourses();
              else handleScrollToCourses();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-900 bg-white/85 hover:bg-white rounded-2xl border border-teal-200/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
          >
            <Compass className="w-4 h-4 text-[#0D9488]" />
            <span>Explore Courses</span>
          </button>
        </div>

        {/* Social Proof & Trust Metrics */}
        <div className="mt-12 pt-8 border-t border-teal-100/80 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-600 w-full max-w-2xl">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-700">AK</div>
              <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-teal-100 flex items-center justify-center text-[10px] font-bold text-[#0D9488]">SR</div>
              <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-teal-200 flex items-center justify-center text-[10px] font-bold text-teal-800">MT</div>
              <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">JD</div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-semibold text-slate-800">45,000+</span>
              <span className="text-[11px] text-slate-500">Active Learners</span>
            </div>
          </div>

          <div className="h-5 w-px bg-slate-200/70" />

          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-slate-800">4.9/5</span>
            <span className="text-[11px] text-slate-500">(1,850+ reviews)</span>
          </div>

          <div className="h-5 w-px bg-slate-200/70 hidden sm:block" />

          <div className="hidden sm:flex items-center gap-1.5 text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero fluff curriculum</span>
          </div>
        </div>
      </div>
    </section>
  );
}
