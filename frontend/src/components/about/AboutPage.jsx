import React from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  BookOpen, 
  Target, 
  ShieldCheck, 
  Heart, 
  Users, 
  Award, 
  Compass, 
  Zap,
  GraduationCap,
  CheckCircle2,
  Smile
} from 'lucide-react';
import GlassCard from '../common/GlassCard';

export default function AboutPage({ onBackToHome, onOpenAuth }) {
  const pillars = [
    {
      icon: Target,
      title: "Cognitive Clarity First",
      description: "We replace sprawling, overwhelming text with bite-sized, visual concepts that 5th graders can easily absorb and retain without cognitive fatigue."
    },
    {
      icon: Zap,
      title: "Active Practice over Passive Video",
      description: "Students learn best by doing. Every lesson is coupled with interactive drills, real-time feedback, and self-correcting problem sets."
    },
    {
      icon: Compass,
      title: "Self-Paced Confidence",
      description: "No punitive timers or rigid cohort deadlines. Students learn at their natural velocity and build genuine confidence in difficult subjects."
    },
    {
      icon: ShieldCheck,
      title: "Safe & Distraction-Free",
      description: "Zero external ads, zero social distractions, and COPPA/GDPR compliant privacy protections built for young learners and peace of mind for parents."
    }
  ];

  const milestones = [
    { value: "45,000+", label: "Active Grade 5 Students" },
    { value: "98.4%", label: "Concept Retention Rate" },
    { value: "1.2M+", label: "Practice Drills Solved" },
    { value: "4.9 / 5", label: "Parent & Teacher Rating" }
  ];

  const team = [
    {
      name: "Dr. Ananya Sharma",
      role: "Head of Primary Curriculum",
      bio: "Former Cambridge & CBSE primary educator with 14+ years designing cognitive frameworks for junior learners.",
      badge: "Pedagogy Lead"
    },
    {
      name: "Marcus Vance",
      role: "Lead Educational Designer",
      bio: "Interactive learning architect focused on turning abstract math and science concepts into intuitive visual sandboxes.",
      badge: "Learning UX"
    },
    {
      name: "Priya Sundaram",
      role: "Child Cognitive Specialist",
      bio: "Child psychologist ensuring lesson pacing reduces academic anxiety and fosters natural curiosity in young minds.",
      badge: "Child Development"
    }
  ];

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-radial-teal min-h-screen">
      {/* Background Ambient Soft Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#CCFBF1]/80 rounded-full blur-[120px]" />
        <div className="absolute top-28 right-1/4 w-[420px] h-[420px] bg-teal-200/40 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 hover:bg-white border border-teal-200/70 text-xs sm:text-sm font-semibold text-[#0D9488] shadow-sm hover:shadow transition-all duration-150"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#CCFBF1] border border-teal-200 text-xs font-bold text-[#0D9488]">
            <Heart className="w-3.5 h-3.5 fill-[#0D9488]" />
            <span>Our Mission & Story</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] border border-teal-200/90 text-xs font-bold text-[#0D9488] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Education Without Confusion</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Empowering Young Minds With{' '}
            <span className="text-[#0D9488] relative">
              Unshakable Clarity
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#0D9488]/30 rounded-full" />
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Learn Easy was born from a simple belief: complex ideas aren't too hard for children; they are just usually explained poorly. We craft clean, modular education that respects young learners' curiosity.
          </p>
        </div>

        {/* Milestones / Impact Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {milestones.map((m, i) => (
            <GlassCard key={i} padding="p-6" className="text-center border-teal-100/90">
              <div className="text-3xl sm:text-4xl font-black text-[#0D9488] tracking-tight">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                {m.label}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* The Learn Easy Story */}
        <div className="mb-20">
          <GlassCard padding="p-8 sm:p-12" className="border-teal-100/90 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-[#CCFBF1] px-3 py-1 rounded-full border border-teal-200 inline-block mb-3">
                  Why We Built Learn Easy
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
                  Moving from Rote Memorization to Genuine Conceptual Mastery
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Too often, 5th-grade students face an overwhelming jump in textbook complexity. Math introduces multi-step fraction operations and decimals; Science requires understanding organ systems and simple machines; Social Studies transitions from local maps to global coordinate systems.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Instead of endless video lectures that cause passive drifting, Learn Easy breaks each topic into interactive, 10-minute visual milestones. Students read concise explanations, test their understanding with instant drills, and build unshakeable confidence.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    <span>CBSE / ICSE / Cambridge Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    <span>Interactive question sandboxes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    <span>Instant step-by-step explanations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    <span>Zero ads or third-party tracking</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-br from-[#CCFBF1]/60 to-teal-100/30 border border-teal-200/80 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white border border-teal-200 flex items-center justify-center text-[#0D9488] mx-auto mb-4 shadow-sm">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Our Promise to Learners</h3>
                <p className="text-xs text-slate-600 leading-relaxed italic mb-4">
                  "Every child possesses natural genius when concepts are communicated with patience, clarity, and genuine respect for their cognitive capacity."
                </p>
                <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider">
                  — The Learn Easy Academic Council
                </span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our 4 Pedagogical Pillars
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              How we engineer every single lesson, quiz, and exercise on Learn Easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <GlassCard key={idx} padding="p-7" className="flex items-start gap-4 border-teal-100/90">
                  <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] border border-teal-200 flex items-center justify-center text-[#0D9488] shadow-sm flex-shrink-0">
                    <Icon className="w-6 h-6" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Academic & Curriculum Leads */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Built by Educators & Learning Architects
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our curriculum is created and continuously audited by experienced classroom teachers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <GlassCard key={idx} padding="p-6" className="border-teal-100/90 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0D9488] font-bold text-sm">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#CCFBF1] text-[#0D9488] border border-teal-200">
                      {member.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                  <div className="text-xs font-semibold text-[#0D9488] mb-3">{member.role}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Return or Start Learning */}
        <div className="rounded-3xl bg-[#CCFBF1]/50 border border-teal-200/80 p-8 sm:p-10 text-center backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Ready to experience clearer learning?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6">
            Explore our Grade 5 curriculum or start with a free interactive practice drill today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onBackToHome()}
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-teal-200 text-[#0D9488] text-xs sm:text-sm font-bold shadow-xs transition-all"
            >
              Return to Home
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-7 py-3 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-teal-700/20 transition-all active:scale-[0.98]"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
