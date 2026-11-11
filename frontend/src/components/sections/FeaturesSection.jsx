import React from 'react';
import { 
  Layers, 
  Terminal, 
  Activity, 
  Clock3, 
  CheckCircle2, 
  ArrowUpRight,
  Code,
  Gauge,
  Smartphone
} from 'lucide-react';
import GlassCard from '../common/GlassCard';
import { FEATURES } from '../../data/coursesData';

export default function FeaturesSection() {
  const iconMap = {
    Layers: Layers,
    Terminal: Terminal,
    Activity: Activity,
    Clock3: Clock3,
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/70 text-xs font-semibold text-brand-700 uppercase tracking-wider mb-4">
            <span>Built For Deep Comprehension</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything You Need to Learn With Clarity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate cognitive overload. We replaced rambling videos with structured conceptual models, instant verification, and measurable progress.
          </p>
        </div>

        {/* 4 Elegant Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Structured Learning */}
          <GlassCard hoverEffect padding="p-8" className="flex flex-col justify-between border-slate-200/70">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200/60 flex items-center justify-center text-brand-600 shadow-sm">
                  <Layers className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100/80 text-slate-700 border border-slate-200/60">
                  Curated Roadmaps
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Structured Learning
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Curated step-by-step curricula organized into cumulative milestones that guide you from fundamental building blocks to production mastery with zero confusion.
              </p>
            </div>

            {/* Visual Micro-Card: Roadmap timeline */}
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                <span className="font-semibold text-slate-700">Course Roadmap</span>
                <span>Stage 3 of 4</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/60 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                  <span className="text-[11px] font-medium text-slate-700 truncate">01 Basics</span>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-50 border border-brand-200/70 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-brand-600 flex-shrink-0" />
                  <span className="text-[11px] font-semibold text-brand-800 truncate">02 Patterns</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/50 border border-slate-200/40 flex items-center gap-1.5 opacity-60">
                  <div className="w-2 h-2 rounded-full bg-slate-300 flex-shrink-0" />
                  <span className="text-[11px] font-medium text-slate-600 truncate">03 Scale</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Card 2: Interactive Lessons */}
          <GlassCard hoverEffect padding="p-8" className="flex flex-col justify-between border-slate-200/70">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center text-indigo-600 shadow-sm">
                  <Terminal className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100/80 text-slate-700 border border-slate-200/60">
                  In-Browser Sandboxes
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Interactive Lessons
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Read, experiment, and execute code directly in your browser. Live sandboxes provide immediate feedback so you learn through active creation rather than passive watching.
              </p>
            </div>

            {/* Visual Micro-Card: In-browser editor preview */}
            <div className="p-3.5 rounded-2xl bg-slate-900 text-slate-200 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-slate-600">sandbox.ts</span>
                </div>
                <span className="text-emerald-400 font-sans font-medium">Output: 100% Passed</span>
              </div>
              <p className="text-slate-300">
                <span className="text-indigo-400">const</span> solution = <span className="text-brand-400">optimizeQuery</span>(data);
              </p>
              <p className="text-slate-600 text-[11px] mt-1">// Test suites verified in 12ms</p>
            </div>
          </GlassCard>

          {/* Card 3: Progress Tracking */}
          <GlassCard hoverEffect padding="p-8" className="flex flex-col justify-between border-slate-200/70">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 shadow-sm">
                  <Activity className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100/80 text-slate-700 border border-slate-200/60">
                  Granular Analytics
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Progress Tracking
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Get real-time diagnostic telemetry on your concept retention, problem-solving speed, and weekly milestones without guesswork or ambiguity.
              </p>
            </div>

            {/* Visual Micro-Card: Retention metric */}
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-700">Concept Mastery Index</span>
                <span className="text-xs font-bold text-brand-600">92% High Retention</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-brand-600 rounded-full" style={{ width: '92%' }} />
              </div>
              <div className="flex justify-between items-center mt-3 text-[11px] text-slate-600">
                <span>Algorithmic Thinking: <b className="text-slate-800">Advanced</b></span>
                <span>Speed: <b className="text-slate-800">+24% vs avg</b></span>
              </div>
            </div>
          </GlassCard>

          {/* Card 4: Learn at Your Pace */}
          <GlassCard hoverEffect padding="p-8" className="flex flex-col justify-between border-slate-200/70">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-200/60 flex items-center justify-center text-violet-600 shadow-sm">
                  <Clock3 className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100/80 text-slate-700 border border-slate-200/60">
                  Flexible Schedule
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Learn at Your Pace
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                No strict cohorts or punitive deadlines. Master topics through bite-sized 10-15 minute blocks that easily blend into your working life and personal routine.
              </p>
            </div>

            {/* Visual Micro-Card: Device & pace synchronization */}
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/70 flex items-center justify-center text-slate-700">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-800">Seamless Cloud Sync</div>
                  <div className="text-[11px] text-slate-600">Resume on laptop or mobile instantly</div>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200/60">
                Synced
              </span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
