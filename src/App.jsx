import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import TopBar from './components/layout/TopBar';
import CoursesPage from './components/courses/CoursesPage';
import DailyLifeQuizzesPage from './components/quizzes/DailyLifeQuizzesPage';
import ProgressPage from './components/progress/ProgressPage';
import EditStudentModal from './components/modals/EditStudentModal';

export default function App() {
  const [activePage, setActivePage] = useState('courses'); // 'home' | 'courses' | 'daily-life' | 'progress'
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  // Sync with browser location hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['courses', 'daily-life', 'progress'].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('courses');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setActivePage(page);
    window.location.hash = page === 'courses' ? '#courses' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen bg-[#F4F6FB] text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
      {/* 1. Left Sidebar Navigation */}
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenProfileModal={() => setIsEditProfileOpen(true)}
      />

      {/* 2. Right Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header Bar */}
        <TopBar />

        {/* View Component Router */}
        <main className="flex-1 overflow-y-auto">
          {activePage === 'daily-life' ? (
            /* Daily Life Quizzes Page (Matching Image 1) */
            <DailyLifeQuizzesPage />
          ) : activePage === 'progress' ? (
            /* Progress & Telemetry Page */
            <ProgressPage
              onBackToHome={() => handleNavigate('courses')}
              onNavigateCourses={() => handleNavigate('courses')}
            />
          ) : (
            /* Class 5 Courses Page (Matching Image 2) */
            <CoursesPage
              onNavigateQuizzes={() => handleNavigate('daily-life')}
              onNavigateProgress={() => handleNavigate('progress')}
            />
          )}
        </main>
      </div>

      {/* Edit Student Profile Modal */}
      {isEditProfileOpen && (
        <EditStudentModal
          isOpen={isEditProfileOpen}
          onClose={() => setIsEditProfileOpen(false)}
        />
      )}
    </div>
  );
}
