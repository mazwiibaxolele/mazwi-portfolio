/* =====================================================
   MAZWI PORTFOLIO — script.js
   All interactivity: particles, typewriter, carousel,
   projects, certifications, theme toggle, scroll reveal
   ===================================================== */

'use strict';

/* ─────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: 'Customer Retention and Churn Analysis',
    category: 'Data Analytics',
    featured: true,
    summary: 'Analysed 7,032 telecom customers to identify churn patterns. Found a 26.58% overall churn rate, 42.71% churn among month-to-month contract customers, and 47.68% of new customers leaving within year one.',
    tools: ['Python', 'pandas', 'matplotlib', 'seaborn', 'MySQL', 'Power BI'],
    problem: 'A telecommunications company was experiencing elevated customer churn without a clear understanding of which customer segments were most at risk or why they were leaving. Decisions around retention were being made without data support.',
    approach: 'Pulled and cleaned a dataset of 7,032 customers using pandas. Conducted exploratory data analysis to segment customers by contract type, tenure, and service usage. Built visualisations in matplotlib and seaborn, and modelled churn predictors. Imported into MySQL for structured querying and built a Power BI dashboard for business reporting.',
    outcome: 'Identified a 26.58% overall churn rate. Discovered that 42.71% of month-to-month contract customers churned, and that 47.68% of new customers left within their first year — pointing to an onboarding and early-retention problem.',
    github: 'https://github.com/mazwiibaxolele/FUTURE_DS_02',
    image1: 'images/project1-a.png',
    image2: 'images/project1-b.jpeg'
  },
  {
    id: 2,
    title: 'Marketing Funnel and Conversion Performance Analysis',
    category: 'Business Intelligence',
    featured: true,
    summary: 'Analysed a bank marketing campaign to identify where in the funnel leads were being lost and which channels converted best.',
    tools: ['MySQL', 'Power BI', 'Excel'],
    problem: 'A bank\'s marketing team was running campaigns without insight into where leads were dropping off in the funnel. Budget was being spent across channels without knowing which ones drove actual conversions.',
    approach: 'Analysed campaign data using MySQL to segment leads by stage, channel, and outcome. Built conversion rate calculations at each funnel stage. Designed a Power BI dashboard to give the marketing team a live view of performance by channel and campaign type.',
    outcome: 'Identified the funnel stages with highest drop-off rates and the specific channels that produced the best conversion rates, enabling data-informed budget reallocation.',
    github: 'https://github.com/mazwiibaxolele/FUTURE_DS_03',
    image1: 'images/project2-a.jpeg',
    image2: 'images/project2-b.jpeg'
  },
  {
    id: 3,
    title: 'Business Sales Analytics Dashboard',
    category: 'Dashboard Design',
    featured: false,
    summary: 'Built an interactive Power BI dashboard revealing revenue and profit trends across products, regions, and customer segments for a retail business.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Excel'],
    problem: 'A retail business lacked a consolidated view of its sales performance. Revenue and profit data existed in spreadsheets but weren\'t structured for decision-making.',
    approach: 'Ingested and transformed the raw Excel data using Power Query. Built a relational data model and wrote DAX measures for revenue, profit margin, YoY growth, and segment performance. Designed an interactive dashboard with slicers for region, product, and time period.',
    outcome: 'Delivered a single-view dashboard that revealed which product categories and regions were underperforming and where the highest margins were being generated.',
    github: 'https://github.com/mazwiibaxolele/FUTURE_DS_01',
    image1: 'images/project3-a.jpeg',
    image2: 'images/project3-b.png'
  },
  /* 
  {
    id: 4,
    title: 'E-Commerce Funnel and Revenue Analysis',
    category: 'SQL Analytics',
    featured: false,
    summary: 'End-to-end analysis using BigQuery SQL over 30 days of event data, evaluating funnel performance, marketing channel efficiency, and average order value.',
    tools: ['BigQuery', 'SQL', 'Power BI'],
    problem: 'An e-commerce platform had 30 days of event-level user data but no structured analysis of how users moved through the purchase funnel or which acquisition channels were delivering value.',
    approach: 'Wrote SQL queries in BigQuery to reconstruct the user journey from first visit to purchase. Calculated funnel drop-off rates at each step, segmented by acquisition channel and device type. Visualised results in Power BI.',
    outcome: 'Identified the funnel stages with the highest abandonment rates and found that certain acquisition channels had significantly higher conversion rates, supporting channel prioritisation decisions.',
    github: 'https://github.com/mazwiibaxolele/ecommerce-funnel-analysis-bigquery',
  },
  {
    id: 5,
    title: 'IBM Data Analysis Capstone',
    category: 'Data Science',
    featured: false,
    summary: 'Analysed global developer survey data to identify current and future technology trends, applying Python, SQL, APIs, and IBM Cognos to deliver strategic insights.',
    tools: ['Python', 'SQL', 'APIs', 'IBM Cognos', 'pandas'],
    problem: 'The capstone required producing insights about the state of technology adoption among developers globally — which languages and tools are currently dominant, and which are gaining or losing momentum.',
    approach: 'Collected data via API calls and web scraping. Cleaned and processed using pandas. Ran SQL queries to extract trend data. Built dashboards in IBM Cognos and Python visualisation libraries to communicate findings.',
    outcome: 'Produced a comprehensive technology trends report covering current and future skill demand, identifying rising languages and frameworks, and delivering actionable insights for learning and hiring strategy.',
    github: 'https://github.com/mazwiibaxolele/capstone-data-analytics',
  },
  */
];

const EXPERIENCES = [
  {
    role: 'Mentor',
    org: 'WITS School of Construction Economics and Management',
    type: 'Contract',
    period: 'April 2026 – Present',
    location: 'Johannesburg, South Africa',
    desc: 'Mentoring students within the Construction Economics and Management faculty at Wits, supporting their academic development and professional preparation.',
    image: 'images/exp-mentor.png'
  },
  {
    role: 'Quantities and Specification Tutor',
    org: 'ASAQS — Association of South African Quantity Surveyors',
    type: 'Part-time · Hybrid',
    period: 'February 2026 – Present',
    location: 'Johannesburg, South Africa',
    desc: 'Tutoring students in quantities and specification as part of the ASAQS programme, helping candidates develop technical proficiency in core quantity surveying competencies.',
    image: 'images/exp-tutor.png'
  },
  {
    role: 'Data Science and Analytics Intern',
    org: 'Future Interns',
    type: 'Remote Internship',
    period: 'April 2026',
    location: 'Remote',
    desc: 'Completed three end-to-end analytics projects covering business sales performance, customer churn analysis, and marketing funnel evaluation — applying Python, SQL, and Power BI throughout.',
    image: 'images/exp-intern-data.JPG'
  },
  {
    role: 'Student Intern — Civil Construction',
    org: 'AZRA Developments',
    type: 'On-site',
    period: 'June 2025 – July 2025',
    location: 'Johannesburg, South Africa',
    desc: 'Supported delivery of roadworks and retaining walls. Conducted GNSS-based engineering surveying, assisted with trench preparation, and contributed to traffic accommodation setup.',
    image: 'images/exp-intern-civil.png'
  },
  {
    role: 'CIOB Subcommittee Treasurer and Member',
    org: 'Chartered Institute of Building — Africa Novus Chapter at Wits',
    type: 'Contract',
    period: 'February 2025 – October 2025',
    location: 'Johannesburg, South Africa',
    desc: 'Managed financial accounts for the CIOB subcommittee, overseeing budget tracking and financial reporting for the Africa Novus student chapter at Wits.',
    image: 'images/exp-ciob.png'
  },
  {
    role: 'Student Intern',
    org: 'Priotech Projects',
    type: 'On-site',
    period: 'June 2024',
    location: 'Northam, Limpopo, South Africa',
    desc: 'Assisted with project coordination, progress tracking, and site reporting — gaining exposure to construction project management in an active site environment.',
    image: 'images/exp-intern-priotech.jpg'
  },
];

const CERTIFICATIONS = [
  { issuer: 'IBM', name: 'IBM Data Analyst Professional Certificate', date: 'Jan 2026' },
  { issuer: 'IBM', name: 'Data Analysis with Python', date: 'Dec 2025' },
  { issuer: 'IBM', name: 'Data Visualization with Python', date: 'Jan 2026' },
  { issuer: 'IBM', name: 'Databases and SQL for Data Science with Python', date: 'Dec 2025' },
  { issuer: 'IBM', name: 'Python for Data Science, AI and Development', date: 'Jul 2025' },
  { issuer: 'IBM', name: 'Python Project for Data Science', date: 'Dec 2025' },
  { issuer: 'IBM', name: 'Excel Basics for Data Analysis', date: 'Nov 2025' },
  { issuer: 'IBM', name: 'Data Visualization and Dashboards with Excel and Cognos', date: 'Nov 2025' },
  { issuer: 'IBM', name: 'Introduction to Data Analytics', date: 'Nov 2025' },
  { issuer: 'IBM', name: 'Generative AI: Enhance your Data Analytics Career', date: 'Jan 2026' },
  { issuer: 'IBM', name: 'Data Analyst Career Guide and Interview Preparation', date: 'Jan 2026' },
  { issuer: 'DataCamp', name: 'Understanding Data Engineering', date: 'May 2026' },
  { issuer: 'DataCamp', name: 'Introduction to Data Literacy', date: 'May 2026' },
  { issuer: 'DataCamp', name: 'Introduction to Power BI', date: 'Feb 2026' },
  { issuer: 'DataCamp', name: 'Exploratory Data Analysis in SQL', date: 'Feb 2026' },
  { issuer: 'DataCamp', name: 'Intermediate SQL', date: 'May 2025' },
  { issuer: 'Microsoft', name: 'SQL Foundations', date: 'Dec 2025' },
  { issuer: 'Other', name: 'WinQS Quantity Surveying System — ACE Solutions', date: 'Apr 2025' },
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
    initParticles(); // re-init with new colour
  });
}

/* ─────────────────────────────────────────────────────
   PARTICLES
───────────────────────────────────────────────────── */
function initParticles() {
  const canvas = qs('#particles-canvas');
  const ctx    = canvas.getContext('2d');
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const COUNT  = 55;

  let W, H, particles;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.r  = Math.random() * 1.5 + 0.4;
    this.vx = (Math.random() - 0.5) * 0.18;
    this.vy = (Math.random() - 0.5) * 0.18;
    this.a  = Math.random() * 0.5 + 0.15;
  }

  function build() {
    particles = Array.from({ length: COUNT }, () => new Particle());
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    const color = isDark ? '240,237,232' : '26,24,20';
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},${p.a})`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }

  resize();
  build();
  tick();
  window.addEventListener('resize', () => { resize(); build(); });
}

/* ─────────────────────────────────────────────────────
   TYPEWRITER + FADE-IN
───────────────────────────────────────────────────── */
function initTypewriter() {
  const mazwiEl   = qs('#typewriter-mazwi');
  const cursorEl  = qs('#cursor-mazwi');
  const baxEl     = qs('#fadeIn-baxolele');
  const word      = 'Mazwi';
  let i = 0;

  const interval = setInterval(() => {
    mazwiEl.textContent += word[i];
    i++;
    if (i >= word.length) {
      clearInterval(interval);
      setTimeout(() => {
        if (cursorEl) cursorEl.style.display = 'none';
        if (baxEl) baxEl.classList.add('fade-visible');
      }, 400);
    }
  }, 110);
}

/* ─────────────────────────────────────────────────────
   SCROLL REVEAL
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
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  qsa('.reveal').forEach(el => revealObserver.observe(el));
}

/* ─────────────────────────────────────────────────────
   NAVIGATION (TABBED UI)
───────────────────────────────────────────────────── */
function initNavigation() {
  const sections = qsa('section[id]');
  
  // Activate home by default
  activateSection('home');

  // Use event delegation so mobile menu clones work automatically
  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    
    const id = link.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(id);
    
    // Only intercept if the target is an actual section
    if (targetSection && targetSection.tagName.toLowerCase() === 'section') {
      e.preventDefault();
      activateSection(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  function activateSection(id) {
    sections.forEach(s => s.classList.toggle('active', s.id === id));
    
    // Update active state on all matching links
    qsa('a[href^="#"]').forEach(l => {
      const linkId = l.getAttribute('href').replace('#', '');
      if (document.getElementById(linkId) && document.getElementById(linkId).tagName.toLowerCase() === 'section') {
        l.classList.toggle('active', linkId === id);
      }
    });

    // Re-trigger reveal animations elegantly by re-observing them
    const activeSection = qs(`#${id}`);
    if (activeSection && typeof revealObserver !== 'undefined') {
      qsa('.reveal', activeSection).forEach(el => {
        el.classList.remove('is-visible');
        revealObserver.observe(el);
      });
    }
  }
}

/* ─────────────────────────────────────────────────────
   PROJECTS
───────────────────────────────────────────────────── */
let projectsExpanded = false;

function buildProjectCard(p) {
  const toolsHTML = p.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
  const badgeHTML = p.featured ? '<span class="badge-featured">Featured</span>' : '';

  const imageHTML = p.image1 
    ? `<img src="${p.image1}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;" />`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">
         <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
       </svg>`;

  const card = createEl('div', { className: 'project-card reveal', 'data-id': p.id });
  card.innerHTML = `
    <div class="project-card-img">
      ${imageHTML}
    </div>
    <div class="project-card-body">
      <div class="project-meta">
        <span class="project-category">${p.category}</span>
        ${badgeHTML}
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-summary">${p.summary}</p>
      <div class="project-tools">${toolsHTML}</div>
    </div>`;

  card.addEventListener('click', () => openProjectDetail(p.id));
  return card;
}

function renderProjects() {
  const grid = qs('#projects-grid');
  const btn  = qs('#expand-projects-btn');
  const visible = projectsExpanded ? PROJECTS : PROJECTS.slice(0, 3);

  grid.innerHTML = '';
  visible.forEach(p => {
    const card = buildProjectCard(p);
    grid.appendChild(card);
  });

  // Re-observe new cards
  qsa('.project-card.reveal').forEach(el => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    io.observe(el);
  });

  btn.textContent = projectsExpanded ? 'Show Fewer' : `Show All Projects (${PROJECTS.length})`;
  btn.onclick = () => { projectsExpanded = !projectsExpanded; renderProjects(); };
}

function openProjectDetail(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  const toolsHTML = p.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
  const others    = PROJECTS.filter(x => x.id !== id).slice(0, 2);
  const relatedHTML = others.map(o => {
    const relatedImg = o.image1 
      ? `<img src="${o.image1}" alt="${o.title}" style="width:100%; height:100%; object-fit:cover;" />`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true" style="width:28px;height:28px;opacity:.3">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
        </svg>`;
        
    return `
    <div class="project-card" style="cursor:pointer;" onclick="openProjectDetail(${o.id})">
      <div class="project-card-img" style="height:100px; padding:0;">
        ${relatedImg}
      </div>
      <div class="project-card-body">
        <div class="project-meta"><span class="project-category">${o.category}</span></div>
        <h3 class="project-title" style="font-size:1rem">${o.title}</h3>
      </div>
    </div>`;
  }).join('');

  const detail = qs('#project-detail');
  const content = qs('#detail-content');

  content.innerHTML = `
    <h2 style="font-family:'Crimson Pro',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:600;margin-bottom:.5rem;color:var(--text-primary)">${p.title}</h2>
    <p style="font-family:'Crimson Pro',serif;font-style:italic;color:var(--text-secondary);margin-bottom:2.5rem">${p.category}</p>

    <div class="detail-screenshots">
      ${p.image1 ? `<img src="${p.image1}" alt="${p.title}" style="width:100%; border-radius:var(--radius-card); border:1px solid var(--glass-border); aspect-ratio: 16/9; object-fit: cover;" />` : ''}
      ${p.image2 ? `<img src="${p.image2}" alt="${p.title} extra" style="width:100%; border-radius:var(--radius-card); border:1px solid var(--glass-border); aspect-ratio: 16/9; object-fit: cover;" />` : ''}
    </div>

    <div class="detail-section">
      <h3>The Problem</h3>
      <p>${p.problem}</p>
    </div>
    <div class="detail-section">
      <h3>Approach &amp; Method</h3>
      <p>${p.approach}</p>
    </div>
    <div class="detail-section">
      <h3>Outcome &amp; Findings</h3>
      <p>${p.outcome}</p>
    </div>
    <div class="detail-section">
      <h3>Tools &amp; Technologies</h3>
      <div class="project-tools" style="margin-top:.8rem">${toolsHTML}</div>
    </div>

    <a href="${p.github}" target="_blank" rel="noopener" class="detail-github-link">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      View Source on GitHub
    </a>

    <div class="detail-related">
      <h4>More Projects</h4>
      <div class="related-grid">${relatedHTML}</div>
    </div>`;

  detail.classList.remove('hidden');
  window.scrollTo({ top: 0 });
  document.body.style.overflow = 'hidden';
}

function closeProjectDetail() {
  qs('#project-detail').classList.add('hidden');
  document.body.style.overflow = '';
}

/* ─────────────────────────────────────────────────────
   EXPERIENCE CAROUSEL
───────────────────────────────────────────────────── */
let expIndex = 0;

function buildExpCard(e) {
  const photoContent = e.image 
    ? `<img src="${e.image}" alt="${e.role}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;" />`
    : `<div class="exp-photo-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <p>Add Photo</p>
        </div>`;

  return `
    <div class="exp-card">
      <div class="exp-photo">
        ${photoContent}
      </div>
      <div class="exp-body">
        <h3 class="exp-role">${e.role}</h3>
        <p class="exp-org">${e.org}</p>
        <div class="exp-meta">
          <span class="exp-meta-tag">${e.type}</span>
          <span class="exp-meta-tag">${e.period}</span>
          <span class="exp-meta-tag">${e.location}</span>
        </div>
        <p class="exp-desc">${e.desc}</p>
      </div>
    </div>`;
}

function renderCarousel() {
  const track = qs('#exp-track');
  const dots  = qs('#exp-dots');

  track.innerHTML = EXPERIENCES.map(e => buildExpCard(e)).join('');

  dots.innerHTML = EXPERIENCES.map((_, i) =>
    `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="Experience ${i+1}"></button>`
  ).join('');

  qsa('.carousel-dot', dots).forEach(dot => {
    dot.addEventListener('click', () => goToExp(+dot.dataset.i));
  });

  qs('#exp-prev').addEventListener('click', () => goToExp(expIndex - 1));
  qs('#exp-next').addEventListener('click', () => goToExp(expIndex + 1));
}

function goToExp(i) {
  const n = EXPERIENCES.length;
  expIndex = ((i % n) + n) % n;
  qs('#exp-track').style.transform = `translateX(-${expIndex * 100}%)`;
  qsa('.carousel-dot').forEach((d, j) => d.classList.toggle('active', j === expIndex));
}

/* ─────────────────────────────────────────────────────
   CERTIFICATIONS
───────────────────────────────────────────────────── */
let activeCertFilter = 'IBM';

function renderCerts(filter) {
  const grid = qs('#cert-grid');
  const filtered = CERTIFICATIONS.filter(c => c.issuer === filter);
  grid.innerHTML = filtered.map(c => `
    <div class="cert-card">
      <p class="cert-issuer">${c.issuer}</p>
      <p class="cert-name">${c.name}</p>
      <p class="cert-date">${c.date}</p>
    </div>`).join('');
}

function initCertTabs() {
  renderCerts(activeCertFilter);
  qsa('.cert-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeCertFilter = tab.dataset.filter;
      qsa('.cert-tab').forEach(t => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab);
      });
      renderCerts(activeCertFilter);
    });
  });
}

/* ─────────────────────────────────────────────────────
   UPLOAD ZONE
───────────────────────────────────────────────────── */
function initUpload() {
  const zone   = qs('#upload-zone');
  const input  = qs('#file-input');
  const status = qs('#upload-status');

  if (!zone) return;

  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    handleFile(e.dataTransfer.files[0]);
  });

  input.addEventListener('change', () => handleFile(input.files[0]));

  function handleFile(file) {
    if (!file) return;
    const maxMB = 10;
    if (file.size > maxMB * 1024 * 1024) {
      showStatus(`File too large. Maximum ${maxMB} MB allowed.`, 'error');
      return;
    }
    showStatus(`✓ "${file.name}" received (${(file.size/1024).toFixed(1)} KB)`, 'success');
  }

  function showStatus(msg, type) {
    status.textContent = msg;
    status.classList.remove('hidden');
    status.style.color = type === 'error' ? '#e8800a' : 'var(--text-secondary)';
  }
}

/* ─────────────────────────────────────────────────────
   BACK BUTTON
───────────────────────────────────────────────────── */
function initBackBtn() {
  qs('#back-btn').addEventListener('click', closeProjectDetail);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !qs('#project-detail').classList.contains('hidden')) {
      closeProjectDetail();
    }
  });
}

/* ─────────────────────────────────────────────────────
   MOBILE NAV — inject hamburger button
───────────────────────────────────────────────────── */
function initMobileNav() {
  const navInner = qs('.nav-inner');
  const navLinks = qsa('.nav-link');

  // Inject hamburger
  const ham = createEl('button', { className: 'nav-hamburger', 'aria-label': 'Open menu', 'aria-expanded': 'false' });
  ham.innerHTML = '<span></span><span></span><span></span>';
  navInner.appendChild(ham);

  // Inject mobile drawer
  const drawer = createEl('div', { className: 'mobile-nav', id: 'mobile-nav' });
  navLinks.forEach(link => {
    const clone = link.cloneNode(true);
    clone.addEventListener('click', () => closeMenu());
    drawer.appendChild(clone);
  });
  document.body.appendChild(drawer);

  // Load mobile-nav.css
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'mobile-nav.css';
  document.head.appendChild(link);

  function openMenu() {
    drawer.classList.add('open');
    ham.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    drawer.classList.remove('open');
    ham.setAttribute('aria-expanded', 'false');
  }

  ham.addEventListener('click', () => {
    drawer.classList.contains('open') ? closeMenu() : openMenu();
  });
}

/* ─────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initParticles();
  initTypewriter();

  renderProjects();
  renderCarousel();
  initCertTabs();
  initUpload();
  initBackBtn();
  initMobileNav();

  // Reveal must run after DOM is set
  requestAnimationFrame(() => {
    initReveal();
    initNavigation();
  });
});
