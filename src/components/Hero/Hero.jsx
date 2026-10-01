import React from 'react';
import { ArrowDown, Mail, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';
import './Hero.css';

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Hero Introduction">
      <div className="container hero-container">
        {/* Left Column: Intro Text */}
        <div className="hero-text-col">
          <div className="hero-greeting-pill">
            <span className="pill-dot" />
            <span className="greeting-text">HELLO, I'M</span>
          </div>

          <h1 className="hero-name">NARMATHA T</h1>

          <div className="hero-role-wrapper">
            <h2 className="hero-role">COMPUTER SCIENCE &amp; ENGINEERING STUDENT</h2>
            <div className="hero-role-accent" />
          </div>

          <p className="hero-description">
            {personalInfo.bio}
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary hero-btn"
              onClick={() => handleScroll('projects')}
              aria-label="View Projects"
            >
              <span>VIEW PROJECTS</span>
              <ArrowDown size={16} />
            </button>

            <button
              type="button"
              className="btn btn-secondary hero-btn"
              onClick={() => handleScroll('contact')}
              aria-label="Contact Me"
            >
              <Mail size={16} />
              <span>CONTACT ME</span>
            </button>
          </div>

          {/* Academic Info Strip */}
          <div className="hero-tags-row">
            <div className="hero-tag-item">
              <span className="tag-bullet">•</span>
              <span>Excel Engineering College</span>
            </div>
            <div className="hero-tag-item">
              <span className="tag-bullet">•</span>
              <span>Anna University</span>
            </div>
            <div className="hero-tag-item">
              <span className="tag-bullet">•</span>
              <span>CGPA: 7.62 / 10.0</span>
            </div>
          </div>
        </div>

        {/* Right Column: Professionally Framed Portrait Presentation */}
        <div className="hero-image-col">
          <motion.div
            className="hero-portrait-frame-wrap"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{
              scale: 1.015,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            {/* The Framed Portrait Card */}
            <div className="hero-portrait-card">
              <div className="hero-portrait-inner">
                <img
                  src="/images/profile/narmatha.jpg"
                  alt="Narmatha T - Computer Science and Engineering Student"
                  className="hero-portrait-img"
                  loading="eager"
                />
              </div>
            </div>

            {/* Small Academic Badge */}
            <div className="hero-academic-badge">
              <GraduationCap size={16} className="academic-badge-icon" />
              <div className="academic-badge-text">
                <span className="academic-label-title">B.E. Computer Science</span>
                <span className="academic-label-sub">Anna University • 2023–2027</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
