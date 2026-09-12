import React from 'react';
import { X, CheckCircle2, Clock, BookOpen, Layers, Star, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PathDetailModal({ path, onClose, onEnroll }) {
  if (!path) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Info */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
            {path.category}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            {path.difficulty}
          </span>
          <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 ml-auto mr-8">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{path.rating} ({path.enrolledCount} learners)</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          {path.title}
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {path.description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 mb-6 text-center">
          <div>
            <div className="text-xs text-slate-600">Lessons</div>
            <div className="text-base font-bold text-slate-900 mt-0.5">{path.lessonsCount}</div>
          </div>
          <div>
            <div className="text-xs text-slate-600">Hands-on Projects</div>
            <div className="text-base font-bold text-slate-900 mt-0.5">{path.projectsCount}</div>
          </div>
          <div>
            <div className="text-xs text-slate-600">Estimated Duration</div>
            <div className="text-base font-bold text-slate-900 mt-0.5">{path.estimatedHours}</div>
          </div>
        </div>

        {/* Structured Syllabus Breakdown */}
        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
            Structured Syllabus Modules
          </h4>
          <div className="space-y-2.5">
            {path.syllabus?.map((module, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-white border border-slate-200/70 flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-brand-50 text-brand-600 font-bold text-xs flex items-center justify-center">
                    0{index + 1}
                  </span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-semibold text-slate-900">{module.title}</h5>
                    <span className="text-[11px] text-slate-600">{module.lessons} modular lessons</span>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                  {module.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Includes certificate of completion</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onEnroll(path);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-md shadow-brand-600/20 transition-all active:scale-[0.98]"
          >
            <span>Start Learning This Path</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
