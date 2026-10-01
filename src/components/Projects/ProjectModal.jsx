import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-top">
            <span className="modal-category-tag">{project.category || project.subtitle}</span>
            <span className="modal-status-badge">{project.number} • {project.status}</span>
          </div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-tagline">{project.tagline}</p>
        </div>

        {/* Modal Media Showcase */}
        <div className="modal-media-showcase">
          <img
            src={project.coverImage}
            alt={`${project.title} preview`}
            className="modal-preview-img"
          />
          <div className="modal-media-caption">
            <span>{project.screenshots?.[0]?.caption || project.title}</span>
          </div>
        </div>

        {/* Modal Body Grid */}
        <div className="modal-body-content">
          {/* Key Overview */}
          <div className="modal-section-block">
            <h3 className="modal-subheading">Overview</h3>
            <p className="modal-text">{project.overview}</p>
          </div>

          {/* Problem & Solution Dual Column */}
          <div className="modal-problem-solution-grid">
            <div className="problem-box">
              <h4 className="box-title">The Challenge</h4>
              <p className="box-text">{project.problem}</p>
            </div>
            <div className="solution-box">
              <h4 className="box-title">The Solution</h4>
              <p className="box-text">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="modal-section-block">
            <h3 className="modal-subheading">Key Features</h3>
            <ul className="modal-features-list">
              {project.keyFeatures?.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <CheckCircle2 size={16} className="feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="modal-section-block">
            <h3 className="modal-subheading">Technology Stack</h3>
            <div className="modal-tech-tags">
              {project.tags?.map((t) => (
                <span key={t} className="modal-tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Development Approach */}
          <div className="modal-section-block">
            <h3 className="modal-subheading">Development Approach</h3>
            <p className="modal-text">{project.developmentApproach}</p>
          </div>

          {/* External Links Bar */}
          <div className="modal-links-row">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            ) : null}

            <button type="button" className="btn btn-secondary" onClick={onClose}>
              <span>Close View</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
