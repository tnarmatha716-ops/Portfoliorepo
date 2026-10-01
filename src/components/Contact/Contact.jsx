import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from '../common/BrandIcons';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'tnarmatha716@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/narmatha0707/?isSelfProfile=false';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper contact-section" aria-label="Contact">
      <div className="container contact-container">
        <div className="contact-box glass-card">
          <div className="section-tag">
            <MessageSquare size={13} />
            <span>COMMUNICATION</span>
          </div>

          <h2 className="contact-heading">LET’S CONNECT</h2>

          <p className="contact-invitation">
            Have an idea, internship opportunity, or project in mind? Feel free to get in touch. I am always open to exploring innovative software collaborations.
          </p>

          {/* Only Two Compact Contact Options */}
          <div className="compact-contact-options">
            {/* Option 1: Email */}
            <div className="compact-contact-item">
              <a
                href={`mailto:${email}`}
                className="compact-link-btn"
                title="Send Email"
              >
                <div className="compact-icon-wrap">
                  <Mail size={18} />
                </div>
                <div className="compact-text-wrap">
                  <span className="compact-label">EMAIL</span>
                  <span className="compact-val">{email}</span>
                </div>
              </a>
              <button
                type="button"
                className="compact-copy-btn"
                onClick={handleCopyEmail}
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copied ? <Check size={15} className="text-crimson" /> : <Copy size={15} />}
              </button>
            </div>

            {/* Option 2: LinkedIn */}
            <div className="compact-contact-item">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="compact-link-btn"
                title="View LinkedIn Profile"
              >
                <div className="compact-icon-wrap">
                  <LinkedinIcon size={18} />
                </div>
                <div className="compact-text-wrap">
                  <span className="compact-label">LINKEDIN</span>
                  <span className="compact-val">linkedin.com/in/narmatha0707</span>
                </div>
                <ExternalLink size={14} className="compact-ext-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
