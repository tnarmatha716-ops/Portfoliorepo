import React from 'react';
import { Award, Cloud, Sparkles, Terminal, BookCheck, CheckCircle } from 'lucide-react';
import { certificationsData } from '../../data/certifications';
import './Certifications.css';

const certIcons = {
  "AI & Emerging Tech": Sparkles,
  "Cloud Infrastructure": Cloud,
  "Hackathon": Terminal
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper certifications-section" aria-label="Certifications">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookCheck size={13} />
            <span>CREDENTIALS & WORKSHOPS</span>
          </div>
          <h2 className="section-title">CERTIFICATIONS & SEMINARS</h2>
          <p className="section-subtitle">
            Specialized national seminars, verified NPTEL credentials, and competitive technical hackathon participation.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert) => {
            const Icon = certIcons[cert.category] || Award;
            return (
              <div key={cert.title} className="cert-card glass-card interactive-card">
                <div className="cert-top-row">
                  <div className="cert-icon-box">
                    <Icon size={22} className="cert-icon" />
                  </div>
                  <span className="cert-badge">{cert.badge}</span>
                </div>

                <div className="cert-content">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-description">{cert.description}</p>
                </div>

                <div className="cert-topics-list">
                  {cert.topics.map((topic) => (
                    <span key={topic} className="cert-topic-pill">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="cert-corner-glow" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
