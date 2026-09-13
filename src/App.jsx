import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/hero/HeroSection';
import TrustStrip from './components/sections/TrustStrip';
import FeaturesSection from './components/sections/FeaturesSection';
import LearningPathsSection from './components/sections/LearningPathsSection';
import ProgressDashboardSection from './components/sections/ProgressDashboardSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import FinalCtaSection from './components/sections/FinalCtaSection';
import Footer from './components/layout/Footer';
import AuthModal from './components/modals/AuthModal';
import PathDetailModal from './components/modals/PathDetailModal';
import CoursesPage from './components/courses/CoursesPage';
import ProgressPage from './components/progress/ProgressPage';
import AboutPage from './components/about/AboutPage';
import DailyLifeQuizzesPage from './components/quizzes/DailyLifeQuizzesPage';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'courses' | 'progress' | 'about' | 'daily-life'
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signup');
  const [selectedPath, setSelectedPath] = useState(null);

  // Sync with browser hash if user opens or uses back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['courses', 'progress', 'about', 'daily-life'].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenAuth = (mode = 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleSelectPath = (path) => {
    setSelectedPath(path);
  };

  const handleEnrollPath = (path) => {
    handleOpenAuth('signup');
  };

  const handleNavigate = (page) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '#home' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] bg-radial-teal text-slate-900 flex flex-col selection:bg-[#0D9488] selection:text-white relative">
      {/* Top sticky glass navbar with page navigation */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {activePage === 'courses' ? (
          /* Dedicated Class 5th Courses Page */
          <CoursesPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAuth={handleOpenAuth}
          />
        ) : activePage === 'progress' ? (
          /* Dedicated Progress & Telemetry Page */
          <ProgressPage
            onBackToHome={() => handleNavigate('home')}
            onNavigateCourses={() => handleNavigate('courses')}
            onOpenAuth={handleOpenAuth}
          />
        ) : activePage === 'about' ? (
          /* Dedicated About & Pedagogy Page */
          <AboutPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAuth={handleOpenAuth}
          />
        ) : activePage === 'daily-life' ? (
          /* Dedicated Daily Life Scenario Quizzes Page */
          <DailyLifeQuizzesPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAuth={handleOpenAuth}
          />
        ) : (
          /* Home Landing Page */
          <>
            {/* 2. Hero Section */}
            <HeroSection
              onStartLearning={() => handleOpenAuth('signup')}
              onExploreCourses={() => handleNavigate('courses')}
            />

            {/* 3. Trust / Value Strip */}
            <TrustStrip />

            {/* 4. Features Section */}
            <FeaturesSection />

            {/* 5. Learning Paths */}
            <LearningPathsSection onSelectPath={handleSelectPath} />

            {/* 6. Learning Progress Section */}
            <ProgressDashboardSection onStartLearning={() => handleOpenAuth('signup')} />

            {/* 7. How It Works */}
            <HowItWorksSection onStartLearning={() => handleOpenAuth('signup')} />

            {/* 8. Final CTA */}
            <FinalCtaSection onStartLearning={() => handleOpenAuth('signup')} />
          </>
        )}
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenAuth={handleOpenAuth}
        onNavigateCourses={() => handleNavigate('courses')}
        onNavigateProgress={() => handleNavigate('progress')}
        onNavigateAbout={() => handleNavigate('about')}
        onNavigateDailyLife={() => handleNavigate('daily-life')}
      />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
      />

      <PathDetailModal
        path={selectedPath}
        onClose={() => setSelectedPath(null)}
        onEnroll={handleEnrollPath}
      />
    </div>
  );
}
