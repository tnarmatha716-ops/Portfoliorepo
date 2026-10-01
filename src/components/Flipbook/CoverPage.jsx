import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export default function CoverPage({ onOpen }) {
  return (
    <div className="book-cover-front" role="button" tabIndex={0} aria-label="Open portfolio book">
      {/* Decorative Book Border Inset */}
      <div className="cover-inner-border">
        {/* Gold Corner Accents */}
        <div className="corner-accent top-left" />
        <div className="corner-accent top-right" />
        <div className="corner-accent bottom-left" />
        <div className="corner-accent bottom-right" />

        {/* Book Spine Texture Line on Left */}
        <div className="book-spine-line" />

        <div className="cover-content">
          <div className="cover-badge">
            <span className="cover-badge-dot" />
            <span>EXCEL ENGG. • ANNA UNIVERSITY</span>
          </div>

          <div className="cover-monogram">
            <div className="monogram-box">
              <span className="monogram-letter">NT</span>
            </div>
          </div>

          <h1 className="cover-title">NARMATHA T</h1>
          <div className="cover-divider" />
          <p className="cover-subtitle">COMPUTER SCIENCE &amp; ENGINEERING</p>

          <div className="cover-tagline">
            <Sparkles size={14} className="cover-sparkle" />
            <span>MY DIGITAL PORTFOLIO</span>
            <Sparkles size={14} className="cover-sparkle" />
          </div>

          <button
            type="button"
            className="btn btn-cover-open"
            onClick={onOpen}
            aria-label="Open Portfolio"
          >
            <BookOpen size={16} />
            <span>OPEN PORTFOLIO</span>
          </button>
        </div>
      </div>

      {/* Book 3D Edge Shading */}
      <div className="book-edge-shading" />
    </div>
  );
}
