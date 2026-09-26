import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  BarChart2, 
  Zap
} from 'lucide-react';

export default function Sidebar({ activePage, onNavigate, onOpenProfileModal }) {
  const navItems = [
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'daily-life', label: 'Interactive Quizzes', icon: Sparkles },
    { id: 'progress', label: 'Progress & Stats', icon: BarChart2 }
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between min-h-screen p-5 shrink-0 select-none shadow-sm z-20">
      <div>
        {/* Logo */}
        <div 
          className="flex items-center gap-2.5 pb-5 border-b border-slate-100 cursor-pointer"
          onClick={() => onNavigate('courses')}
        >
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/20">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Learn<span className="text-indigo-600">Easy</span>
          </span>
        </div>

        {/* Student Profile Card */}
        <div 
          onClick={onOpenProfileModal}
          className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-100/80 transition-colors"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-full bg-indigo-100 overflow-hidden shrink-0 flex items-center justify-center font-bold text-xs text-indigo-700">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" 
                alt="Alex Rivera"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              AR
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-slate-900 truncate">Alex Rivera</span>
              <span className="text-[11px] text-slate-500">Class 5</span>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[11px] font-bold border border-indigo-100 shrink-0">
            <Zap className="w-3 h-3 text-indigo-600 fill-indigo-600" />
            <span>480 XP</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-5 flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id || (activePage === 'home' && item.id === 'courses');
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium text-center">
        © 2024 LearnEasy
      </div>
    </aside>
  );
}
