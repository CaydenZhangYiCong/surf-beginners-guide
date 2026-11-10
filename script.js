* {
  box-sizing: border-box;
}

:root {
  --navy: #062d47;
  --navy-deep: #041f34;
  --ocean: #0d86b8;
  --ocean-soft: #dff6ff;
  --sand: #f4efe6;
  --foam: #f8fdff;
  --ink: #163148;
  --muted: #5d7383;
  --line: rgba(8, 43, 62, 0.12);
  --accent: #f48d3c;
  --accent-dark: #db7020;
  --success: #0d9d7c;
  --shadow: 0 20px 60px rgba(8, 43, 62, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--foam);
  color: var(--ink);
  line-height: 1.7;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(6, 45, 71, 0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 24px;
}

.brand {
  color: #fff;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 30px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
}

.site-nav a {
  position: relative;
  transition: opacity 0.2s ease;
}

.site-nav a:hover,
.site-nav a.active {
  color: #fff;
}

.site-nav a.active::after,
.site-nav a:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  background: var(--accent);
  border-radius: 999px;
}

.nav-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
}

.hero,
.page-hero {
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.hero-home {
  background-image: linear-gradient(rgba(8, 37, 56, 0.5), rgba(6, 45, 71, 0.6)),
    url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80");
}

.guide-hero {
  background-image: linear-gradient(rgba(7, 41, 58, 0.56), rgba(7, 41, 58, 0.7)),
    url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80");
}

.gear-hero {
  background-image: linear-gradient(rgba(9, 48, 62, 0.56), rgba(9, 48, 62, 0.7)),
    url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80");
}

.safety-hero {
  background-image: linear-gradient(rgba(4, 39, 54, 0.56), rgba(4, 39, 54, 0.7)),
    url("https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80");
}

.glossary-hero {
  background-image: linear-gradient(rgba(4, 39, 54, 0.58), rgba(4, 39, 54, 0.72)),
    url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80");
}

.hero-grid,
.content-grid,
.split-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 32px;
}

.hero {
  padding: 110px 0 80px;
}

.page-hero {
  padding: 110px 0 60px;
  color: #fff;
}

.page-hero h1,
.hero h1 {
  margin: 0 0 18px;
  font-size: clamp(2.6rem, 5vw, 4.5rem);
  line-height: 1.08;
  letter-spacing: -0.05em;
}

.lead,
.page-hero p {
  font-size: 1.08rem;
  max-width: 640px;
  color: rgba(255, 255, 255, 0.9);
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-copy .eyebrow {
  color: #dfefff;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 18px 44px rgba(244, 141, 60, 0.35);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.22);
}

.hero-points {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
  margin: 28px 0 0;
  list-style: none;
  color: #dfeeff;
  font-weight: 600;
}

.hero-points li::before {
  content: "✓";
  color: var(--accent);
  margin-right: 8px;
}

.hero-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.mini-card {
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 24px;
  padding: 22px 20px;
  color: #fff;
  box-shadow: var(--shadow);
}

.mini-card span {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.mini-card strong {
  font-size: 1.2rem;
  line-height: 1.4;
}

.section {
  padding: 90px 0;
}

.alt-section {
  background: linear-gradient(180deg, rgba(13, 134, 184, 0.05), rgba(13, 134, 184, 0.01));
}

.section-heading {
  margin-bottom: 36px;
}

.section-heading h2,
.content-grid h2,
.split-layout h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
  letter-spacing: -0.04em;
}

.card-grid {
  display: grid;
  gap: 24px;
}

.three-col {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.two-col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.info-card,
.term-card,
.step-card,
.featured-box,
.info-panel {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 24px;
  box-shadow: 0 18px 40px rgba(4, 39, 54, 0.04);
}

.info-card h3,
.term-card h3,
.step-card h3,
.featured-box h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.35rem;
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--ocean), var(--navy));
  color: #fff;
  font-weight: 800;
}

.content-grid {
  align-items: start;
}

.info-panel {
  background: linear-gradient(180deg, #f0fbff, #fff);
}

.info-panel h3 {
  margin-top: 0;
  margin-bottom: 12px;
}

.info-panel ul,
.check-list {
  margin: 0;
  padding-left: 1.2rem;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.step-card {
  background: linear-gradient(180deg, #fff, #f8fcff);
}

.step-card span {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--ocean);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.featured-box {
  background: linear-gradient(135deg, rgba(13, 134, 184, 0.1), rgba(244, 141, 60, 0.12));
}

.checklist-boxes {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.check-item {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px 18px;
  font-weight: 600;
  box-shadow: 0 12px 28px rgba(8, 43, 62, 0.03);
}

.site-footer {
  background: var(--navy-deep);
  color: rgba(255, 255, 255, 0.8);
  padding: 24px 0;
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.footer-links {
  display: flex;
  gap: 18px;
}

@media (max-width: 860px) {
  .site-nav {
    position: absolute;
    top: calc(100% + 8px);
    right: 16px;
    left: 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background: #fff;
    color: var(--ink);
    padding: 18px;
    border-radius: 20px;
    box-shadow: var(--shadow);
  }

  .site-nav.open {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }

  .hero-grid,
  .content-grid,
  .split-layout,
  .steps-grid,
  .three-col,
  .two-col,
  .checklist-boxes {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 80px;
  }

  .page-hero {
    padding-top: 80px;
  }

  .section {
    padding: 72px 0;
  }

  .footer-wrap {
    flex-direction: column;
    text-align: center;
  }
}
