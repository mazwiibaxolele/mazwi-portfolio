# Baxolele Mazwi — Personal Portfolio

A dark, minimal, academic portfolio website built for Baxolele Mazwi — BSc Construction student at Wits & Data Analytics specialist.

## 🌐 How to Open

Simply open `index.html` in your browser. No server or build step required.

For the best experience, use a local development server in VS Code:
1. Install the **Live Server** extension (Ritwick Dey)
2. Right-click `index.html` → **Open with Live Server**

---

## 📁 Project Structure

```
mazwi-portfolio/
├── index.html          — Main HTML (all 8 sections)
├── styles.css          — Full design system (dark + light themes)
├── mobile-nav.css      — Mobile hamburger nav styles
├── script.js           — All JavaScript (particles, carousel, projects, certs...)
├── documents/          — Place your PDF files here:
│   ├── Baxolele_Mazwi_CV.pdf
│   ├── Recommendation_FutureInterns.pdf
│   └── AZRA_Confirmation.pdf
├── images/             — Place your photos here:
│   └── profile.jpg     — Your profile photo (uncomment the <img> in index.html)
└── README.md
```

---

## 🖼️ Adding Your Profile Photo

1. Save your photo as `images/profile.jpg`
2. Open `index.html` and find the avatar section (~line 70)
3. Uncomment the `<img>` tag and comment out the initials `<span>`

---

## 📄 Adding Your Documents

Place your PDF files in the `documents/` folder with these exact names:
- `Baxolele_Mazwi_CV.pdf`
- `Recommendation_FutureInterns.pdf`
- `AZRA_Confirmation.pdf`

---

## 📸 Adding Project Screenshots

In `script.js`, find the `openProjectDetail` function. The two screenshot placeholders show when a project detail page opens. Replace the placeholder HTML with `<img>` tags pointing to your screenshot files.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Heading font | Crimson Pro (serif) |
| Body font | Atkinson Hyperlegible |
| Accent colour | `#e8800a` (orange — **name only**) |
| Dark bg | `#0d0d0f` |
| Light bg | `#f4f1eb` (warm parchment) |
| Glass blur | `20px` |

---

## ✅ Sections

| # | Section | Description |
|---|---------|-------------|
| — | Nav | Fixed pill nav + theme toggle |
| 1 | Home | Typewriter name, avatar, social links |
| 2 | About | Story + info card |
| 3 | Projects | 5 projects with full detail pages |
| 4 | Experience | Horizontal carousel (6 roles) |
| 5 | Skills | Grouped skill pills (3 categories) |
| 6 | Certifications | Tabbed grid (IBM / DataCamp / Microsoft / Other) |
| 7 | Documents | Downloads + drag-and-drop upload |
| 8 | Contact | Link cards + email CTA |
| — | Footer | Name · Copyright · Social links |
