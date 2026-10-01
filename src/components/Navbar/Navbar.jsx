import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Download } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar({ onReplayIntro }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="container navbar-container">
        {/* Brand Monogram */}
        <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="brand-badge">NT</div>
          <div className="brand-text">
            <span className="brand-name">NARMATHA T</span>
            <span className="brand-sub">CSE PORTFOLIO</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="navbar-links-desktop">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span>{item.label}</span>
                {isActive && <span className="nav-active-indicator" />}
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="navbar-actions">
          {onReplayIntro && (
            <button
              type="button"
              className="navbar-icon-btn"
              onClick={onReplayIntro}
              title="Replay Book Intro"
              aria-label="Replay Book Opening"
            >
              <BookOpen size={16} />
              <span className="replay-text">Intro</span>
            </button>
          )}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline nav-resume-btn"
            title="Download Narmatha's Resume"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-links-list">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="mobile-link-bullet">/</span>
                  <span className="mobile-link-text">{item.label}</span>
                  {isActive && <span className="mobile-active-dot" />}
                </a>
              );
            })}
          </div>

          <div className="mobile-drawer-footer">
            {onReplayIntro && (
              <button
                type="button"
                className="btn btn-secondary mobile-replay-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
              >
                <BookOpen size={16} />
                <span>Replay Book Opening</span>
              </button>
            )}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
