import React from 'react';
import { ArrowRight, GraduationCap, Code, Award } from 'lucide-react';

export default function WelcomePage({ onExplore }) {
  return (
    <div className="book-page-welcome">
      <div className="welcome-inner-border">
        {/* Subtle Page Watermark */}
        <div className="page-watermark">PORTFOLIO</div>

        <div className="welcome-content">
          <div className="welcome-avatar-wrapper">
            <div className="welcome-avatar-ring">
              <img
                src="/images/profile/narmatha.jpg"
                alt="Narmatha T"
                className="welcome-avatar-img"
              />
            </div>
            <div className="welcome-status-pill">
              <span className="welcome-status-dot" />
              <span>Available for Opportunities</span>
            </div>
          </div>

          <div className="welcome-header">
            <span className="welcome-overline">CURATED ENGINEERING WORKS</span>
            <h2 className="welcome-heading">WELCOME TO MY PORTFOLIO</h2>
            <div className="welcome-divider" />
            <p className="welcome-subtext">
              Explore my journey, projects, skills and experiences as a motivated Computer Science and Engineering student.
            </p>
          </div>

          {/* Quick highlights preview inside book */}
          <div className="welcome-quick-pills">
            <div className="welcome-pill">
              <GraduationCap size={15} className="pill-icon" />
              <span>B.E. Computer Science</span>
            </div>
            <div className="welcome-pill">
              <Code size={15} className="pill-icon" />
              <span>Full-Stack &amp; AI</span>
            </div>
            <div className="welcome-pill">
              <Award size={15} className="pill-icon" />
              <span>Athletic Champion</span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary explore-btn"
            onClick={onExplore}
            aria-label="Explore Portfolio"
          >
            <span>EXPLORE PORTFOLIO</span>
            <ArrowRight size={17} className="btn-arrow" />
          </button>
        </div>

        {/* Page Number Detail */}
        <div className="book-page-footer">
          <span>PAGE 01</span>
          <span className="footer-bullet">•</span>
          <span>NARMATHA T</span>
        </div>
      </div>
    </div>
  );
}
