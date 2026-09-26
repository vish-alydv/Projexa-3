import React from 'react';
import { Award } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="w-full bg-white/60 border-b border-slate-200/60 px-6 sm:px-8 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-slate-800">
          Class 5th Dashboard
        </span>
      </div>

      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs border border-indigo-100">
        <Award className="w-3.5 h-3.5 text-indigo-600" />
        <span>Level 4 Scholar</span>
      </div>
    </header>
  );
}
