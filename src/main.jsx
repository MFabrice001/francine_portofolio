import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Code2,
  ExternalLink,
  Globe,
  Layers3,
  Mail,
  Menu,
  Moon,
  Network,
  Palette,
  Phone,
  Sun,
  X,
} from 'lucide-react';
import './styles.css';

import meImage from './images/Me.png';
import gd1Image from './images/GD1.jpeg';
import gd2Image from './images/GD2.jpeg';
import gd3Image from './images/GD3.jpeg';
import gd4Image from './images/GD4.jpeg';

const projects = [
  {
    number: '01',
    category: 'Graphic design · Restaurant flyer',
    title: 'FA Bar & Restaurant',
    description:
      'A vibrant promotional flyer designed in Adobe Photoshop for a local restaurant, featuring menu highlights, contact details and strong visual hierarchy.',
    image: gd1Image,
    alt: 'FA Bar & Restaurant promotional flyer with menu and food images',
    className: 'project-gd1',
    mark: 'FA\nBAR',
    note: 'GRAPHIC DESIGN / FLYER',
  },
  {
    number: '02',
    category: 'Graphic design · Birthday card',
    title: 'Birthday celebration card',
    description:
      'A decorative birthday card created with photo editing and compositing techniques — blending portrait photography with ornamental frames and balloon elements.',
    image: gd2Image,
    alt: 'Decorative birthday card with golden frame and balloons',
    className: 'project-gd2',
    mark: 'CELE\nBRATE',
    note: 'PHOTO EDITING / CARD',
  },
  {
    number: '03',
    category: 'Graphic design · Event poster',
    title: 'Happy Birthday poster',
    description:
      'A bold typographic event poster combining strong layout structure, layered photography and hand-crafted lettering to create a lasting visual impact.',
    image: gd3Image,
    alt: 'Birthday poster with bold typography and portrait photography',
    className: 'project-gd3',
    mark: 'BDAY',
    note: 'POSTER / TYPOGRAPHY',
  },
  {
    number: '04',
    category: 'Graphic design · Business card',
    title: 'FA Electric Solutions',
    description:
      'A professional business card design for FA Electric Solutions, balancing brand identity with technical credibility — featuring logo, contact details and a clear visual structure.',
    image: gd4Image,
    alt: 'FA Electric Solutions business card with logo and contact information',
    className: 'project-gd4',
    mark: 'FA\nELEC',
    note: 'BRAND / BUSINESS CARD',
  },
];

const skillGroups = [
  {
    number: '01',
    icon: Palette,
    title: 'Design & creative',
    skills: [
      'Adobe Photoshop',
      'Image editing & retouching',
      'Layout & graphic design',
      'Visual communication',
      'Attention to detail',
    ],
  },
  {
    number: '02',
    icon: Code2,
    title: 'Front-end & web',
    skills: ['HTML & CSS', 'JavaScript', 'PHP', 'Responsive design', 'Web development'],
  },
  {
    number: '03',
    icon: Network,
    title: 'Networks & systems',
    skills: [
      'Computer networks',
      'Network communication systems',
      'Computer maintenance',
      'Cybersecurity fundamentals',
    ],
  },
  {
    number: '04',
    icon: Globe,
    title: 'Business & digital',
    skills: [
      'E-commerce platforms',
      'Alibaba.com / IndiaMART',
      'EBM invoicing basics',
      'Microsoft Office',
    ],
  },
  {
    number: '05',
    icon: Layers3,
    title: 'Professional skills',
    skills: ['Clear communication', 'Problem-solving', 'Teamwork', 'English & Kinyarwanda'],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      setScrolled(window.scrollY > 24);
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = lightTheme ? 'light' : 'dark';
  }, [lightTheme]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} aria-hidden="true" />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-container header-inner">
          <a className="brand" href="#home" aria-label="Francine Niyonsenga, home" onClick={closeMenu}>
            <span className="brand-mark">FN<span>.</span></span>
            <span className="brand-divider" />
            <span className="brand-name">Francine Niyonsenga</span>
          </a>
          <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#certificates" onClick={closeMenu}>Certificates</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <div className="header-actions">
            <button className="icon-button theme-button" type="button" aria-label={`Switch to ${lightTheme ? 'dark' : 'light'} theme`} onClick={() => setLightTheme(!lightTheme)}>
              {lightTheme ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button className="icon-button menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'mobile-nav-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
          <a href="#work" onClick={closeMenu}>Work <ArrowUpRight size={16} /></a>
          <a href="#about" onClick={closeMenu}>About <ArrowUpRight size={16} /></a>
          <a href="#skills" onClick={closeMenu}>Skills <ArrowUpRight size={16} /></a>
          <a href="#certificates" onClick={closeMenu}>Certificates <ArrowUpRight size={16} /></a>
          <a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="home">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid site-container">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> Kigali, Rwanda <span className="eyebrow-separator">/</span> Available for opportunities</p>
              <h1 id="hero-title">Design that looks good.<br /><em>Works even better.</em></h1>
              <p className="hero-description">
                I'm Francine — a graphic designer, Full stack developer and a Network Enginner pursuing a Bachelor's degree in Network and Communication Systems at AUCA. I combine Adobe Photoshop skills with web technologies to bring visual ideas to life.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
                <a className="text-link" href="#about">A little about me <ArrowRight size={16} /></a>
              </div>
              <div className="hero-meta">
                <span>GRAPHIC DESIGN</span><span>+</span>
                <span>FRONT-END</span><span>+</span>
                <span>NETWORKING</span><span>+</span>
                <span>CYBERSECURITY</span>
              </div>
            </div>

            <div className="hero-image-container" aria-label="Portrait of Francine Niyonsenga">
              <img src={meImage} alt="Francine Niyonsenga" className="hero-rounded-image" />
              <div className="hero-image-caption">Kigali, Rwanda · 2026</div>
            </div>

          </div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><span className="scroll-cue-line" /></a>
        </section>

        {/* CAPABILITY STRIP */}
        <section className="capability-strip" aria-label="Core capabilities">
          <div className="site-container capability-inner">
            <span className="strip-label">MY PRACTICE</span>
            <div className="strip-item"><span className="strip-dot" /> Visual design &amp; Photoshop</div>
            <div className="strip-item"><span className="strip-dot" /> Front-end development</div>
            <div className="strip-item"><span className="strip-dot" /> Network &amp; communication systems</div>
            <div className="strip-item"><span className="strip-dot" /> Cybersecurity fundamentals</div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="site-container">
            <div className="section-heading work-heading">
              <div>
                <p className="eyebrow section-eyebrow">MY GRAPHIC DESIGN WORK</p>
                <h2 id="work-title">Selected <em>work.</em></h2>
              </div>
              <p className="section-intro">Real design work — restaurant flyers, posters, business cards and photo composites — created using Adobe Photoshop.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className={`project-image ${project.className}`}>
                    <img src={project.image} alt={project.alt} loading="lazy" />
                    <div className="project-image-shade" />
                    <span className="project-art-mark">{project.mark.split('\n').map((line) => <span key={line}>{line}</span>)}</span>
                    <span className="project-art-note">{project.note}</span>
                    <span className="project-open" aria-hidden="true"><ArrowUpRight size={19} /></span>
                  </div>
                  <div className="project-info">
                    <div className="project-topline"><span>{project.number} <i>/</i> {project.category}</span><span className="concept-label">REAL WORK</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="work-note"><span className="work-note-line" /> More work takes shape with every new idea.</p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="site-container about-grid">
            <div className="about-photo-col">
              <div className="about-photo-frame">
                <img src={meImage} alt="Francine Niyonsenga — graphic designer and front-end developer" className="about-photo" />
                <div className="about-photo-badge">
                  <span className="badge-dot" />
                  <span>Open to opportunities</span>
                </div>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow section-eyebrow">THE PERSON BEHIND THE PIXELS</p>
              <h2 id="about-title">Curious by nature.<br /><em>Creative by choice.</em></h2>
              <p>
                I'm Francine Niyonsenga — a creative and detail-oriented student pursuing a Bachelor's degree in <strong>Network and Communication Systems</strong> at the Adventist University of Central Africa (AUCA), based in Kigali, Rwanda.
              </p>
              <p>
                I combine Adobe Photoshop skills with web technologies (HTML/CSS, JavaScript, PHP) to produce visually appealing, user-friendly designs. I bring a strong customer focus and a security-aware mindset to every project.
              </p>
              <blockquote className="about-blockquote">
                "Creative and detail-oriented, I believe good design is more than what you see — it's how clearly it helps someone get where they want to go."
              </blockquote>
              <div className="about-facts">
                <div><span className="fact-label">STUDYING</span><span>Network &amp; Communication Systems</span></div>
                <div><span className="fact-label">UNIVERSITY</span><span>AUCA — Adventist University of Central Africa</span></div>
                <div><span className="fact-label">BASED IN</span><span>Kigarama Sector, Kicukiro, Kigali</span></div>
                <div><span className="fact-label">SPEAK</span><span>English (fluent) &amp; Kinyarwanda (native)</span></div>
              </div>
              <a className="text-link about-link" href="#contact">Let's connect <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section" aria-labelledby="skills-title">
          <div className="site-container">
            <div className="section-heading skills-heading">
              <div><p className="eyebrow section-eyebrow">WHAT I BRING</p><h2 id="skills-title">Tools, skills <em>&amp; curiosity.</em></h2></div>
              <p className="section-intro">A multidisciplinary foundation spanning design, development, networking and business.</p>
            </div>
            <div className="skills-grid skills-grid-wide">
              {skillGroups.map(({ number, icon: Icon, title, skills }) => (
                <article className="skill-column" key={number}>
                  <div className="skill-top"><span>{number}</span><Icon size={19} strokeWidth={1.6} /></div>
                  <h3>{title}</h3>
                  <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              ))}
            </div>

            {/* Education */}
            <div className="education-row">
              <div><p className="eyebrow section-eyebrow">LEARNING &amp; GROWING</p><h3>Education</h3></div>
              <div className="education-item">
                <span className="education-year">CURRENT</span>
                <div>
                  <h4>Bachelor's Degree in Network and Communication Systems</h4>
                  <p>Adventist University of Central Africa (AUCA) — Kigali, Rwanda</p>
                </div>
              </div>
              <div className="education-item">
                <span className="education-year">2017—2019</span>
                <div>
                  <h4>Advanced Level Certificate (A' Level)</h4>
                  <p>Ecole Technique St Kizito Save</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="section certificates-section" aria-labelledby="certificates-title">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-eyebrow">CREDENTIALS &amp; ACHIEVEMENTS</p>
                <h2 id="certificates-title">Certificates <em>&amp; awards.</em></h2>
              </div>
              <p className="section-intro">A growing record of learning, validated by real courses and programmes.</p>
            </div>
            <div className="certificates-panel">
              <div className="certificates-icon-col" aria-hidden="true">
                <Award size={64} strokeWidth={1.2} />
              </div>
              <div className="certificates-copy">
                <p>
                  I collect certificates as evidence of my continuous learning journey — spanning graphic design, web technologies, computer networks, and cybersecurity.
                </p>
                <a
                  className="button button-primary cert-button"
                  href="https://drive.google.com/drive/folders/16dwlO23p7uZXnxt78vNMuVUrz9xOLMy_?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="view-certificates-btn"
                >
                  View all certificates <ExternalLink size={16} />
                </a>
                <p className="cert-note">Opens in Google Drive — all certificates are publicly viewable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="site-container">
            <div className="contact-panel">
              <div className="contact-decoration" aria-hidden="true"><span>LET'S</span><span>MAKE</span><span>IT.</span></div>
              <div className="contact-copy">
                <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
                <h2 id="contact-title">Let's make<br /><em>something matter.</em></h2>
                <p>I'm open to graphic design and front-end opportunities. Tell me what you're working on.</p>
                <a className="button button-light" href="mailto:niyonsengafrancine9@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
              </div>
              <div className="contact-details">
                <a href="mailto:niyonsengafrancine9@gmail.com"><Mail size={17} /> niyonsengafrancine9@gmail.com</a>
                <a href="tel:+250786221185"><Phone size={17} /> 078 622 1185</a>
                <a href="tel:+250724398333"><Phone size={17} /> 072 439 8333</a>
                <span>Kigarama Sector, Kicukiro District<br />Kigali, Rwanda</span>
                <div className="referees-block">
                  <span className="referees-label">REFEREES</span>
                  <p>NIRINGIYIMANA Eugene &mdash; 079 198 2638</p>
                  <p>NYIRAGASHIKAZI Pelagie &mdash; 078 909 6300</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <div className="footer-profile">
            <a className="footer-name" href="#home">Francine Niyonsenga</a>
            <p className="footer-role">Graphic Designer · Front-End Developer · Network Systems Student</p>
            <p className="footer-description">Making visual ideas clearer, more useful and ready for the web.</p>
          </div>
          <nav className="footer-column" aria-label="Footer navigation">
            <p className="footer-heading">SITEMAP</p>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#work">Selected work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills &amp; education</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="footer-column">
            <p className="footer-heading">CONNECT</p>
            <ul className="footer-links footer-connect">
              <li><a href="mailto:niyonsengafrancine9@gmail.com"><Mail size={14} /> Email Francine</a></li>
              <li><a href="tel:+250786221185"><Phone size={14} /> 078 622 1185</a></li>
              <li><a href="tel:+250724398333"><Phone size={14} /> 072 439 8333</a></li>
              <li>
                <a href="https://drive.google.com/drive/folders/16dwlO23p7uZXnxt78vNMuVUrz9xOLMy_?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Award size={14} /> View certificates
                </a>
              </li>
              <li className="footer-location">Kigali, Rwanda</li>
            </ul>
          </div>
          <div className="footer-divider">
            <p>© 2026 Francine Niyonsenga. Designed with intention. Built with care.</p>
            <p>Graphic Designer · Front-End Developer · Kigali, Rwanda</p>
          </div>
        </div>
      </footer>
      <a className="floating-top" href="#home" aria-label="Back to top"><ArrowUp size={17} /></a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);