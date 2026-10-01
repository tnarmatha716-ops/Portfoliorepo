import React from 'react';
import { User, Hammer, BookOpen, TrendingUp, CheckCircle2, GraduationCap } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section-wrapper about-section" aria-label="About Me">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={13} />
            <span>EDITORIAL BIOGRAPHY</span>
          </div>
          <h2 className="section-title">ABOUT ME</h2>
          <p className="section-subtitle">
            An engineering undergraduate passionate about modern web development, algorithmic problem-solving, and continuous learning.
          </p>
        </div>

        {/* Narrative & Pillars Layout */}
        <div className="about-editorial-grid">
          {/* Main Narrative Block */}
          <div className="about-narrative-card glass-card">
            <h3 className="about-narrative-heading">
              Engineering Foundations &amp; Passion for the Web
            </h3>
            <p className="about-narrative-text">
              I am a motivated Computer Science and Engineering student at <strong className="highlight-ink">Excel Engineering College</strong> (affiliated with Anna University). My academic and project journey is centered around web development, programming logic, and building clean, structured applications.
            </p>
            <p className="about-narrative-text">
              With a keen interest in the evolving <strong className="highlight-ink">IT industry</strong>, I focus on transforming technical requirements into responsive, accessible, and intuitive digital experiences. Whether exploring full-stack MERN workflows, designing normalized database schemas in MySQL, or tackling algorithmic logic challenges, I approach every project with curiosity, discipline, and a commitment to continuous growth.
            </p>

            <div className="about-academic-callout">
              <GraduationCap size={20} className="callout-icon" />
              <div>
                <span className="callout-title">Excel Engineering College • Anna University</span>
                <span className="callout-desc">B.E. Computer Science and Engineering • CGPA: 7.62 / 10.0 • Expected 2027</span>
              </div>
            </div>
          </div>

          {/* Three Elegant Cards: Building, Learning, Growth */}
          <div className="about-pillars-container">
            {/* Card 1: Building */}
            <div className="pillar-editorial-card glass-card">
              <div className="pillar-card-icon-box">
                <Hammer size={22} className="pillar-icon" />
              </div>
              <div className="pillar-card-body">
                <span className="pillar-tag">PILLAR 01</span>
                <h4 className="pillar-title">BUILDING</h4>
                <p className="pillar-desc">
                  Developing clean, responsive, and robust web applications utilizing HTML, CSS, JavaScript, React, Node.js, and MySQL.
                </p>
              </div>
            </div>

            {/* Card 2: Learning */}
            <div className="pillar-editorial-card glass-card">
              <div className="pillar-card-icon-box">
                <BookOpen size={22} className="pillar-icon" />
              </div>
              <div className="pillar-card-body">
                <span className="pillar-tag">PILLAR 02</span>
                <h4 className="pillar-title">LEARNING</h4>
                <p className="pillar-desc">
                  Deepening computer science foundations, object-oriented principles with Java, and exploring modern AI integrations.
                </p>
              </div>
            </div>

            {/* Card 3: Growth */}
            <div className="pillar-editorial-card glass-card">
              <div className="pillar-card-icon-box">
                <TrendingUp size={22} className="pillar-icon" />
              </div>
              <div className="pillar-card-body">
                <span className="pillar-tag">PILLAR 03</span>
                <h4 className="pillar-title">GROWTH</h4>
                <p className="pillar-desc">
                  Refining problem-solving through hackathons, collaborative teamwork, continuous practice, and athletic discipline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
