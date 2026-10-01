import React, { useState } from 'react';
import { 
  Cpu, 
  Code2, 
  Globe, 
  Database, 
  Layers, 
  Server, 
  Atom, 
  Terminal, 
  FileCode2, 
  Box, 
  Sparkles,
  Laptop
} from 'lucide-react';
import { skillsData } from '../../data/skills';
import { GithubIcon } from '../common/BrandIcons';
import './Skills.css';

const iconComponents = {
  Code2,
  FileCode2,
  Globe,
  Layers,
  Sparkles,
  Server,
  Atom,
  Terminal,
  Cpu,
  Database,
  Box,
  Github: GithubIcon,
  Laptop
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ALL');

  const categories = ['ALL', ...skillsData.map((s) => s.category)];

  const filteredCategories = activeTab === 'ALL'
    ? skillsData
    : skillsData.filter((cat) => cat.category === activeTab);

  return (
    <section id="skills" className="section-wrapper skills-section" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={13} />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="section-title">SKILLS &amp; CAPABILITIES</h2>
          <p className="section-subtitle">
            Core programming languages, full-stack web technologies, and database systems practiced through academic coursework and practical internships.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-nav">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skills-tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              <span>{cat}</span>
              {activeTab === cat && <span className="tab-dot-crimson" />}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grids */}
        <div className="skills-categories-wrapper">
          {filteredCategories.map((group) => (
            <div key={group.category} className="skills-category-group">
              <div className="category-header-strip">
                <span className="category-label">{group.category}</span>
                <span className="category-desc">{group.description}</span>
              </div>

              <div className="skills-cards-grid">
                {group.skills.map((skill) => {
                  const Icon = iconComponents[skill.icon] || Code2;
                  return (
                    <div key={skill.name} className="skill-card glass-card">
                      <div className="skill-card-top">
                        <div className="skill-icon-wrap">
                          <Icon size={20} className="skill-icon" />
                        </div>
                        <span className="skill-level-badge">{skill.level}</span>
                      </div>

                      <h4 className="skill-name">{skill.name}</h4>
                      <p className="skill-highlight">{skill.highlight}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
