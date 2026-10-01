import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2, Calendar } from 'lucide-react';
import { GithubIcon } from '../components/common/BrandIcons';
import { projectsData } from '../data/projects';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="container" style={{ padding: '8rem 1rem', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <Navbar />

      <main className="container" style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate(-1)}
          style={{ marginBottom: '2rem' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </button>

        <div className="project-detail-hero" style={{ marginBottom: '3rem' }}>
          <div className="modal-header-top" style={{ marginBottom: '0.75rem' }}>
            <span className="modal-category-tag">{project.subtitle}</span>
            <span className="modal-status-badge">{project.status}</span>
          </div>
          <h1 className="modal-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1rem' }}>
            {project.title}
          </h1>
          <p className="modal-tagline" style={{ maxWidth: '800px', fontSize: '1.15rem' }}>
            {project.tagline}
          </p>
        </div>

        {/* Media */}
        <div
          style={{
            borderRadius: 'var(--border-radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            marginBottom: '3rem',
            background: 'var(--bg-primary)'
          }}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            style={{ width: '100%', maxHeight: '550px', objectFit: 'contain', display: 'block' }}
          />
        </div>

        {/* Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 className="modal-subheading" style={{ marginBottom: '1rem' }}>Overview</h3>
            <p className="modal-text" style={{ marginBottom: '1.5rem' }}>{project.overview}</p>

            <h3 className="modal-subheading" style={{ marginBottom: '1rem' }}>Development Approach</h3>
            <p className="modal-text">{project.developmentApproach}</p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 className="modal-subheading" style={{ marginBottom: '1rem' }}>Key Features</h3>
            <ul className="modal-features-list" style={{ marginBottom: '2rem' }}>
              {project.keyFeatures?.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <CheckCircle2 size={16} className="feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="modal-subheading" style={{ marginBottom: '1rem' }}>Technologies</h3>
            <div className="modal-tech-tags">
              {project.tags?.map((t) => (
                <span key={t} className="modal-tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
