import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  LogOut,
  ShieldCheck
} from 'lucide-react';
import { useAuth, AVAILABLE_GRADES } from '../../context/AuthContext';

export default function AuthModal({ isOpen, onClose }) {
  const { currentUser, login, register, logout } = useAuth();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('Class 5th');
  
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    try {
      if (isRegisterMode) {
        if (!name.trim()) {
          setErrorMsg("Please enter student's full name");
          setLoading(false);
          return;
        }
        const result = await register({ name, email, password, grade });
        if (result.success) {
          setSuccessMsg(`Account created for ${result.user.name} in ${result.user.grade}!`);
          setTimeout(() => {
            onClose();
          }, 800);
        } else {
          setErrorMsg(result.error);
        }
      } else {
        const result = await login({ email, password, grade });
        if (result.success) {
          setSuccessMsg(`Welcome back, ${result.user.name}! Enrolled in ${result.user.grade}.`);
          setTimeout(() => {
            onClose();
          }, 800);
        } else {
          setErrorMsg(result.error);
        }
      }
    } catch (err) {
      setErrorMsg("Unable to connect to backend server. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    setName('');
    setEmail('');
    setPassword('');
    setSuccessMsg("Logged out successfully. You can now log in or register with a new class.");
    setTimeout(() => setSuccessMsg(''), 2500);
  };

  return (
    <div className="fixed inset-0 z-[110] bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ================= ALREADY LOGGED IN VIEW ================= */}
        {currentUser && currentUser.email ? (
          <div className="text-center py-2">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mx-auto mb-3 shadow-md shadow-indigo-600/30">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Student Profile
            </h2>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Your active account and locked enrolled class
            </p>

            {/* Profile Info Card */}
            <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <span className="text-xs font-semibold text-slate-500">Student Name</span>
                <span className="text-xs font-extrabold text-slate-900">{currentUser.name || "Student"}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <span className="text-xs font-semibold text-slate-500">Email Address</span>
                <span className="text-xs font-bold text-slate-700">{currentUser.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Enrolled Class</span>
                <div className="flex items-center gap-1.5 bg-indigo-100/80 border border-indigo-200 text-indigo-900 font-extrabold text-xs px-2.5 py-1 rounded-full">
                  <span>{currentUser.grade || "Class 5th"}</span>
                  <span className="text-[10px] bg-indigo-600 text-white px-1.5 py-0.2 rounded font-bold uppercase tracking-wider flex items-center gap-0.5">
                    <Lock className="w-2.5 h-2.5" />
                    <span>Locked</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Lock Notice */}
            <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-[11px] font-medium flex items-start gap-2 text-left">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Class is locked:</strong> Your quizzes and curriculum are permanently customized for <strong>{currentUser.grade || "Class 5th"}</strong>. To learn a different class, log out and select another class.
              </span>
            </div>

            {/* Actions */}
            <div className="mt-5 flex flex-col gap-2.5">
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
              >
                Continue Learning in {currentUser.grade || "Class 5th"}
              </button>
              <button
                onClick={handleLogout}
                className="w-full py-2.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100/80 text-rose-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out / Switch Student</span>
              </button>
            </div>
          </div>
        ) : (
          /* ================= SIGN IN / REGISTER FORM ================= */
          <>
            {/* Modal Branding Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mx-auto mb-3 shadow-md shadow-indigo-600/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {isRegisterMode ? "Create Student Account" : "Student Login"}
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                {isRegisterMode 
                  ? "Select your class now — it will be locked to your account" 
                  : "Sign in with your email, password & class"}
              </p>
            </div>

            {/* Mode Toggle Pills */}
            <div className="flex bg-slate-100 p-1 rounded-2xl mb-5">
              <button
                type="button"
                onClick={() => { setIsRegisterMode(false); setErrorMsg(''); }}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  !isRegisterMode 
                    ? 'bg-white text-indigo-700 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => { setIsRegisterMode(true); setErrorMsg(''); }}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  isRegisterMode 
                    ? 'bg-white text-indigo-700 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Error / Success Notifications */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}
            {successMsg && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {isRegisterMode && (
                /* Student Name */
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Student Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
                    />
                  </div>
                </div>
              )}

              {/* CLASS SELECTION DROPDOWN (Prominently shown in both Login & Register) */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-indigo-700 mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Select Student's Class</span>
                  </span>
                  <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5 text-amber-600" />
                    <span>Locked after login</span>
                  </span>
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-indigo-600 absolute left-3.5 top-3" />
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-indigo-300 bg-indigo-50/70 text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none cursor-pointer"
                  >
                    {AVAILABLE_GRADES.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  💡 This class will be permanently fixed to your learning dashboard.
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                {loading ? (
                  <span className="inline-block animate-spin mr-2">⏳</span>
                ) : (
                  <>
                    <span>{isRegisterMode ? `Register for ${grade}` : `Sign In to ${grade}`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Demo Helper */}
            <div className="mt-4 pt-3 border-t border-slate-100 text-center">
              <p className="text-[11px] text-slate-500 font-medium">
                Data is stored in local SQLite database (<code className="text-indigo-600 font-mono">learn_easy.db</code>).
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
