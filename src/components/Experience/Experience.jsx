import React from 'react';
import { Briefcase, Calendar, Clock, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { experienceData } from '../../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper experience-section" aria-label="Work Experience and Internships">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={13} />
            <span>PRACTICAL EXPOSURE</span>
          </div>
          <h2 className="section-title">EXPERIENCE & INTERNSHIPS</h2>
          <p className="section-subtitle">
            Hands-on technical internships strengthening core full-stack competencies, client-server workflows, and professional engineering practices.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="experience-timeline">
          <div className="timeline-spine" />

          {experienceData.map((item, idx) => (
            <div key={item.company} className="timeline-node-entry">
              {/* Timeline Pin Indicator */}
              <div className="timeline-marker">
                <div className="timeline-marker-outer">
                  <div className="timeline-marker-inner" />
                </div>
                <div className="timeline-marker-glow" />
              </div>

              {/* Timeline Content Card */}
              <div className="timeline-card glass-card interactive-card">
                <div className="timeline-card-header">
                  <div className="timeline-role-meta">
                    <span className="timeline-type-pill">{item.type}</span>
                    <h3 className="timeline-company-name">{item.company}</h3>
                    <h4 className="timeline-role-title">{item.role}</h4>
                  </div>

                  <div className="timeline-dates-wrap">
                    <div className="date-item">
                      <Calendar size={14} className="date-icon" />
                      <span>{item.period}</span>
                    </div>
                    <div className="date-item duration-badge">
                      <Clock size={14} className="date-icon" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="timeline-summary-desc">{item.description}</p>

                {/* Key Achievements & Learnings List */}
                <div className="timeline-learnings">
                  <span className="learnings-heading">Key Learnings & Impact:</span>
                  <ul className="learnings-list">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="learning-item">
                        <CheckCircle2 size={16} className="learning-check" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="timeline-tech-row">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="timeline-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
