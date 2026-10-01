import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ExternalLink, QrCode, Clock } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export default function ProjectCard({ project, onSelect }) {
  const isFeatured = project.featured;
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateMotion = useMotionValue(0);

  // Soft spring interpolation for realistic magnetic delay
  const springConfig = { damping: 20, stiffness: 220, mass: 0.55 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const rotateSpring = useSpring(rotateMotion, { damping: 18, stiffness: 180 });

  const lastPos = useRef({ x: 0, y: 0, time: Date.now() });

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsTouchDevice(false);
    } else {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate subtle directional tilt based on horizontal velocity
    const now = Date.now();
    const dt = Math.max(1, now - lastPos.current.time);
    const dx = x - lastPos.current.x;
    const vx = dx / dt;
    const tilt = Math.max(-12, Math.min(12, vx * 7));

    lastPos.current = { x, y, time: now };

    mouseX.set(x);
    mouseY.set(y);
    rotateMotion.set(tilt);
  };

  const handleMouseEnter = (e) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    lastPos.current = { x, y, time: Date.now() };
    mouseX.set(x);
    mouseY.set(y);
    rotateMotion.set(0);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setIsHovered(false);
    rotateMotion.set(0);
  };

  return (
    <article
      ref={cardRef}
      className={`project-card glass-card ${isFeatured ? 'featured-card' : 'standard-card'} project-${project.id}`}
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      role="button"
      aria-label={`View project details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      {/* Webflow-inspired magnetic EXPLORE floating badge ONLY inside project card */}
      <AnimatePresence>
        {!isTouchDevice && isHovered && (
          <motion.div
            className="project-webflow-explore-badge"
            style={{
              x: cursorX,
              y: cursorY,
              rotate: rotateSpring,
            }}
            initial={{ scale: 0.68, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.65, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="explore-badge-content">
              <span className="explore-text">EXPLORE</span>
              <ArrowUpRight size={14} className="explore-icon" strokeWidth={2.4} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Header Strip: Project Number & Category */}
      <div className="project-card-header-bar">
        <div className="project-number-badge">
          <span className="number-label">NO.</span>
          <span className="number-val">{project.number}</span>
        </div>
        <div className="project-category-strip">
          <span>{project.category}</span>
        </div>
      </div>

      {/* Special Visual Headers for Projects */}
      {project.id === 'syrus' && (
        <div className="project-subtle-accent syrus-ai-accent">
          <div className="ai-nodes-indicator">
            <span className="ai-dot dot-1" />
            <span className="ai-dot dot-2" />
            <span className="ai-dot dot-3" />
            <span className="ai-beam" />
          </div>
          <span className="accent-caption">Neural Guidance Architecture</span>
        </div>
      )}

      {project.id === 'code-journey' && (
        <div className="project-subtle-accent code-syntax-accent">
          <span className="syntax-glyph">&#123; fn() &#125;</span>
          <span className="accent-caption">Interactive Logic Sandbox</span>
        </div>
      )}

      {project.id === 'smart-bus' && (
        <div className="project-subtle-accent transit-accent">
          <QrCode size={13} className="accent-icon" />
          <span className="accent-caption">Dynamic QR Verification &amp; MySQL</span>
        </div>
      )}

      {project.id === 'smart-study' && (
        <div className="project-subtle-accent study-accent">
          <Clock size={13} className="accent-icon" />
          <span className="accent-caption">Task Focus &amp; Exam Countdown</span>
        </div>
      )}

      {/* Image Preview Container (Taller, Visually Dominant) */}
      <div className="project-image-wrap">
        <img
          src={project.coverImage}
          alt={project.title}
          className="project-cover-image"
          loading="lazy"
        />
        <div className="project-image-overlay" />
      </div>

      {/* Project Card Content */}
      <div className="project-info-wrap">
        <div className="project-title-row">
          <h3 className="project-title-heading">{project.title}</h3>
          <span className="project-subtitle-tag">{project.subtitle}</span>
        </div>

        <p className="project-short-summary">
          {project.tagline || project.shortDesc}
        </p>

        {/* Tech Stack Pills */}
        <div className="project-tech-badges">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-badge">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="project-action-row" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="explore-project-action"
            onClick={() => onSelect(project)}
          >
            <span>Explore Project</span>
            <ArrowRight size={14} className="action-arrow" />
          </button>

          <div className="project-action-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-link"
                title="GitHub Repository"
              >
                <GithubIcon size={15} />
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-link"
                title="Live Demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
