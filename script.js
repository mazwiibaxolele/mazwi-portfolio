'use strict';

/* ─────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 4,
    title: 'StudyPulse Timer (Vibecoded)',
    summary: 'A premium, AI-integrated study timer built with Antigravity. Designed to provide a valuable, intelligent study session.',
    tools: ['Antigravity', 'AI Integration', 'Vibecoding', 'UI/UX'],
    problem: 'Students usually measure their productivity by "hours spent studying" instead of actual effectiveness. They use a bunch of disconnected tools: a timer app for focus, a spreadsheet for grades, and a notebook for planning. As a result, they study blindly, unable to see if their 5 hours of "re-reading notes" actually translated into a better test score than 2 hours of "active recall." This leads to burnout, wasted time, and lower-than-expected marks.',
    approach: 'StudyPulse bridges the gap between effort and results. We built a single, unified platform that combines three core pillars: Focus & Execution (smart Pomodoro timer), Grade Tracking (robust marks dashboard), and AI-Driven Insights (analyzes habits and tells them exactly what is working and what isn\'t).',
    outcome: 'The Aim: To transform studying from a blind grind into a data-driven, highly optimized process so students can study less, score higher, and maintain a healthy balance. As someone who wants to be a data scientist in future, the better way to use data is now.',
    github: 'https://github.com/mazwiibaxolele/StudyPulse.git',
    appLink: 'https://study-pulse-liard.vercel.app/auth',
    image: 'images/proj-studypulse.png',
    tag: 'Full-stack app',
    result: 'Live AI study app',
  },
  {
    id: 1,
    title: 'Customer Retention & Churn Analysis',
    summary: 'Analysed 7,032 telecom customers to identify churn patterns. Found a 26.58% overall churn rate, 42.71% churn among month-to-month contract customers, and 47.68% of new customers leaving within year one.',
    tools: ['Python', 'pandas', 'matplotlib', 'seaborn', 'MySQL', 'Power BI'],
    problem: 'A telecommunications company was experiencing elevated customer churn without a clear understanding of which customer segments were most at risk or why they were leaving. Decisions around retention were being made without data support.',
    approach: 'Pulled and cleaned a dataset of 7,032 customers using pandas. Conducted exploratory data analysis to segment customers by contract type, tenure, and service usage. Built visualisations in matplotlib and seaborn, and modelled churn predictors. Imported into MySQL for structured querying and built a Power BI dashboard for business reporting.',
    outcome: 'Identified a 26.58% overall churn rate. Discovered that 42.71% of month-to-month contract customers churned, and that 47.68% of new customers left within their first year, pointing to an onboarding and early-retention problem.',
    github: 'https://github.com/mazwiibaxolele/Telco-Customer-Churn-Analysis',
    image: 'images/proj-telco.png',
    tag: 'Data analysis',
    result: '26.58% churn identified',
  },
  {
    id: 2,
    title: 'Marketing Funnel Conversion Analysis',
    summary: 'Analysed a bank marketing campaign to identify where in the funnel leads were being lost and which channels converted best.',
    tools: ['MySQL', 'Power BI', 'Excel'],
    problem: 'A bank\'s marketing team was running campaigns without insight into where leads were dropping off in the funnel. Budget was being spent across channels without knowing which ones drove actual conversions.',
    approach: 'Analysed campaign data using MySQL to segment leads by stage, channel, and outcome. Built conversion rate calculations at each funnel stage. Designed a Power BI dashboard to give the marketing team a live view of performance by channel and campaign type.',
    outcome: 'Identified the funnel stages with highest drop-off rates and the specific channels that produced the best conversion rates, enabling data-informed budget reallocation.',
    github: 'https://github.com/mazwiibaxolele/Bank-Marketing-Campaign-Analysis',
    image: 'images/proj-bank.png',
    tag: 'Data analysis',
    result: '88.73% funnel drop-off found',
  },
  {
    id: 3,
    title: 'Business Sales Analytics Dashboard',
    summary: 'Built an interactive Power BI dashboard revealing revenue and profit trends across products, regions, and customer segments for a retail business.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Excel'],
    problem: 'A retail business lacked a consolidated view of its sales performance. Revenue and profit data existed in spreadsheets but weren\'t structured for decision-making.',
    approach: 'Ingested and transformed the raw Excel data using Power Query. Built a relational data model and wrote DAX measures for revenue, profit margin, YoY growth, and segment performance. Designed an interactive dashboard with slicers for region, product, and time period.',
    outcome: 'Delivered a single-view dashboard that revealed which product categories and regions were underperforming and where the highest margins were being generated.',
    github: 'https://github.com/mazwiibaxolele/Sales-Performance-Analytics',
    image: 'images/proj-sales.png',
    tag: 'BI dashboard',
    result: '$2.30M sales analysed',
  }
];

const EXPERIENCES = [
  {
    role: 'Mentor',
    org: 'WITS School of Construction Economics and Management',
    period: 'Apr 2026 - Present',
    desc: 'Mentoring students within the Construction Economics and Management faculty at Wits, supporting their academic development and professional preparation.',
    skills: ['Mentoring', 'Academic Support', 'Construction Economics']
  },
  {
    role: 'Quantities and Specification || Tutor',
    org: 'ASAQS',
    period: 'Feb 2026 - Jun 2026',
    desc: 'Tutoring students in quantities and specification as part of the ASAQS programme, helping candidates develop technical proficiency in core surveying competencies.',
    skills: ['Quantity Surveying', 'Specification', 'Teaching']
  },
  {
    role: 'Subcom (Treasurer) | Wits',
    org: 'The Chartered Institute of Building (CIOB)',
    period: 'Feb 2025 - Nov 2025',
    desc: 'Served as Treasurer of the CIOB Africa Novus Subcommittee at Wits, responsible for managing finances, tracking expenditure, and supporting financial planning of student chapter activities. Developed financial accountability and organisational discipline.',
    skills: ['Budget Tracking', 'Financial Reporting', 'Leadership']
  },
  {
    role: 'Member',
    org: 'The Chartered Institute of Building (CIOB)',
    period: 'Feb 2025 - Oct 2025',
    desc: 'As part of being the CIOB Africa Novus Subcommittee Treasurer at Wits, I got the opportunity to be a CIOB member.',
    skills: ['Professional Institution', 'Networking']
  },
  {
    role: 'Soup Kitchen (Volunteer-WCCO)',
    org: 'University of the Witwatersrand',
    period: 'Feb 2025 - Oct 2025',
    desc: 'Volunteered with the Wits Community Citizenship Organisation, contributing to food preparation and distribution at a campus soup kitchen. Developed teamwork, reliability, and a practical commitment to community service.',
    skills: ['Community Service', 'Teamwork', 'Reliability']
  },
  {
    role: 'Marketing Team (EBESC-subcomm)',
    org: 'University of the Witwatersrand',
    period: 'Feb 2025 - Oct 2025',
    desc: 'Contributed to the marketing and communications work of the Engineering and Built Environment Student Council subcommittee. Supported content creation, event promotion, and outreach activities.',
    skills: ['Marketing', 'Communications', 'Content Creation']
  },
  {
    role: 'Mentor (CEM)',
    org: 'WITS School of Construction Economics and Management',
    period: 'Feb 2025 - Oct 2025',
    desc: 'Mentoring students within the faculty, supporting their academic development.',
    skills: ['Mentoring', 'Academic Support']
  },
  {
    role: 'Student Intern',
    org: 'AZRA DEVELOPMENTS',
    period: 'Jun 2025 - Jul 2025',
    desc: 'Supported on-site delivery of roadworks and retaining walls. Conducted manual and GNSS-based surveying, assisted with trench preparation and traffic accommodation. Documented construction process on LinkedIn.',
    skills: ['Surveying', 'Trench Prep', 'Traffic Accommodation']
  },
  {
    role: 'Student Intern',
    org: 'Priotech Projects',
    period: 'Jun 2024',
    desc: 'Assisted with project coordination, progress tracking, and reporting. Supported preparation of documentation and daily summaries. Gained exposure to planning, risk considerations, and decision-making processes.',
    skills: ['Project Coordination', 'Progress Tracking', 'Documentation']
  }
];

const CERTIFICATIONS = [
  {
    title: 'Data Analyst Associate',
    issuer: 'DataCamp',
    credentialId: 'DAA0017949742800',
    link: 'https://www.datacamp.com/certificate/DAA0017949742800'
  },
  {
    title: 'Data Engineer Associate',
    issuer: 'DataCamp',
    credentialId: 'DEA0011274287496',
    link: 'https://www.datacamp.com/certificate/DEA0011274287496'
  },
  {
    title: 'IBM Data Analyst Professional',
    issuer: 'IBM',
    credentialId: '8QBWSDZZOGDQ',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/8QBWSDZZOGDQ'
  },
  {
    title: 'Microsoft Certifications (SQL Foundations)',
    issuer: 'Microsoft',
    credentialId: 'Y0UXIBLA0J49',
    link: 'https://www.coursera.org/account/accomplishments/verify/Y0UXIBLA0J49'
  },
  {
    title: 'The introduction to and effective use of the WinQS Quantity Surveying System',
    issuer: 'ACE Solutions (WinQS)',
    credentialId: '6810ef1004de31ea31061ec7',
    link: null
  }
];

/* ─────────────────────────────────────────────────────
   UTILITY
───────────────────────────────────────────────────── */
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function createEl(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'className') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k === 'style') el.style.cssText = v;
    else el.setAttribute(k, v);
  });
  children.forEach(c => { if (c) el.append(typeof c === 'string' ? document.createTextNode(c) : c); });
  return el;
}

function createSkillTags(skills, className = 'tl-skills') {
  const wrap = createEl('div', { className });
  skills.forEach(skill => wrap.appendChild(createEl('span', { className: 'tl-skill' }, skill)));
  return wrap;
}

/* ─────────────────────────────────────────────────────
   THEME TOGGLE
───────────────────────────────────────────────────── */
function initTheme() {
  const html = document.documentElement;
  const btn  = qs('#theme-toggle');
  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  html.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });
}

/* ─────────────────────────────────────────────────────
   SCROLL REVEAL & TYPEWRITER
───────────────────────────────────────────────────── */
let revealObserver;
function initReveal() {
  if (revealObserver) revealObserver.disconnect();
  
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  qsa('.reveal').forEach(el => revealObserver.observe(el));
}

function initTypewriter() {
  const target = document.getElementById('typewriter-target');
  if (!target) {
    initReveal();
    return;
  }

  const text = "hello, Baxolele here";
  let i = 0;

  // Respect reduced-motion: show everything instantly, no typing animation
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    target.textContent = text;
    qsa('.reveal-after-type').forEach(el => el.classList.add('is-visible'));
    initReveal();
    return;
  }

  function typeWriter() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // Typing speed
    } else {
      // Done typing, reveal the rest of the page!
      setTimeout(() => {
        document.querySelectorAll('.reveal-after-type').forEach(el => {
          el.classList.add('is-visible');
        });
        // Start observing scroll reveals after typing completes
        initReveal(); 
      }, 200);
    }
  }
  
  // Start typing after a tiny delay
  setTimeout(typeWriter, 300);
}

/* ─────────────────────────────────────────────────────
   NAVIGATION (TABBED UI)
───────────────────────────────────────────────────── */
function initNavigation() {
  const sections = qsa('section[id]');
  const sectionIds = sections.map(s => s.id);

  // Deep-link support: honour a URL hash like #projects on first load
  const initial = location.hash.slice(1);
  activateSection(sectionIds.includes(initial) ? initial : 'home');

  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(id);

    if (targetSection && targetSection.tagName.toLowerCase() === 'section') {
      e.preventDefault();
      activateSection(id);
      history.replaceState(null, '', id === 'home' ? location.pathname : `#${id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  function activateSection(id) {
    sections.forEach(s => s.classList.toggle('active', s.id === id));
    
    qsa('a[href^="#"]').forEach(l => {
      const linkId = l.getAttribute('href').replace('#', '');
      if (document.getElementById(linkId) && document.getElementById(linkId).tagName.toLowerCase() === 'section') {
        l.classList.toggle('active', linkId === id);
      }
    });

    const activeSection = qs(`#${id}`);
    if (activeSection) {
      // Tab-switched content: reveal reliably with a subtle stagger.
      // (The IntersectionObserver can't re-fire for elements it already
      // tracked while the section was display:none, so drive it directly.)
      qsa('.reveal', activeSection).forEach((el, i) => {
        if (revealObserver) revealObserver.unobserve(el);
        el.classList.remove('is-visible');
        requestAnimationFrame(() => {
          setTimeout(() => el.classList.add('is-visible'), Math.min(i, 8) * 55);
        });
      });
      // reveal-after-type items are always shown once the section is active
      qsa('.reveal-after-type', activeSection).forEach(el => {
        el.classList.add('is-visible');
      });
    }
  }
}

/* ─────────────────────────────────────────────────────
   RENDER: TIMELINE
───────────────────────────────────────────────────── */
function renderTimeline() {
  const container = qs('#experience-timeline');
  if(!container) return;
  
  container.innerHTML = '';
  EXPERIENCES.forEach(exp => {
    const el = createEl('div', { className: 'tl-item reveal' },
      createEl('div', { className: 'tl-left' },
        createEl('div', { className: 'tl-date' }, exp.period)
      ),
      createEl('div', { className: 'tl-divider' },
        createEl('div', { className: 'tl-dot' })
      ),
      createEl('div', { className: 'tl-right' },
        createEl('div', { className: 'tl-company' }, exp.org),
        createEl('div', { className: 'tl-role' }, exp.role),
        createEl('div', { className: 'tl-desc' }, exp.desc),
        createSkillTags(exp.skills)
      )
    );
    container.appendChild(el);
  });
}

/* ─────────────────────────────────────────────────────
   INTERACTIVE FOLDER GALLERY (Home)
───────────────────────────────────────────────────── */
function initFolderGallery() {
  const gallery = qs('#folder-gallery');
  if (!gallery) return;

  const scene  = qs('.fg-scene', gallery);
  const cover  = qs('#fg-cover');
  const photos = qsa('.fg-photo', gallery);
  const mid = (photos.length - 1) / 2;
  let isOpen = false;

  function layout() {
    const hovered = gallery.classList.contains('hover');
    const photoW = photos[0].offsetWidth || 150;
    const spread = Math.max(40, Math.min(130, (scene.clientWidth - photoW) / (photos.length - 1) * 0.55));

    photos.forEach((photo, i) => {
      const o = i - mid;
      let x, y, rot, sc;
      if (isOpen) {
        x = o * spread; y = -120; rot = 0; sc = 1.05;
      } else if (hovered) {
        x = o * 30; y = o * -10 - 40; rot = o * 8; sc = 1 - Math.abs(o) * 0.03;
      } else {
        x = o * 3; y = o * -5; rot = o * 3; sc = 1 - Math.abs(o) * 0.03;
      }
      photo.dataset.x = x;
      photo.dataset.y = y;
      photo.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${sc})`;
      photo.style.zIndex = isOpen ? 50 : 10 + i;
    });
  }

  function setOpen(open) {
    isOpen = open;
    gallery.classList.toggle('open', open);
    if (!open) gallery.classList.remove('hover');
    cover.setAttribute('aria-expanded', String(open));
    layout();
    if (!open) cover.focus();
  }

  cover.addEventListener('click', () => setOpen(true));
  cover.addEventListener('mouseenter', () => { if (!isOpen) { gallery.classList.add('hover'); layout(); } });
  cover.addEventListener('mouseleave', () => { gallery.classList.remove('hover'); layout(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) setOpen(false);
  });

  window.addEventListener('resize', layout);

  // Drag any photo down past 100px to close; otherwise it snaps back
  photos.forEach(photo => {
    photo.addEventListener('pointerdown', e => {
      if (!isOpen) return;
      e.preventDefault();
      try { photo.setPointerCapture(e.pointerId); } catch (err) { /* pointer already lost */ }
      photo.classList.add('dragging');
      const startX = e.clientX;
      const startY = e.clientY;
      const baseX = parseFloat(photo.dataset.x) || 0;
      const baseY = parseFloat(photo.dataset.y) || 0;
      let dy = 0;

      const onMove = ev => {
        const dx = ev.clientX - startX;
        dy = ev.clientY - startY;
        photo.style.zIndex = 150;
        photo.style.transform = `translate(${baseX + dx}px, ${baseY + dy}px) rotate(5deg) scale(1.15)`;
      };
      const onUp = () => {
        photo.removeEventListener('pointermove', onMove);
        photo.removeEventListener('pointerup', onUp);
        photo.removeEventListener('pointercancel', onUp);
        photo.classList.remove('dragging');
        if (dy > 100) setOpen(false);
        else layout();
      };
      photo.addEventListener('pointermove', onMove);
      photo.addEventListener('pointerup', onUp);
      photo.addEventListener('pointercancel', onUp);
    });
  });

  layout();
}

/* ─────────────────────────────────────────────────────
   RENDER: PROJECTS
───────────────────────────────────────────────────── */
function renderProjects() {
  // Projects List on Projects Page
  const list = qs('#projects-list');
  if(!list) return;
  
  list.innerHTML = '';
  PROJECTS.forEach(proj => {
    const media = createEl('div', { className: 'proj-media' },
      createEl('img', {
        src: proj.image,
        alt: `${proj.title} preview`,
        className: 'proj-thumb',
        loading: 'lazy',
      }),
      proj.tag ? createEl('span', { className: 'proj-tag' }, proj.tag) : null
    );

    const head = createEl('div', { className: 'proj-head' },
      createEl('div', { className: 'proj-title' }, proj.title),
      createEl('span', { className: 'proj-open', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>' })
    );

    const content = createEl('div', { className: 'proj-content' },
      head,
      proj.result ? createEl('div', { className: 'proj-result' },
        createEl('span', { className: 'proj-result__dot' }),
        proj.result
      ) : null,
      createEl('div', { className: 'proj-desc' }, proj.summary),
      createSkillTags(proj.tools)
    );

    const el = createEl('article', {
      className: 'project-item reveal',
      role: 'button',
      tabindex: '0',
      'aria-label': `View ${proj.title}`,
    }, media, content);

    el.addEventListener('click', () => openProject(proj.id));
    el.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openProject(proj.id);
    });
    list.appendChild(el);
  });
}

/* ─────────────────────────────────────────────────────
   RENDER: CERTIFICATIONS
───────────────────────────────────────────────────── */
function renderCerts() {
  const container = qs('#certs-container');
  if(!container) return;
  
  container.innerHTML = '';
  CERTIFICATIONS.forEach((cert, idx) => {
    const card = createEl('div', { className: 'cert-card reveal', style: `transition-delay: ${idx * 0.05}s` });

    const header = createEl('div', { className: 'cert-header' },
      createEl('div', { className: 'cert-info' },
        createEl('div', { className: 'cert-title' }, cert.title),
        createEl('div', { className: 'cert-issuer' }, cert.issuer)
      )
    );
    card.appendChild(header);

    if (cert.credentialId) {
      const credText = `Credential ID ${cert.credentialId}`;
      const credContainer = createEl('div', { className: 'cert-cred' });
      if (cert.link) {
        credContainer.appendChild(createEl('a', {
          className: 'cert-cred-link',
          href: cert.link,
          target: '_blank',
          rel: 'noopener noreferrer',
          html: `${credText} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
        }));
      } else {
        credContainer.appendChild(createEl('span', {}, credText));
      }
      card.appendChild(credContainer);
    }

    container.appendChild(card);
  });
}

/* ─────────────────────────────────────────────────────
   MODAL LOGIC
───────────────────────────────────────────────────── */
let lastFocusedEl = null;

function openProject(id) {
  const proj = PROJECTS.find(p => p.id === id);
  if (!proj) return;

  lastFocusedEl = document.activeElement;
  const content = qs('#detail-content');
  content.innerHTML = `
    <img src="${proj.image}" alt="${proj.title}" class="pd-img">
    <h2 class="pd-title">${proj.title}</h2>
    <div class="tl-skills pd-skills">
      ${proj.tools.map(t => `<span class="tl-skill">${t}</span>`).join('')}
    </div>
    
    <h3>The Problem / Motive</h3>
    <p class="pd-desc">${proj.problem}</p>
    
    <h3>The Approach</h3>
    <p class="pd-desc">${proj.approach}</p>
    
    <h3>The Outcome</h3>
    <p class="pd-desc">${proj.outcome}</p>
    
    <div class="pd-links">
      ${proj.appLink ? `<a href="${proj.appLink}" target="_blank" rel="noopener noreferrer" class="btn-primary">View Live App</a>` : ''}
      <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-primary">View GitHub</a>
    </div>
  `;

  qs('#project-detail').classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // prevent bg scroll
  window.scrollTo({ top: 0 }); // Just to be safe
  qs('#back-btn').focus();
}

function closeProjectDetail() {
  qs('#project-detail').classList.add('hidden');
  document.body.style.overflow = '';
  if (lastFocusedEl) {
    lastFocusedEl.focus();
    lastFocusedEl = null;
  }
}

function initBackBtn() {
  qs('#back-btn').addEventListener('click', closeProjectDetail);
  
  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !qs('#project-detail').classList.contains('hidden')) {
      closeProjectDetail();
    }
  });
  
  // Close when clicking the overlay area (outside detail-inner)
  qs('#project-detail').addEventListener('click', e => {
    if (e.target === qs('#project-detail')) {
      closeProjectDetail();
    }
  });
}

/* ─────────────────────────────────────────────────────
   MOBILE HAMBURGER
───────────────────────────────────────────────────── */
function initHamburger() {
  const btn = qs('#nav-hamburger');
  const drawer = qs('#mobile-nav');
  if (!btn || !drawer) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    drawer.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });

  // Close drawer when a link is clicked
  qsa('.nav-link', drawer).forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = qs('#footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initTheme();
  renderTimeline();
  initFolderGallery();
  renderProjects();
  renderCerts();
  initBackBtn();
  initNavigation();
  initHamburger();

  // Kick off animations
  requestAnimationFrame(() => {
    initTypewriter(); 
  });
});
