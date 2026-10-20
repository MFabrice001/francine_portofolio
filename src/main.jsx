import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  Moon,
  Palette,
  Phone,
  Sun,
  X,
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    category: 'Visual identity · Concept study',
    title: 'Ikawa, made slowly',
    description: 'A warm, contemporary identity exploration for a neighborhood coffee label.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85',
    alt: 'Freshly brewed coffee and coffee beans on a table',
    className: 'project-coffee',
    mark: 'ikawa',
    note: 'COFFEE / KIGALI',
  },
  {
    number: '02',
    category: 'Interface design · Concept study',
    title: 'A clearer way to pay',
    description: 'A simple mobile payment flow designed around confidence and readability.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Person making a contactless payment at a counter',
    className: 'project-pay',
    mark: 'momo',
    note: 'PAYMENTS / MOBILE',
  },
  {
    number: '03',
    category: 'Campaign design · Concept study',
    title: 'A night in the city',
    description: 'An energetic event-poster direction built around contrast, rhythm and type.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85',
    alt: 'Concert audience under vibrant stage lighting',
    className: 'project-night',
    mark: 'CITY\nAFTER DARK',
    note: 'KIGALI / LIVE',
  },
];

const skillGroups = [
  {
    number: '01',
    icon: Palette,
    title: 'Design & creative',
    skills: ['Adobe Photoshop', 'Image editing & retouching', 'Layout & graphic design', 'Visual communication'],
  },
  {
    number: '02',
    icon: Code2,
    title: 'Web & technology',
    skills: ['HTML & CSS', 'JavaScript', 'PHP', 'Computer networks'],
  },
  {
    number: '03',
    icon: Layers3,
    title: 'Working together',
    skills: ['Clear communication', 'Problem solving', 'Teamwork', 'Microsoft Office'],
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
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
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
          <a href="#work" onClick={closeMenu}>Selected work <ArrowUpRight size={16} /></a>
          <a href="#about" onClick={closeMenu}>About <ArrowUpRight size={16} /></a>
          <a href="#skills" onClick={closeMenu}>Skills <ArrowUpRight size={16} /></a>
          <a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid site-container">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> Kigali, Rwanda <span className="eyebrow-separator">/</span> Available for opportunities</p>
              <h1 id="hero-title">Design that looks good.<br /><em>Works even better.</em></h1>
              <p className="hero-description">I’m Francine, a graphic designer and front-end developer in the making. I bring visual ideas to life with thoughtful design and the web technologies I’m learning every day.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
                <a className="text-link" href="#about">A little about me <ArrowRight size={16} /></a>
              </div>
              <div className="hero-meta"><span>VISUAL DESIGN</span><span>+</span><span>FRONT-END</span><span>+</span><span>NETWORK SYSTEMS</span></div>
            </div>
            <div className="hero-art" aria-label="Graphic design composition featuring Francine's initials">
              <div className="art-topline"><span>FN / PORTFOLIO</span><span>2026</span></div>
              <div className="art-sun" aria-hidden="true" />
              <div className="art-ribbon art-ribbon-one" aria-hidden="true" />
              <div className="art-ribbon art-ribbon-two" aria-hidden="true" />
              <span className="art-initials">F<span>N</span></span>
              <span className="art-caption">MAKE IT<br />MEAN SOMETHING</span>
              <span className="art-index">DESIGN / 01</span>
              <span className="art-ring" aria-hidden="true" />
              <div className="art-bottomline"><span>CREATIVE PRACTICE</span><span>KIGALI, RWANDA</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><span className="scroll-cue-line" /></a>
        </section>

        <section className="capability-strip" aria-label="Core capabilities">
          <div className="site-container capability-inner">
            <span className="strip-label">MY PRACTICE</span>
            <div className="strip-item"><span className="strip-dot" /> Visual design</div>
            <div className="strip-item"><span className="strip-dot" /> Front-end development</div>
            <div className="strip-item"><span className="strip-dot" /> Digital experiences</div>
            <div className="strip-item"><span className="strip-dot" /> Network systems</div>
          </div>
        </section>

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="site-container">
            <div className="section-heading work-heading">
              <div><p className="eyebrow section-eyebrow">A FEW THINGS I’VE BEEN EXPLORING</p><h2 id="work-title">Selected <em>work.</em></h2></div>
              <p className="section-intro">A growing collection of visual and digital explorations. These are concept studies, made to learn, experiment and bring an idea to life.</p>
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
                    <div className="project-topline"><span>{project.number} <i>/</i> {project.category}</span><span className="concept-label">CONCEPT</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="work-note"><span className="work-note-line" /> More work takes shape with every new idea.</p>
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="site-container about-grid">
            <div className="about-quote">
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>Good design is more than what you see. It’s how clearly it helps someone get where they want to go.</blockquote>
              <p className="quote-credit"><span /> HOW I THINK ABOUT DESIGN</p>
            </div>
            <div className="about-copy">
              <p className="eyebrow section-eyebrow">THE PERSON BEHIND THE PIXELS</p>
              <h2 id="about-title">Curious by nature.<br /><em>Creative by choice.</em></h2>
              <p>I’m pursuing a Bachelor’s degree in Network and Communication Systems at the Adventist University of Central Africa. Alongside my studies, I’m building skills in graphic design and front-end development.</p>
              <p>From shaping an image in Photoshop to bringing a page to life with HTML, CSS and JavaScript, I enjoy the moment an idea becomes something people can actually use.</p>
              <div className="about-facts">
                <div><span className="fact-label">STUDYING</span><span>Network & Communication Systems</span></div>
                <div><span className="fact-label">BASED IN</span><span>Kigali, Rwanda</span></div>
                <div><span className="fact-label">SPEAK</span><span>English & Kinyarwanda</span></div>
              </div>
              <a className="text-link about-link" href="#contact">Let’s connect <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section" aria-labelledby="skills-title">
          <div className="site-container">
            <div className="section-heading skills-heading">
              <div><p className="eyebrow section-eyebrow">WHAT I BRING</p><h2 id="skills-title">Tools, skills <em>& curiosity.</em></h2></div>
              <p className="section-intro">A multidisciplinary foundation, with plenty more to discover.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map(({ number, icon: Icon, title, skills }) => (
                <article className="skill-column" key={number}>
                  <div className="skill-top"><span>{number}</span><Icon size={19} strokeWidth={1.6} /></div>
                  <h3>{title}</h3>
                  <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="additional-skills"><span>ALSO FAMILIAR WITH</span><p>Basic e-commerce platforms <i>·</i> EBM invoicing <i>·</i> Computer maintenance <i>·</i> Cybersecurity fundamentals</p></div>
            <div className="education-row">
              <div><p className="eyebrow section-eyebrow">LEARNING & GROWING</p><h3>Education</h3></div>
              <div className="education-item"><span className="education-year">CURRENT</span><div><h4>Bachelor’s Degree, Network and Communication Systems</h4><p>Adventist University of Central Africa (AUCA)</p></div></div>
              <div className="education-item"><span className="education-year">2017—2019</span><div><h4>Advanced Level Certificate</h4><p>Ecole Technique St Kizito Save</p></div></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="site-container">
            <div className="contact-panel">
              <div className="contact-decoration" aria-hidden="true"><span>LET’S</span><span>MAKE</span><span>IT.</span></div>
              <div className="contact-copy">
                <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
                <h2 id="contact-title">Let’s make<br /><em>something matter.</em></h2>
                <p>I’m open to graphic design and front-end opportunities. Tell me what you’re working on.</p>
                <a className="button button-light" href="mailto:niyonsengafrancine9@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
              </div>
              <div className="contact-details">
                <a href="mailto:niyonsengafrancine9@gmail.com"><Mail size={17} /> niyonsengafrancine9@gmail.com</a>
                <a href="tel:+250786221185"><Phone size={17} /> 078 622 1185</a>
                <a href="tel:+250724398333"><Phone size={17} /> 072 439 8333</a>
                <span>Kigarama Sector, Kicukiro District<br />Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <div className="footer-profile">
            <a className="footer-name" href="#home">Francine Niyonsenga</a>
            <p className="footer-role">Graphic Designer · Front-End Developer</p>
            <p className="footer-description">Making visual ideas clearer, more useful and ready for the web.</p>
          </div>
          <nav className="footer-column" aria-label="Footer navigation">
            <p className="footer-heading">SITEMAP</p>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#work">Selected work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills & education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="footer-column">
            <p className="footer-heading">CONNECT</p>
            <ul className="footer-links footer-connect">
              <li><a href="mailto:niyonsengafrancine9@gmail.com"><Mail size={14} /> Email Francine</a></li>
              <li><a href="tel:+250786221185"><Phone size={14} /> 078 622 1185</a></li>
              <li><a href="tel:+250724398333"><Phone size={14} /> 072 439 8333</a></li>
              <li className="footer-location">Kigali, Rwanda</li>
            </ul>
          </div>
          <div className="footer-divider">
            <p>© 2026 Francine Niyonsenga. Designed with intention. Built with care.</p>
            <p>Graphic Designer · Kigali, Rwanda</p>
          </div>
        </div>
      </footer>
      <a className="floating-top" href="#home" aria-label="Back to top"><ArrowUp size={17} /></a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);