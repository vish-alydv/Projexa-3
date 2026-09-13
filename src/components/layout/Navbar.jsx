import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X, User } from 'lucide-react';

export default function Navbar({ onOpenAuth, activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', isPage: true },
    { name: 'Courses', id: 'courses', isPage: true },
    { name: 'Progress', id: 'progress', isPage: true },
    { name: 'Daily Life Quizzes', id: 'daily-life', isPage: true },
    { name: 'About', id: 'about', isPage: true },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.isPage) {
      onNavigate(link.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (activePage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const target = document.querySelector(link.href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-teal-100/80 shadow-[0_4px_20px_rgba(13,148,136,0.04)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group focus:outline-none text-left flex-shrink-0"
            aria-label="Learn Easy Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0D9488] to-teal-700 flex items-center justify-center text-white shadow-sm shadow-teal-700/20 group-hover:scale-[1.02] transition-transform duration-200">
              <BookOpen className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Learn<span className="text-[#0D9488]">Easy</span>
                </span>
                <span className="hidden sm:inline-flex px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase bg-[#CCFBF1] text-[#0D9488] rounded-md border border-teal-200/60">
                  Class 5
                </span>
              </div>
            </div>
          </button>

          {/* Navigation Bar Moved Towards Right with Log In Icon inside the same bar */}
          <div className="hidden md:flex items-center ml-auto">
            <nav className="flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              {navLinks.map((link) => {
                const isActive = link.id === activePage;

                return (
                  <button
                    key={link.name}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-150 relative ${
                      isActive
                        ? 'text-[#0D9488] bg-[#CCFBF1]/70 font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.id === 'courses' && (
                      <span className="ml-1.5 px-1.5 py-0.2 text-[9px] font-bold bg-[#0D9488] text-white rounded-full">
                        5th
                      </span>
                    )}
                  </button>
                );
              })}

              {/* Divider inside the same bar */}
              <div className="h-4 w-px bg-slate-200/80 mx-1" />

              {/* Log In Icon Only inside the same bar */}
              <button
                onClick={() => onOpenAuth('login')}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:text-[#0D9488] hover:bg-white transition-all duration-150 relative group"
                title="Log In"
                aria-label="Log In"
              >
                <User className="w-4 h-4" />
                {/* Tooltip on hover */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900 text-white text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
                  Log In
                </span>
              </button>
            </nav>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenAuth('login')}
              className="p-2 rounded-xl text-slate-700 bg-white/80 border border-teal-100 hover:text-[#0D9488]"
              title="Log In"
              aria-label="Log In"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-white/80 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-teal-100 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-xl flex items-center justify-between ${
                    link.id === activePage
                      ? 'text-[#0D9488] bg-[#CCFBF1]/50 font-semibold'
                      : 'text-slate-700 hover:bg-teal-50/60'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.id === 'courses' && (
                    <span className="px-2 py-0.5 text-xs font-bold bg-[#CCFBF1] text-[#0D9488] rounded-full">
                      Class 5th
                    </span>
                  )}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('login');
                  }}
                  className="w-full py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-xl flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4 text-[#0D9488]" />
                  <span>Log In</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
