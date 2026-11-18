import React from 'react';
import { GraduationCap, UserCircle2, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function TopBar() {
  const { currentUser, setIsAuthModalOpen } = useAuth();

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/70 px-4 sm:px-8 py-3 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
      {/* Left: Greeting & Locked Enrolled Class */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-indigo-600 hidden sm:block" />
          <span className="text-xs sm:text-sm font-extrabold text-slate-900">
            {currentUser?.name ? `Hi, ${currentUser.name}!` : "Dashboard"}
          </span>
        </div>

        {/* Read-Only Enrolled Class Badge (Fixed at login/signup, cannot be changed from dashboard) */}
        <div 
          className="flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-extrabold py-1.5 px-3 rounded-full shadow-2xs select-none cursor-default"
          title={`Enrolled in ${currentUser?.grade || "Class 5th"} (Class is locked to student profile)`}
        >
          <span>{currentUser?.grade || "Class 5th"}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-indigo-100/80 text-indigo-800 font-bold uppercase tracking-wider flex items-center gap-1">
            <Lock className="w-2.5 h-2.5 text-indigo-600" />
            <span>Enrolled</span>
          </span>
        </div>
      </div>

      {/* Right: Account Button */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => setIsAuthModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-indigo-200 bg-white hover:bg-indigo-50/50 text-xs font-bold text-slate-700 hover:text-indigo-700 transition-all shadow-2xs cursor-pointer"
        >
          <UserCircle2 className="w-4 h-4 text-indigo-600" />
          <span className="hidden sm:inline">
            {currentUser?.email ? "Account" : "Sign In"}
          </span>
        </button>
      </div>
    </header>
  );
}
