import React from 'react';
import { Trophy, Medal, Award, Flame, Users, Calendar, Flag, Sparkles } from 'lucide-react';
import { achievementsData } from '../../data/achievements';
import { personalInfo } from '../../data/personal';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrapper achievements-section" aria-label="Honors, Achievements and Leadership">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={13} />
            <span>EXCELLENCE & RECOGNITION</span>
          </div>
          <h2 className="section-title">ACHIEVEMENTS & LEADERSHIP</h2>
          <p className="section-subtitle">
            Demonstrated resilience, sportsmanship, and organizational leadership across competitive martial arts, athletics, and technical campus symposiums.
          </p>
        </div>

        {/* Athletic Honors Grid */}
        <div className="achievements-cards-grid">
          {achievementsData.map((item) => (
            <article key={item.id} className="achievement-card glass-card interactive-card">
              {/* Media Thumbnail */}
              <div className="achievement-image-box">
                <img
                  src={item.image}
                  alt={`${item.title} ${item.award}`}
                  className="achievement-img"
                  loading="lazy"
                />
                <div className="achievement-image-overlay" />
                <span className="achievement-tag-pill">{item.tag}</span>
              </div>

              {/* Text Info */}
              <div className="achievement-content">
                <div className="achievement-meta-row">
                  <span className="achievement-category">{item.category}</span>
                  <Trophy size={16} className="trophy-gold-icon" />
                </div>

                <h3 className="achievement-title">{item.title}</h3>
                <h4 className="achievement-award-label">{item.award}</h4>

                <p className="achievement-description">{item.description}</p>

                {/* Core Attributes */}
                <div className="achievement-attributes">
                  {item.attributes.map((attr) => (
                    <span key={attr} className="attribute-badge">
                      {attr}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Leadership & Campus Activities Strip */}
        <div className="leadership-section-block">
          <div className="leadership-header">
            <div className="leadership-tag">
              <Users size={14} />
              <span>COLLEGIATE ACTIVITIES & LEADERSHIP</span>
            </div>
            <h3 className="leadership-title">Event Leadership & Team Initiatives</h3>
            <p className="leadership-desc">
              Demonstrating initiative, organizational responsibility, and collaborative energy within college symposiums and cultural celebrations.
            </p>
          </div>

          <div className="leadership-cards-grid">
            {personalInfo.leadership.map((lead, idx) => (
              <div key={idx} className="leadership-card glass-card">
                <div className="lead-icon-box">
                  <Flag size={20} />
                </div>
                <div className="lead-info">
                  <span className="lead-domain">{lead.domain}</span>
                  <h4 className="lead-role">{lead.role}</h4>
                  <p className="lead-text">{lead.description}</p>
                </div>
              </div>
            ))}

            <div className="leadership-card glass-card">
              <div className="lead-icon-box">
                <Sparkles size={20} />
              </div>
              <div className="lead-info">
                <span className="lead-domain">Core Values in Action</span>
                <h4 className="lead-role">Collaboration & Adaptability</h4>
                <p className="lead-text">
                  Proven track record of thriving under event pressure, resolving logistics hiccups gracefully, and mentoring junior batch members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
