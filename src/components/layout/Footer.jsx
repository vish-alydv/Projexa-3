import React from 'react';
import { BookOpen, ShieldCheck, Heart, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer({ onOpenAuth, onNavigateCourses }) {
  return (
    <footer className="pt-16 pb-12 bg-white/70 border-t border-slate-200/80 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-200/60">
          {/* Column 1: Brand */}
          <div className="col-span-2">
            <a href="#hero" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-sm shadow-brand-600/20">
                <BookOpen className="w-4.5 h-4.5" strokeWidth={2.2} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Learn<span className="text-brand-600">Easy</span>
              </span>
            </a>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-6">
              Learn Easy helps you understand complex concepts through structured lessons, practical examples, and a focused learning experience.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>All platform systems operational</span>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#hero" className="hover:text-slate-900 transition-colors">Overview</a></li>
              <li><a href="#features" className="hover:text-slate-900 transition-colors">Interactive Sandboxes</a></li>
              <li><a href="#progress" className="hover:text-slate-900 transition-colors">Mastery Telemetry</a></li>
              <li><a href="#how-it-works" className="hover:text-slate-900 transition-colors">Methodology</a></li>
              <li><button onClick={() => onOpenAuth('login')} className="hover:text-slate-900 transition-colors">Sign In</button></li>
            </ul>
          </div>

          {/* Column 3: Courses & Learning Paths */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Class 5th Courses
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><button onClick={onNavigateCourses} className="hover:text-[#0D9488] transition-colors text-left">Mathematics (5th)</button></li>
              <li><button onClick={onNavigateCourses} className="hover:text-[#0D9488] transition-colors text-left">Science & EVS (5th)</button></li>
              <li><button onClick={onNavigateCourses} className="hover:text-[#0D9488] transition-colors text-left">English Language (5th)</button></li>
              <li><button onClick={onNavigateCourses} className="hover:text-[#0D9488] transition-colors text-left">Social Studies (5th)</button></li>
              <li><button onClick={onNavigateCourses} className="font-semibold text-[#0D9488] hover:underline text-left">View All Class 5 Courses →</button></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#features" className="hover:text-slate-900 transition-colors">Documentation</a></li>
              <li><a href="#features" className="hover:text-slate-900 transition-colors">Cheatsheets</a></li>
              <li><a href="#features" className="hover:text-slate-900 transition-colors">Code Sandboxes</a></li>
              <li><a href="#features" className="hover:text-slate-900 transition-colors">Community Forum</a></li>
              <li><a href="#features" className="hover:text-slate-900 transition-colors">Release Notes</a></li>
            </ul>
          </div>

          {/* Column 5: About & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              About & Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#how-it-works" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#how-it-works" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy</a></li>
              <li><a href="#terms" className="hover:text-slate-900 transition-colors">Terms</a></li>
              <li><a href="#security" className="hover:text-slate-900 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Learn Easy, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-800 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-800 transition-colors">Terms</a>
            <a href="#contact" className="hover:text-slate-800 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
