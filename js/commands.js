// ===== Data =====
const DATA = {
  name: "정해창",
  role: "Red Team Operator",
  location: "한국",
  bio: [
    "공격자 관점에서 실제 위협 시나리오를 설계하고 검증하는 Red Team Operator입니다.",
    "자동화에 관심이 많아 탐색(recon) 과정에 대한 자동화를 진행하고 있습니다.",
    "BLUE팀과 업무 협의를 통해 서로 윈윈하는 레드티밍을 희망합니다."
  ],
  skills: {
  "Core Capabilities (핵심 역량)": [
    "Red Team Operations / Adversary Simulation (내부·외부 환경 대상 WEB · APP · CS · INFRA · Active Directory 공격 시나리오 수행)",
    "Detection Evasion (WAF, EDR, SIEM 등 보안 탐지 체계 우회 전략 설계 및 검증)",
    "Command & Control (C2) Infrastructure (sliver 구축)"
  ],
  "Offensive Security (공격 기술)": [
    "Recon / OSINT / Attack Surface Enumeration (외부 노출 자산 탐색 및 공격 표면 식별)",
    "Web Application Exploitation (인증/인가 취약점, IDOR, SSRF, XSS, RCE 등 취약점 분석 및 공격)",
    "Active Directory 공격 및 Lateral Movement (권한 상승, 내부 이동, 도메인 장악 시나리오 수행)",
    "Privilege Escalation (Linux / Windows 환경 권한 상승 기법 적용)",
    "Persistence & Defense Evasion (지속성 확보 및 보안 탐지 회피 기법 적용)"
  ],
  "Tooling & Automation (공격 자동화 / 도구 개발)": [
    "Burp Suite Extension 개발",
    "Command & Control (C2) 기능 확장 및 탐지 로직 우회",
    "터널링 우회",
    "n8n을 이용한 24/7 RECON / OSINT 자동화"
  ],
  "Programming Languages (개발 언어)": [
    "Python (공격 자동화, PoC, Recon 도구 개발)",
    "Java (WEB·APP Application 분석)"
  ]

},
  projects: [
    {
      name: "Terminal Resume",
      desc: "A terminal-style interactive portfolio website",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/hackchang/terminal-resume"
    },
    {
      name: "Project Alpha",
      desc: "A full-stack web application for task management",
      tech: "React, Node.js, PostgreSQL",
      link: "https://github.com/hackchang/project-alpha"
    },
    {
      name: "CryptoTracker",
      desc: "Real-time cryptocurrency price tracking dashboard",
      tech: "Vue.js, Python, WebSocket",
      link: "https://github.com/hackchang/crypto-tracker"
    }
  ],
  awards: [
    {
      name: "Computer Science, B.S.",
      detail: "University Name | 2020 - 2024"
    },
    {
      name: "AWS Certified Solutions Architect",
      detail: "Amazon Web Services | 2024"
    },
    {
      name: "SQLD (SQL Developer)",
      detail: "한국데이터산업진흥원 | 2023"
    }
  ],
  socials: [
    { icon: "◈", name: "GitHub", link: "https://github.com/hackchang", handle: "@hackchang" },
    { icon: "◆", name: "Blog", link: "https://hackchang.sh", handle: "hackchang.sh" },
    { icon: "▣", name: "LinkedIn", link: "https://linkedin.com/in/hackchang", handle: "hackchang" },
    { icon: "◉", name: "Email", link: "mailto:hello@hackchang.sh", handle: "hello@hackchang.sh" }
  ]
};

// ===== Command Definitions =====
const COMMANDS = {
  help: {
    desc: "Show available commands",
    execute: cmdHelp
  },
  about: {
    desc: "Who is hackchang?",
    execute: cmdAbout
  },
  skills: {
    desc: "View technical skills",
    execute: cmdSkills
  },
  projects: {
    desc: "View projects",
    execute: cmdProjects
  },
  awards: {
    desc: "View awards & certifications",
    execute: cmdAwards
  },
  socials: {
    desc: "View social links",
    execute: cmdSocials
  },
  welcome: {
    desc: "Display welcome message",
    execute: cmdWelcome
  }
};

// ===== Command Functions =====

function cmdHelp() {
  let html = '<div class="section-title">Available Commands</div>';
  html += '<div class="divider">────────────────────────</div>';
  for (const [cmd, info] of Object.entries(COMMANDS)) {
    html += `<div class="help-row">
      <span class="help-cmd">${cmd}</span>
      <span class="help-desc">${info.desc}</span>
    </div>`;
  }
  html += '<br><div class="hint">Tip: Use Tab for auto-completion, ↑↓ for history</div>';
  return html;
}

function cmdAbout() {
  let html = `<div class="section-title">About ${DATA.name}</div>`;
  html += '<div class="divider">────────────────────────</div>';
  html += `<div><span class="info-label">Name:</span> <span class="info-value">${DATA.name}</span></div>`;
  html += `<div><span class="info-label">Role:</span> <span class="info-value">${DATA.role}</span></div>`;
  html += `<div><span class="info-label">Location:</span> <span class="info-value">${DATA.location}</span></div>`;
  html += '<br>';
  DATA.bio.forEach(line => {
    html += `<div class="info-value">${line}</div>`;
  });
  return html;
}

function cmdSkills() {
  let html = '<div class="section-title">Technical Skills</div>';
  html += '<div class="divider">────────────────────────</div>';
  for (const [category, items] of Object.entries(DATA.skills)) {
    html += `<div class="skill-category">▸ ${category}</div>`;
    items.forEach(item => {
      html += `<div class="skill-item">  - ${item}</div>`;
    });
  }
  return html;
}

function cmdProjects() {
  let html = '<div class="section-title">Projects</div>';
  html += '<div class="divider">────────────────────────</div>';
  DATA.projects.forEach((proj, i) => {
    if (i > 0) html += '<br>';
    html += `<div class="project-name">◈ ${proj.name}</div>`;
    html += `<div class="project-desc">${proj.desc}</div>`;
    html += `<div class="project-tech">Tech: ${proj.tech}</div>`;
    html += `<div class="project-link" style="padding-left:16px">↳ <a href="${sanitizeUrl(proj.link)}" target="_blank" rel="noopener">${proj.link}</a></div>`;
  });
  return html;
}

function cmdAwards() {
  let html = '<div class="section-title">Awards & Certifications</div>';
  html += '<div class="divider">────────────────────────</div>';
  DATA.awards.forEach((award, i) => {
    if (i > 0) html += '<br>';
    html += `<div class="edu-name">▸ ${award.name}</div>`;
    html += `<div class="edu-detail">${award.detail}</div>`;
  });
  return html;
}

function cmdSocials() {
  let html = '<div class="section-title">Social Links</div>';
  html += '<div class="divider">────────────────────────</div>';
  DATA.socials.forEach(social => {
    html += `<div class="social-row">
      <span class="social-icon">${social.icon}</span>
      <span class="social-name">${social.name}</span>
      <span class="social-link"><a href="${sanitizeUrl(social.link)}" target="_blank" rel="noopener">${social.handle}</a></span>
    </div>`;
  });
  return html;
}

function cmdWelcome() {
  const logoHtml = ASCII_LOGO_LINES.map(line => escapeHtml(line)).join('\n');
  const charHtml = ASCII_CHAR_LINES.map(line => escapeHtml(line)).join('\n');

  let html = '<div class="welcome-container">';
  html += '<div class="welcome-left">';
  html += `<div class="ascii-art">${logoHtml}</div>`;
  html += '<div class="welcome-msg">';
  html += 'Welcome to <strong>hackchang</strong>\'s terminal portfolio. <span class="version">(v1.0.0)</span>';
  html += '</div>';
  html += '<div class="divider">────</div>';
  html += `<div>For a list of available commands, type '<span class="help-cmd" style="min-width:auto;cursor:pointer" onclick="executeFromClick(\'help\')">help</span>'.</div>`;
  html += '<div class="divider">────</div>';
  html += '</div>';
  html += `<div class="welcome-right"><div class="ascii-art">${charHtml}</div></div>`;
  html += '</div>';
  return html;
}

// ===== Utility Functions =====

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function sanitizeUrl(url) {
  try {
    const parsed = new URL(url);
    if (['http:', 'https:', 'mailto:'].includes(parsed.protocol)) {
      return parsed.href;
    }
  } catch (e) {}
  return '#';
}
