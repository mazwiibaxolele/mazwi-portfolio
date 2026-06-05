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
    problem: 'Students usually measure their productivity by "hours spent studying" instead of actual effectiveness. They use a bunch of disconnected tools—a timer app for focus, a spreadsheet for grades, and a notebook for planning. As a result, they study blindly, unable to see if their 5 hours of "re-reading notes" actually translated into a better test score than 2 hours of "active recall." This leads to burnout, wasted time, and lower-than-expected marks.',
    approach: 'StudyPulse bridges the gap between effort and results. We built a single, unified platform that combines three core pillars: Focus & Execution (smart Pomodoro timer), Grade Tracking (robust marks dashboard), and AI-Driven Insights (analyzes habits and tells them exactly what is working and what isn\'t).',
    outcome: 'The Aim: To transform studying from a blind grind into a data-driven, highly optimized process so students can study less, score higher, and maintain a healthy balance. As someone who wants to be a data scientist in future, the better way to use data is now.',
    github: 'https://github.com/mazwiibaxolele/StudyPulse.git',
    appLink: 'https://study-pulse-liard.vercel.app/auth',
    image: 'images/studypulse-pic.png',
  },
  {
    id: 1,
    title: 'Customer Retention & Churn Analysis',
    summary: 'Analysed 7,032 telecom customers to identify churn patterns. Found a 26.58% overall churn rate, 42.71% churn among month-to-month contract customers, and 47.68% of new customers leaving within year one.',
    tools: ['Python', 'pandas', 'matplotlib', 'seaborn', 'MySQL', 'Power BI'],
    problem: 'A telecommunications company was experiencing elevated customer churn without a clear understanding of which customer segments were most at risk or why they were leaving. Decisions around retention were being made without data support.',
    approach: 'Pulled and cleaned a dataset of 7,032 customers using pandas. Conducted exploratory data analysis to segment customers by contract type, tenure, and service usage. Built visualisations in matplotlib and seaborn, and modelled churn predictors. Imported into MySQL for structured querying and built a Power BI dashboard for business reporting.',
    outcome: 'Identified a 26.58% overall churn rate. Discovered that 42.71% of month-to-month contract customers churned, and that 47.68% of new customers left within their first year — pointing to an onboarding and early-retention problem.',
    github: 'https://github.com/mazwiibaxolele/FUTURE_DS_02',
    image: 'images/project1-a.png',
  },
  {
    id: 2,
    title: 'Marketing Funnel Conversion Analysis',
    summary: 'Analysed a bank marketing campaign to identify where in the funnel leads were being lost and which channels converted best.',
    tools: ['MySQL', 'Power BI', 'Excel'],
    problem: 'A bank\'s marketing team was running campaigns without insight into where leads were dropping off in the funnel. Budget was being spent across channels without knowing which ones drove actual conversions.',
    approach: 'Analysed campaign data using MySQL to segment leads by stage, channel, and outcome. Built conversion rate calculations at each funnel stage. Designed a Power BI dashboard to give the marketing team a live view of performance by channel and campaign type.',
    outcome: 'Identified the funnel stages with highest drop-off rates and the specific channels that produced the best conversion rates, enabling data-informed budget reallocation.',
    github: 'https://github.com/mazwiibaxolele/FUTURE_DS_03',
    image: 'images/project2-a.jpeg',
  },
  {
    id: 3,
    title: 'Business Sales Analytics Dashboard',
    summary: 'Built an interactive Power BI dashboard revealing revenue and profit trends across products, regions, and customer segments for a retail business.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Excel'],
    problem: 'A retail business lacked a consolidated view of its sales performance. Revenue and profit data existed in spreadsheets but weren\'t structured for decision-making.',
    approach: 'Ingested and transformed the raw Excel data using Power Query. Built a relational data model and wrote DAX measures for revenue, profit margin, YoY growth, and segment performance. Designed an interactive dashboard with slicers for region, product, and time period.',
    outcome: 'Delivered a single-view dashboard that revealed which product categories and regions were underperforming and where the highest margins were being generated.',
    github: 'https://github.com/mazwiibaxolele/FUTURE_DS_01',
    image: 'images/project3-a.jpeg',
  }
];

const EXPERIENCES = [
  {
    role: 'Data Visualisation Remote Intern',
    org: 'Execelerate',
    period: 'Jun 1 2026 – Jun 28 2026',
    desc: '4-week remote internship focused primarily on data analysis using SQL and building impactful data visualizations.',
    skills: ['SQL', 'Data Analysis', 'Data Visualization']
  },
  {
    role: 'Mentor',
    org: 'WITS School of Construction Economics',
    period: 'Apr 2026 – Present',
    desc: 'Mentoring students within the Construction Economics and Management faculty at Wits, supporting their academic development and professional preparation.',
    skills: ['Mentoring', 'Academic Support', 'Construction Economics']
  },
  {
    role: 'Quantities & Specification Tutor',
    org: 'ASAQS',
    period: 'Feb 2026 – Present',
    desc: 'Tutoring students in quantities and specification as part of the ASAQS programme, helping candidates develop technical proficiency in core surveying competencies.',
    skills: ['Quantity Surveying', 'Specification', 'Teaching']
  },
  {
    role: 'Data Analytics Intern',
    org: 'Future Interns',
    period: 'Apr 2026',
    desc: 'Completed three end-to-end analytics projects covering business sales performance, customer churn analysis, and marketing funnel evaluation.',
    skills: ['Python', 'SQL', 'Power BI', 'Data Analysis']
  },
  {
    role: 'Student Intern — Civil Construction',
    org: 'AZRA Developments',
    period: 'Jun 2025 – Jul 2025',
    desc: 'Supported delivery of roadworks and retaining walls. Conducted GNSS-based engineering surveying, assisted with trench preparation.',
    skills: ['Surveying', 'Trench Prep', 'Traffic Accommodation']
  },
  {
    role: 'CIOB Subcommittee Treasurer',
    org: 'Chartered Institute of Building',
    period: 'Feb 2025 – Oct 2025',
    desc: 'Managed financial accounts for the CIOB subcommittee, overseeing budget tracking and financial reporting for the Africa Novus student chapter.',
    skills: ['Budget Tracking', 'Financial Reporting', 'Leadership']
  },
  {
    role: 'Student Intern',
    org: 'Priotech Projects',
    period: 'Jun 2024',
    desc: 'Assisted with project coordination, progress tracking, and site reporting — gaining exposure to construction project management in an active site environment.',
    skills: ['Project Coordination', 'Site Reporting', 'Construction Management']
  }
];

const CERTIFICATIONS = [
  {
    title: 'ALX Africa Academy Data Engineering',
    issuer: 'ALX Africa',
    subs: []
  },
  {
    title: 'Data Analyst Associate',
    issuer: 'DataCamp',
    subs: [
      'Credential ID: DAA0017949742800 — Jun 2026'
    ]
  },
  {
    title: 'Data Engineer Associate',
    issuer: 'DataCamp',
    subs: [
      'Credential ID: DEA0011274287496 — Jun 2026'
    ]
  },
  {
    title: 'IBM Data Analyst Professional',
    issuer: 'IBM',
    subs: []
  },
  {
    title: 'Microsoft Certifications (SQL Foundations)',
    issuer: 'Microsoft',
    subs: []
  },
  {
    title: 'WinQS Quantity Surveying System',
    issuer: 'ACE Solutions',
    subs: []
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
    else el.setAttribute(k, v);
  });
  children.forEach(c => { if (c) el.append(typeof c === 'string' ? document.createTextNode(c) : c); });
  return el;
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
  
  function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
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
  activateSection('home');

  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    
    const id = link.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(id);
    
    if (targetSection && targetSection.tagName.toLowerCase() === 'section') {
      e.preventDefault();
      activateSection(id);
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
    if (activeSection && typeof revealObserver !== 'undefined') {
      qsa('.reveal', activeSection).forEach(el => {
        el.classList.remove('is-visible');
        revealObserver.observe(el);
      });
      // Handle items that might have reveal-after-type inside active section
      qsa('.reveal-after-type', activeSection).forEach(el => {
        // If it's the home tab, we should just make them visible if typing is already done
        // We'll just force them visible here to prevent them disappearing on tab switch
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
    const skillsHtml = exp.skills.map(s => `<span class="tl-skill">${s}</span>`).join('');
    
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
        createEl('div', { className: 'tl-skills', html: skillsHtml })
      )
    );
    container.appendChild(el);
  });
}

/* ─────────────────────────────────────────────────────
   RENDER: PROJECTS
───────────────────────────────────────────────────── */
let homeCarouselInterval;

function renderProjects() {
  // Latest Project on Home Page (Cycling Carousel)
  const homeLatest = qs('#home-latest-project');
  if (homeLatest && PROJECTS.length > 0) {
    let currentIndex = 0;
    
    function updateFeatured() {
      const proj = PROJECTS[currentIndex];
      // Quick fade animation
      homeLatest.style.opacity = '0';
      setTimeout(() => {
        homeLatest.innerHTML = `
          <img src="${proj.image}" alt="${proj.title}">
          <div class="latest-card-overlay">
            <div class="latest-card-title">${proj.title}</div>
          </div>
        `;
        homeLatest.style.opacity = '1';
        homeLatest.onclick = () => openProject(proj.id);
      }, 300);
    }
    
    // Smooth transition style
    homeLatest.style.transition = 'opacity 0.3s ease-in-out';
    updateFeatured();
    
    // Switch every 5 seconds
    if(homeCarouselInterval) clearInterval(homeCarouselInterval);
    homeCarouselInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % PROJECTS.length;
      updateFeatured();
    }, 5000);
  }

  // Projects List on Projects Page
  const list = qs('#projects-list');
  if(!list) return;
  
  list.innerHTML = '';
  PROJECTS.forEach(proj => {
    const el = createEl('div', { className: 'project-item reveal' });
    el.innerHTML = `
      <img src="${proj.image}" alt="${proj.title}" class="proj-thumb">
      <div class="proj-content">
        <div class="proj-title">${proj.title}</div>
        <div class="proj-desc">${proj.summary}</div>
        <div class="tl-skills">
          ${proj.tools.map(t => `<span class="tl-skill">${t}</span>`).join('')}
        </div>
      </div>
    `;
    el.addEventListener('click', () => openProject(proj.id));
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
    
    // Header
    const header = createEl('div', { className: 'cert-header' },
      createEl('div', { className: 'cert-info' },
        createEl('div', { className: 'cert-title' }, cert.title),
        createEl('div', { className: 'cert-issuer' }, cert.issuer)
      )
    );
    
    if (cert.subs && cert.subs.length > 0) {
      header.appendChild(createEl('div', { className: 'cert-chevron', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>' }));
      
      // Body (Subs)
      const body = createEl('div', { className: 'cert-body' });
      const subList = createEl('div', { className: 'subcert-list' });
      cert.subs.forEach(sub => {
        subList.appendChild(createEl('div', { className: 'subcert-item' }, sub));
      });
      body.appendChild(subList);
      
      // Interactions
      header.addEventListener('mouseenter', () => card.classList.add('open'));
      card.addEventListener('mouseleave', () => card.classList.remove('open'));
      header.addEventListener('click', () => card.classList.toggle('open'));
      
      card.appendChild(header);
      card.appendChild(body);
    } else {
      header.style.cursor = 'default';
      card.appendChild(header);
    }
    
    container.appendChild(card);
  });
}

/* ─────────────────────────────────────────────────────
   MODAL LOGIC
───────────────────────────────────────────────────── */
function openProject(id) {
  const proj = PROJECTS.find(p => p.id === id);
  if (!proj) return;

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
    
    <div style="margin-top: 30px; display: flex; gap: 15px; flex-wrap: wrap;">
      ${proj.appLink ? `<a href="${proj.appLink}" target="_blank" class="btn-primary">View Live App</a>` : ''}
      <a href="${proj.github}" target="_blank" class="btn-primary">View GitHub</a>
    </div>
  `;

  qs('#project-detail').classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // prevent bg scroll
  window.scrollTo({ top: 0 }); // Just to be safe
}

function closeProjectDetail() {
  qs('#project-detail').classList.add('hidden');
  document.body.style.overflow = '';
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
    btn.classList.toggle('open');
    drawer.classList.toggle('open');
  });

  // Close drawer when a link is clicked
  qsa('.nav-link', drawer).forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      drawer.classList.remove('open');
    });
  });
}

/* ─────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderTimeline();
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

