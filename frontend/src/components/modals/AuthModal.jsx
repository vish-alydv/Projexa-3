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
  Sparkles
} from 'lucide-react';
import { useAuth, AVAILABLE_GRADES } from '../../context/AuthContext';

export default function AuthModal({ isOpen, onClose }) {
  const { login, register } = useAuth();
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
        const result = await login({ email, password });
        if (result.success) {
          setSuccessMsg(`Welcome back, ${result.user.name}!`);
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

  return (
    <div className="fixed inset-0 z-[110] bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

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
              ? "Select your class and start learning with interactive AI quizzes" 
              : "Access your courses, quizzes, and learning stats"}
          </p>
        </div>

        {/* Mode Toggle Pills */}
        <div className="flex bg-slate-100 p-1 rounded-2xl mb-5">
          <button
            type="button"
            onClick={() => { setIsRegisterMode(false); setErrorMsg(''); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
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
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
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
            <>
              {/* Student Name */}
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

              {/* CLASS SELECTION DROPDOWN */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-indigo-700 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Select Student's Class</span>
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-indigo-600 absolute left-3.5 top-3" />
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-indigo-200 bg-indigo-50/50 text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none cursor-pointer"
                  >
                    {AVAILABLE_GRADES.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}

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
            className="w-full mt-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            {loading ? (
              <span className="inline-block animate-spin mr-2">⏳</span>
            ) : (
              <>
                <span>{isRegisterMode ? "Complete Registration" : "Sign In to Account"}</span>
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
      </div>
    </div>
  );
}
