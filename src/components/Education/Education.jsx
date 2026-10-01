import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../../data/education';
import './Education.css';

export default function Education() {
  const edu = educationData[0];

  return (
    <section id="education" className="section-wrapper education-section" aria-label="Education Background">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={13} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="section-title">EDUCATION</h2>
          <p className="section-subtitle">
            Rigorous undergraduate engineering curriculum building foundational expertise in computer science, algorithms, and web architectures.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="education-card-wrapper">
          <div className="education-card glass-card interactive-card">
            {/* Top Bar with Badges */}
            <div className="edu-top-row">
              <div className="edu-status-badge">
                <span className="edu-status-dot" />
                <span>{edu.status}</span>
              </div>
              <div className="edu-cgpa-badge">
                <Award size={15} className="cgpa-icon" />
                <span>CGPA: <strong>{edu.cgpa}</strong></span>
              </div>
            </div>

            {/* Institution & Degree Info */}
            <div className="edu-main-info">
              <div className="edu-degree-group">
                <h3 className="edu-degree-title">{edu.degree} in {edu.field}</h3>
                <h4 className="edu-institution-name">{edu.institution}</h4>
                <p className="edu-affiliation">{edu.affiliation}</p>
              </div>

              <div className="edu-meta-items">
                <div className="edu-meta-pill">
                  <Calendar size={14} className="meta-icon" />
                  <span>{edu.period} ({edu.expectedCompletion})</span>
                </div>
                <div className="edu-meta-pill">
                  <MapPin size={14} className="meta-icon" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            {/* Core Coursework Grid */}
            <div className="edu-coursework-block">
              <span className="coursework-title">Relevant Core Coursework:</span>
              <div className="coursework-tags-grid">
                {edu.coursework.map((course) => (
                  <div key={course} className="course-tag">
                    <BookOpen size={13} className="course-icon" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="edu-highlights-block">
              <span className="highlights-title">Academic Highlights:</span>
              <div className="highlights-list">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="highlight-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
