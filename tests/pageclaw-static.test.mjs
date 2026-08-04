import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const htmlUrl = new URL("../index.html", import.meta.url);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

test("preserves the PageClaw section order and complete research record", async () => {
  const html = await readFile(htmlUrl, "utf8");
  const sectionIds = [
    'id="about"',
    'id="links"',
    'id="news"',
    'id="selected-work"',
    'id="publications"',
    'id="awards"',
    'id="service"',
  ];
  const positions = sectionIds.map((id) => html.indexOf(id));
  assert.ok(positions.every((position) => position >= 0));
  assert.deepEqual([...positions].sort((a, b) => a - b), positions);

  for (const required of [
    "Hongbo Kang (康洪菠)",
    "Ph.D. Candidate · @TJU",
    "Crowd4D: Scene-Aware Monocular 4D Crowd Reconstruction",
    "AnnyCrowd: Mixed-Age Crowd Reconstruction from a Single Image",
    "DRPose: A Diffusion-based Pose Refinement Framework for 3D Human Pose Estimation",
    "DyCrowd: Towards Dynamic Crowd Reconstruction from a Large-scene Video",
    "RESCUE: Crowd Evacuation Simulation via Controlling SDM-United Characters",
    "Double-chain Graph Convolution Transformer for 3D Human Pose Estimation",
    "Diffusion-based Pose Refinement and Multi-Hypothesis Generation for 3D Human Pose Estimation",
    "Global and local spatio-temporal encoder for 3D human pose estimation",
    "MuRE: Multi-Relationship Encoder for 3D Human Pose Estimation",
    "DBMambaPose: Decoupled Spatial-Temporal Bidirectional State Space Model for Efficient 3D Human Pose Estimation",
    "ICFNet: Interactive-complementary fusion network for monocular 3D human pose estimation",
    "Hierarchical flow learning for low-light image enhancement",
    "China Scholarship Council (CSC) Scholarship",
    "Conference Reviewer",
    "CVPR, AAAI, MM, SIGGRAPH Asia, etc.",
  ]) {
    assert.match(html, new RegExp(escapeRegExp(required)));
  }
  for (const plainResearchPhrase of [
    "individual and crowd reconstruction",
    "virtual mixed-age crowd data construction",
    "individual and crowd motion simulation",
  ]) {
    assert.doesNotMatch(
      html,
      new RegExp(`<strong>${escapeRegExp(plainResearchPhrase)}</strong>`),
    );
  }
  const news = html.slice(
    html.indexOf('id="news"'),
    html.indexOf('id="selected-work"', html.indexOf('id="news"')),
  );
  assert.doesNotMatch(news, /[📍🏆🎉📌]/u);
  assert.doesNotMatch(news, />…<\/span>/u);
  assert.doesNotMatch(
    html,
    /\.service-list li\s*\{[^}]*border-bottom:/,
    "academic service rows should not have horizontal separators",
  );
});

test("ships accessible minimal interactions", async () => {
  const html = await readFile(htmlUrl, "utf8");
  assert.match(html, /class="skip-link"/);
  assert.match(html, /html\s*\{[\s\S]*?font-size:\s*15px;/);
  assert.match(html, /body\s*\{[\s\S]*?font-size:\s*1rem;/);
  assert.match(html, /<header class="site-header">/);
  assert.match(html, /<a class="site-brand" href="#about" aria-label="Hongbo Kang">/);
  assert.match(html, /\.site-brand\s*\{[\s\S]*?white-space:\s*nowrap;/);
  assert.match(html, /<span class="site-brand-full">Hongbo Kang<\/span>/);
  assert.match(html, /<span class="site-brand-short" aria-hidden="true">Hongbo Kang<\/span>/);
  assert.doesNotMatch(html, /Hongbo Kang\/3D Vision/);
  assert.doesNotMatch(html, /<span class="site-brand-full">Homepage<\/span>/);
  assert.doesNotMatch(html, /<span class="site-brand-full">Hongbo Kang's Homepage<\/span>/);
  assert.doesNotMatch(html, /<span class="site-brand-short" aria-hidden="true">HK<\/span>/);
  assert.match(html, /<a href="#about-content">About Me<\/a>/);
  assert.match(
    html,
    /<nav\s+class="top-nav"\s+id="primary-navigation"\s+aria-label="Primary navigation"\s*>/,
  );
  assert.match(html, /<span class="top-nav-indicator" aria-hidden="true"><\/span>/);
  assert.match(html, /\.top-nav\s*\{[\s\S]*?align-self:\s*stretch;/);
  assert.match(html, /\.top-nav a\[aria-current="page"\]\s*\{[\s\S]*?color:\s*var\(--color-text\);/);
  assert.match(
    html,
    /\.top-nav-indicator\s*\{[\s\S]*?bottom:\s*-1px;[\s\S]*?left:\s*var\(--nav-indicator-left\);[\s\S]*?transform:\s*scaleX\(var\(--nav-indicator-scale\)\);[\s\S]*?transform-origin:\s*center;[\s\S]*?transform 150ms var\(--ease-out\),[\s\S]*?opacity 120ms var\(--ease-out\);/,
  );
  assert.doesNotMatch(html, /translateX\(var\(--nav-indicator-left\)\)|transform 220ms ease|width 220ms ease/);
  assert.match(html, /function setActiveNavigation\(activeLink\)/);
  assert.match(html, /function syncActiveNavigation\(\)/);
  assert.match(html, /function isSectionVisible\(section\)/);
  assert.match(html, /function getNavigationTargetByHash\(hash\)/);
  assert.match(html, /let pendingNavigationHash = window\.location\.hash;/);
  assert.match(html, /pendingNavigationUntil = Date\.now\(\) \+ 1600;/);
  assert.match(html, /--nav-indicator-scale", "0"/);
  assert.match(html, /--nav-indicator-scale", "1"/);
  assert.match(html, /requestAnimationFrame\(\(\) => \{/);
  assert.match(html, /let bestDistance = Number\.POSITIVE_INFINITY;/);
  assert.match(html, /const distance = Math\.abs\(sectionTop - activationLine\);/);
  assert.match(html, /link\.setAttribute\("aria-current", "page"\)/);
  assert.match(html, /window\.addEventListener\("hashchange", \(\) => \{/);
  assert.match(html, /class="menu-toggle"/);
  assert.match(html, /aria-controls="primary-navigation"/);
  assert.match(html, /aria-expanded="false"/);
  assert.match(
    html,
    /<a href="#selected-work"\s+aria-label="Selected Research">Selected Research<\/a>/,
  );
  assert.match(
    html,
    /<a href="#publications"\s+aria-label="Publications">Publications<\/a>/,
  );
  assert.match(html, /<a href="#service">Academic Service<\/a>/);
  assert.doesNotMatch(html, /class="nav-(?:full|short)"/);
  assert.doesNotMatch(html, />Pubs<\/span>|>Svc<\/span>/);
  assert.match(html, /<aside class="sidebar"/);
  assert.match(
    html,
    /<div class="portrait-wrapper"[^>]*>[\s\S]*?<span class="avatar-greeting" aria-hidden="true">🙌 Hi!<\/span>/,
  );
  assert.match(
    html,
    /animation:\s*greeting-shake 600ms var\(--ease-in-out\) 700ms 1 both;/,
  );
  assert.match(
    html,
    /@media \(hover: hover\) and \(pointer: fine\)\s*\{[\s\S]*?\.portrait-wrapper:hover \.avatar-greeting\s*\{[\s\S]*?animation:\s*none;[\s\S]*?transform:\s*scale\(1\.05\);/,
  );
  assert.doesNotMatch(html, /greeting-shake[^;]*infinite/);
  assert.match(
    html,
    /\.menu-toggle:active,[\s\S]*?\.theme-toggle:active\s*\{[\s\S]*?transform:\s*scale\(0\.97\);/,
  );
  assert.match(html, /class="theme-toggle"/);
  assert.match(html, /aria-label="Toggle color theme"/);
  assert.match(html, /systemThemeQuery\.addEventListener\("change", applySystemTheme\)/);
  assert.match(html, /:focus-visible/);
  assert.match(html, /prefers-reduced-motion/);
  assert.match(html, /prefers-color-scheme:\s*dark/);
  assert.doesNotMatch(html, /localStorage/);
  assert.match(html, /html\[data-theme="dark"\]/);
  assert.match(html, /--color-link:\s*#356f9f/i);
  assert.match(
    html,
    /:root\s*\{[\s\S]*?--color-page:\s*#ffffff;[\s\S]*?--color-sidebar:\s*#ffffff;/i,
  );
  assert.match(
    html,
    /html\[data-theme="dark"\]\s*\{[\s\S]*?--color-page:\s*#2d353b;[\s\S]*?--color-sidebar:\s*#2d353b;/i,
  );
  assert.match(
    html,
    /:root\s*\{[\s\S]*?--color-highlight-bg:\s*#fff3d6;[\s\S]*?--color-highlight-text:\s*#7a4300;/i,
  );
  assert.match(
    html,
    /html\[data-theme="dark"\]\s*\{[\s\S]*?--color-rule:\s*#46515a;[\s\S]*?--color-highlight-bg:\s*#44351f;[\s\S]*?--color-highlight-text:\s*#f1c77a;/i,
  );
  assert.match(
    html,
    /themeColor\.setAttribute\("content", isDark \? "#2d353b" : "#ffffff"\);/,
  );
  assert.match(html, /--sidebar-width:\s*250px/i);
  assert.match(
    html,
    /grid-template-columns:\s*var\(--sidebar-width\) minmax\(0,\s*1fr\)/i,
  );
  assert.match(html, /\.sidebar\s*\{[\s\S]*?position:\s*sticky/i);
  assert.match(html, /\.portrait-wrapper\s*\{[\s\S]*?align-self:\s*start;/);
  assert.match(html, /@media \(max-width:\s*680px\)/i);
  const narrowStylesStart = html.indexOf("@media (max-width: 680px)");
  const narrowStylesEnd = html.indexOf("@media (max-width: 520px)");
  assert.ok(narrowStylesStart >= 0);
  assert.ok(narrowStylesEnd > narrowStylesStart);
  const narrowStyles = html.slice(narrowStylesStart, narrowStylesEnd);
  assert.match(
    narrowStyles,
    /\.page\s*\{[\s\S]*?display:\s*flex;[\s\S]*?flex-direction:\s*column;/,
  );
  assert.match(narrowStyles, /\.sidebar\s*\{[\s\S]*?display:\s*contents;/);
  assert.match(narrowStyles, /\.content\s*\{[\s\S]*?display:\s*contents;/);
  assert.match(narrowStyles, /\.profile\s*\{[\s\S]*?order:\s*1;/);
  assert.match(narrowStyles, /\.about-copy\s*\{[\s\S]*?order:\s*2;/);
  assert.match(narrowStyles, /\.links-section\s*\{[\s\S]*?order:\s*3;/);
  assert.match(narrowStyles, /#news\s*\{[\s\S]*?order:\s*4;/);
  assert.match(
    html,
    /<h2 class="section-label" id="publications-title">Publications<\/h2>/,
  );
  assert.match(
    html,
    /<nav class="publication-year-jump" aria-label="Jump to publication year">/,
  );
  assert.match(
    html,
    /\.publication-year-jump a\s*\{\s*color:\s*var\(--color-link\);/,
  );
  assert.doesNotMatch(html, /all-publications-summary|<details class="all-publications"/);
  assert.match(html, /id="selected-work-title">Selected Research<\/h2>/);
  assert.match(
    html,
    /\.publication-image\s*\{[\s\S]*?width:\s*100%;[\s\S]*?height:\s*auto;[\s\S]*?object-fit:\s*contain;/,
  );
  assert.doesNotMatch(
    html,
    /\.publication-image\s*\{[^}]*?(?:aspect-ratio|max-height|object-fit:\s*cover)/,
  );
  assert.doesNotMatch(html, />Selected Publications</);
  assert.doesNotMatch(html, /class="abstract"|>Abstract</);
  assert.doesNotMatch(html, /Other Publications/);
  assert.match(html, /aria-label="GitHub"/);
  assert.match(html, /aria-label="Google Scholar"/);
  assert.match(html, /aria-label="ORCID"/);
  assert.doesNotMatch(
    html,
    /backdrop-filter|linear-gradient|radial-gradient|generated_images/i,
  );
});

test("contains all publication disclosures and source links", async () => {
  const html = await readFile(htmlUrl, "utf8");
  assert.equal((html.match(/class="publication-summary"/g) ?? []).length, 6);
  assert.match(
    html,
    /\.publication-summary\s*\{[\s\S]*?font-weight:\s*600;/,
  );
  assert.doesNotMatch(
    html,
    /\.publication-summary\s*\{[^}]*border-left:/,
  );
  assert.match(
    html,
    /Introduces the <strong>first framework<\/strong> to recover temporally consistent 3D poses/,
  );
  const selectedWork = html.slice(
    html.indexOf('id="selected-work"'),
    html.indexOf('id="publications"', html.indexOf('id="selected-work"')),
  );
  assert.doesNotMatch(selectedWork, /<p class="(?:authors|venue)">/);
  assert.doesNotMatch(
    selectedWork,
    /DRPose: A Diffusion-based Pose Refinement Framework for 3D Human Pose Estimation/,
  );
  assert.doesNotMatch(
    selectedWork,
    /\* Equal Contribution, ✉️ Corresponding author/,
  );
  assert.equal(
    (
      html.match(
        /<span class="tag">ICCV 2025<\/span>\s*<span class="tag">CCF-A<\/span>\s*<span class="tag tag-highlight">Highlight<\/span>/g,
      ) ?? []
    ).length,
    2,
  );
  assert.match(
    html,
    /\.tag-highlight\s*\{\s*background:\s*var\(--color-highlight-bg\);\s*color:\s*var\(--color-highlight-text\);/,
  );
  const publicationHeading = html.slice(
    html.indexOf('<div class="publications-heading">'),
    html.indexOf("</div>", html.indexOf('<div class="publications-heading">')),
  );
  assert.doesNotMatch(
    publicationHeading,
    /\* Equal Contribution, ✉️ Corresponding author/,
  );
  assert.doesNotMatch(html, /<p class="publication-note">/);
  assert.equal((html.match(/\(\* Equal Contribution\)/g) ?? []).length, 8);
  assert.ok((html.match(/class="publication-inline-links"/g) ?? []).length >= 11);

  const allPublications = html.slice(
    html.indexOf('<div class="all-publications">'),
    html.indexOf(
      '<section class="content-section" id="awards"',
      html.indexOf('<div class="all-publications">'),
    ),
  );
  assert.equal(
    (allPublications.match(/<article class="publication">/g) ?? []).length,
    12,
  );
  const compactVenues = [
    ...allPublications.matchAll(/<p class="venue">[\s\S]*?<\/p>/g),
  ];
  assert.equal(compactVenues.length, 12);
  for (const venue of compactVenues) {
    assert.doesNotMatch(venue[0], /·\s*(?:CCF-[ABC]|Highlight)/);
  }
  assert.doesNotMatch(allPublications, /class="abstract"|>Abstract</);
  for (const year of ["2026", "2025", "2024", "2023"]) {
    assert.match(
      allPublications,
      new RegExp(`id="publications-${year}-title">${year}</h4>`),
    );
    assert.match(allPublications, new RegExp(`href="#publications-${year}"`));
    assert.match(allPublications, new RegExp(`id="publications-${year}"`));
  }
  assert.doesNotMatch(allPublications, /publication-timeline|Publication timeline/);
  const chronologicalTitles = [
    "AnnyCrowd: Mixed-Age Crowd Reconstruction from a Single Image",
    "Crowd4D: Scene-Aware Monocular 4D Crowd Reconstruction",
    "MuRE: Multi-Relationship Encoder for 3D Human Pose Estimation",
    "DRPose: A Diffusion-based Pose Refinement Framework for 3D Human Pose Estimation",
    "DBMambaPose: Decoupled Spatial-Temporal Bidirectional State Space Model for Efficient 3D Human Pose Estimation",
    "DyCrowd: Towards Dynamic Crowd Reconstruction from a Large-scene Video",
    "RESCUE: Crowd Evacuation Simulation via Controlling SDM-United Characters",
    "Double-chain Graph Convolution Transformer for 3D Human Pose Estimation",
    "ICFNet: Interactive-complementary fusion network for monocular 3D human pose estimation",
    "Diffusion-based Pose Refinement and Multi-Hypothesis Generation for 3D Human Pose Estimation",
    "Hierarchical flow learning for low-light image enhancement",
    "Global and local spatio-temporal encoder for 3D human pose estimation",
  ];
  const chronologicalPositions = chronologicalTitles.map((title) =>
    allPublications.indexOf(title),
  );
  assert.ok(chronologicalPositions.every((position) => position >= 0));
  assert.deepEqual(
    [...chronologicalPositions].sort((a, b) => a - b),
    chronologicalPositions,
  );
  for (const journalMetric of [
    "CAS Q1 Top",
    "CAS Q2",
    "IF 20.4",
    "IF 10.8",
    "IF 9.9",
    "IF 9.1",
    "IF 6.7",
    "IF 6.3",
  ]) {
    assert.match(html, new RegExp(escapeRegExp(journalMetric)));
  }
  assert.equal(
    (html.match(/title="2025 JIF, released June 2026:/g) ?? []).length,
    10,
  );
  const cviuTags = html.match(
    /<div class="publication-tags">\s*<span class="tag">CVIU 2026<\/span>[\s\S]*?<\/div>/,
  )?.[0];
  assert.ok(cviuTags);
  assert.doesNotMatch(cviuTags, /CAS Q3|IF 3\.6/);
  assert.doesNotMatch(html, /Highest JIF from|IF 23\.6|IF 11\.1|IF 9\.7/);
  assert.match(html, /<span class="tag">CICAI 2026<\/span>\s*<span class="tag">CAAI-A<\/span>/);
  assert.doesNotMatch(html, /Download PDF/);
  const annyCrowdPublication = allPublications.match(
    /<article class="publication">[\s\S]*?AnnyCrowd: Mixed-Age Crowd Reconstruction from a Single Image[\s\S]*?<\/article>/,
  )?.[0];
  assert.ok(annyCrowdPublication);
  assert.match(
    annyCrowdPublication,
    /<strong>Hongbo Kang\*<\/strong>, Guoqi Wang\*[\s\S]*?\(\* Equal Contribution\)/,
  );
  assert.match(
    annyCrowdPublication,
    /<a href="#">Paper<\/a>[\s\S]*?<a href="#">Project Page<\/a>[\s\S]*?<a href="#">Code<\/a>/,
  );
  assert.match(html, /https:\/\/github\.com\/KHB1698\/Crowd4D/);
  assert.equal(
    (html.match(/https:\/\/arxiv\.org\/abs\/2607\.19517/g) ?? []).length,
    2,
  );
  assert.doesNotMatch(html, /icml\.cc\/virtual\/2026\/poster\/65335/);
  assert.match(html, /https:\/\/github\.com\/KHB1698\/DyCrowd/);
  assert.match(html, /https:\/\/github\.com\/xiaolin0314\/RESCUE/);
  assert.match(html, /https:\/\/orcid\.org\/0000-0001-5771-3886/);
  assert.match(html, /mailto:hbkang@tju\.edu\.cn/);
});

test("uses only local project profile and publication imagery", async () => {
  const html = await readFile(htmlUrl, "utf8");
  assert.match(
    html,
    /<link\s+rel="icon"\s+type="image\/svg\+xml"\s+href="data:image\/svg\+xml,[^"]*%3EHK%3C\/text%3E/s,
  );
  assert.doesNotMatch(
    html,
    /<link\s+rel="icon"[^>]+khb\.jpeg/,
  );
  assert.doesNotMatch(html, /<img[^>]+src="https?:\/\//);
  for (const localAsset of [
    "imgs/hongbo.jpeg",
    "imgs/crowd4d.png",
    "imgs/dycrowd.jpg",
    "imgs/rescue.jpg",
    "imgs/dcgct.png",
    "imgs/drpose.png",
    "imgs/glste.png",
  ]) {
    assert.match(html, new RegExp(escapeRegExp(localAsset)));
    await access(new URL(`../${localAsset}`, import.meta.url));
  }
});
