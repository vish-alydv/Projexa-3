import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AVAILABLE_GRADES = [
  "Class 1st",
  "Class 2nd",
  "Class 3rd",
  "Class 4th",
  "Class 5th",
  "Class 6th",
  "Class 7th",
  "Class 8th",
  "Class 9th",
  "Class 10th"
];

const API_BASE = "http://localhost:8000/api";

export function AuthProvider({ children }) {
  // Check localStorage for saved session
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('learn_easy_user');
      return saved ? JSON.parse(saved) : {
        id: 1,
        name: "Alex Rivera",
        email: "alex@learneasy.com",
        grade: "Class 5th"
      };
    } catch {
      return {
        id: 1,
        name: "Alex Rivera",
        email: "alex@learneasy.com",
        grade: "Class 5th"
      };
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('learn_easy_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('learn_easy_user');
    }
  }, [currentUser]);

  // Register with backend & SQLite
  const register = async ({ name, email, password, grade }) => {
    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, grade })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || "Registration failed");
      }
      const userObj = { ...data };
      setCurrentUser(userObj);
      return { success: true, user: userObj };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Login with backend & SQLite
  const login = async ({ email, password }) => {
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || "Login failed");
      }
      const userObj = { ...data };
      setCurrentUser(userObj);
      return { success: true, user: userObj };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Logout
  const logout = () => {
    setCurrentUser(null);
  };

  // Switch Grade directly
  const setGrade = (newGrade) => {
    if (currentUser) {
      setCurrentUser(prev => ({ ...prev, grade: newGrade }));
    }
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      isAuthModalOpen,
      setIsAuthModalOpen,
      register,
      login,
      logout,
      setGrade
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
