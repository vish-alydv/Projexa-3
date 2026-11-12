import React from 'react';
import { GraduationCap, UserCircle2, ChevronDown } from 'lucide-react';
import { useAuth, AVAILABLE_GRADES } from '../../context/AuthContext';

export default function TopBar() {
  const { currentUser, setGrade, setIsAuthModalOpen } = useAuth();

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/70 px-4 sm:px-8 py-3 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
      {/* Left: Grade Selector & Title */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-indigo-600 hidden sm:block" />
          <span className="text-xs sm:text-sm font-extrabold text-slate-900">
            {currentUser?.name ? `Hi, ${currentUser.name}!` : "Dashboard"}
          </span>
        </div>

        {/* Global Class Dropdown */}
        <div className="relative flex items-center">
          <select
            value={currentUser?.grade || "Class 5th"}
            onChange={(e) => setGrade(e.target.value)}
            className="appearance-none bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200 text-indigo-700 text-xs font-bold py-1.5 pl-3 pr-8 rounded-full cursor-pointer transition-colors outline-none shadow-2xs"
            title="Switch Grade / Class"
          >
            {AVAILABLE_GRADES.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-indigo-600 absolute right-2.5 pointer-events-none" />
        </div>
      </div>

      {/* Right: Account Button */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => setIsAuthModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-indigo-200 bg-white hover:bg-indigo-50/50 text-xs font-bold text-slate-700 hover:text-indigo-700 transition-all shadow-2xs"
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
