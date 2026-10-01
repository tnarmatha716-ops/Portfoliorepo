import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Flipbook from './components/Flipbook/Flipbook';
import CustomCursor from './components/Cursor/CustomCursor';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

export default function App() {
  const [showFlipbook, setShowFlipbook] = useState(true);

  useEffect(() => {
    // If returning visitor has seen intro in this session, optionally skip automatic flipbook
    try {
      const seen = sessionStorage.getItem('narmatha_portfolio_intro_seen');
      if (seen === 'true') {
        setShowFlipbook(false);
      }
    } catch {
      // safe fallback
    }
  }, []);

  const handleFlipbookComplete = () => {
    setShowFlipbook(false);
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowFlipbook(true);
  };

  return (
    <BrowserRouter>
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Cinematic Digital Portfolio Book Intro */}
      {showFlipbook && (
        <Flipbook onComplete={handleFlipbookComplete} />
      )}

      {/* Main Portfolio Routes */}
      <Routes>
        <Route path="/" element={<Home onReplayIntro={handleReplayIntro} />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
