import React from 'react';
import { Mail, BookOpen, ArrowUp } from 'lucide-react';
import { LinkedinIcon } from '../common/BrandIcons';
import { personalInfo } from '../../data/personal';
import './Footer.css';

export default function Footer({ onReplayIntro }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        <div className="footer-content-row">
          {/* Brand Name */}
          <div className="footer-brand">
            <h3 className="footer-name">Narmatha T</h3>
            <p className="footer-sub">Computer Science &amp; Engineering</p>
          </div>

          {/* Center Links & Replay Control */}
          <div className="footer-center-controls">
            {onReplayIntro && (
              <button
                type="button"
                className="footer-replay-btn"
                onClick={onReplayIntro}
                title="Replay Book Introduction"
                aria-label="Replay Book Introduction"
              >
                <BookOpen size={16} />
                <span>Replay Introduction</span>
              </button>
            )}

            <div className="footer-social-icons">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-icon-link"
                title="Send Email"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Right: Copyright & Back to Top */}
          <div className="footer-right-col">
            <button
              type="button"
              className="footer-top-btn"
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Narmatha T. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
