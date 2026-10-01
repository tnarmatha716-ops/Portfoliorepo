import React, { useState } from 'react';
import { FolderGit2, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-wrapper projects-section" aria-label="Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={13} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <p className="section-subtitle">
            Engineered software systems focused on intelligent learning assistance, programming education, transit efficiency, and academic productivity.
          </p>
        </div>

        {/* Featured Showcase (Prominent row for Syrus & Code Journey) */}
        <div className="projects-prominent-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Supporting Projects (Smart Bus & Smart Study) */}
        <div className="projects-secondary-grid">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
