import React, { useState, useEffect } from 'react';
import CoverPage from './CoverPage';
import WelcomePage from './WelcomePage';
import { FastForward } from 'lucide-react';
import './Flipbook.css';

export default function Flipbook({ onComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
  }, []);

  const handleOpenCover = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleExplore = () => {
    setIsClosing(true);
    try {
      sessionStorage.setItem('narmatha_portfolio_intro_seen', 'true');
    } catch {
      // safe fallback
    }
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <aside
      className={`flipbook-overlay ${isClosing ? 'overlay-fade-out' : ''}`}
      aria-label="Portfolio Introduction Flipbook"
    >
      {/* Background ambient lighting in warm cream tones */}
      <div className="flipbook-backdrop-glow" />

      {/* Small Skip Intro Control */}
      <button
        type="button"
        className="skip-intro-btn"
        onClick={handleExplore}
        aria-label="Skip Introduction"
      >
        <span>Skip Intro</span>
        <FastForward size={14} />
      </button>

      {/* 3D Book Stage */}
      <div className={`book-stage ${prefersReducedMotion ? 'reduced-motion' : ''}`}>
        <div className={`book-container ${isOpen ? 'book-is-open' : 'book-is-closed'}`}>
          {/* Underneath: The Cream-colored Welcome Inside Page */}
          <div className="book-leaf interior-page">
            <WelcomePage onExplore={handleExplore} />
          </div>

          {/* Flipping Front Leaf (Cover on front, inside flap on back) */}
          <div
            className={`book-leaf front-cover-leaf ${isOpen ? 'leaf-flipped' : ''}`}
          >
            {/* Front of the leaf */}
            <div className="leaf-face leaf-front">
              <CoverPage onOpen={handleOpenCover} />
            </div>

            {/* Back of the cover leaf (inside left flap) */}
            <div className="leaf-face leaf-back">
              <div className="inside-cover-content">
                <div className="inside-cover-monogram">NT</div>
                <div className="inside-quote">
                  "Building thoughtful software at the intersection of web engineering, modern logic, and continuous learning."
                </div>
                <div className="inside-signature">— Narmatha T</div>
              </div>
            </div>
          </div>

          {/* Realistic Spine Shadows & Page Depth */}
          <div className={`book-spine-shadow ${isOpen ? 'spine-shadow-open' : ''}`} />
          <div className="book-page-depth" />
        </div>
      </div>
    </aside>
  );
}
