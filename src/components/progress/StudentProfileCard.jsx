import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  School, 
  Calendar, 
  ShieldCheck, 
  Edit3, 
  Sparkles,
  Printer
} from 'lucide-react';
import EditStudentModal from '../modals/EditStudentModal';

export default function StudentProfileCard() {
  const [student, setStudent] = useState({
    name: "Alex Rivera",
    gradeSection: "Class 5th - Section B",
    studentId: "LE-2026-5821",
    rollNumber: "28",
    email: "alex.rivera@edu.learn-easy.com",
    phone: "+91 98765 43210",
    guardian: "Dr. Rajesh Rivera (Father)",
    school: "Delhi Public School, International Wing",
    academicYear: "2026 - 2027",
    admissionDate: "15 April 2025",
    attendance: "96.4%",
    rank: "Top 5% in Grade 5",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
  });

  const [editModalOpen, setEditModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm relative overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-indigo-50/70 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          {/* Left: Photo & Essential Identity */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Student Photo with Active Status */}
            <div className="relative group flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-indigo-100">
                <img
                  src={student.photoUrl}
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80";
                  }}
                />
              </div>

              {/* Status active badge */}
              <div className="absolute -bottom-1 -right-1 flex items-center gap-1 bg-white px-2 py-0.5 rounded-full border border-slate-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-700">Active</span>
              </div>
            </div>

            {/* Name, Grade, and Badges */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">
                  {student.gradeSection}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Roll No: <strong className="text-slate-800">{student.rollNumber}</strong>
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-semibold text-slate-500">
                  ID: <strong className="text-slate-800">{student.studentId}</strong>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                {student.name}
                <ShieldCheck className="w-5 h-5 text-indigo-600" title="Verified Student Profile" />
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mt-2">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <School className="w-3.5 h-3.5 text-indigo-600" />
                  {student.school}
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  Academic Year: <strong className="text-slate-700">{student.academicYear}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 w-full sm:w-auto self-stretch sm:self-auto justify-end">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print Profile</span>
            </button>

            <button
              onClick={() => setEditModalOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm shadow-indigo-600/20 transition-all active:scale-[0.98]"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Details</span>
            </button>
          </div>
        </div>

        {/* Bottom Details Grid */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 flex-shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase font-bold text-slate-400">Student Email</div>
              <div className="text-xs font-semibold text-slate-800 truncate" title={student.email}>
                {student.email}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 flex-shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase font-bold text-slate-400">Contact Number</div>
              <div className="text-xs font-semibold text-slate-800 truncate">
                {student.phone}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 flex-shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase font-bold text-slate-400">Parent / Guardian</div>
              <div className="text-xs font-semibold text-slate-800 truncate">
                {student.guardian}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase font-bold text-slate-400">Attendance & Rank</div>
              <div className="text-xs font-semibold text-slate-800 truncate">
                {student.attendance} • {student.rank}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Student Modal */}
      <EditStudentModal
        student={student}
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={(updated) => setStudent(updated)}
      />
    </>
  );
}
