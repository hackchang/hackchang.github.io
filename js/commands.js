// ===== Data =====
const DATA = {
  name: "정해창",
  role: "Red Team Operator",
  bio: [
    "공격자 관점에서 실제 위협 시나리오를 설계하고 검증하는 Red Team Operator입니다.",
    "자동화에 관심이 많아 N8N을 통한 탐색(recon) 과정에 대한 자동화를 제작하고 있습니다.",
    "장점인 커뮤니케이션 능력을 살려, BLUE, PURPLE팀과 업무 협의를 통해 서로 윈윈하는 레드티밍을 희망합니다."
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
  certifications: [
    {
      name: "워드프로세서 1급",
      detail: "대한상공회의소 | 2013"
    },
    {
      name: "리눅스마스터 2급",
      detail: "한국정보통신진흥협회 | 2017"
    },
    {
      name: "정보처리기사",
      detail: "한국산업인력공단 | 2020"
    },
  ],
  awards: [
    {
      name: "[CTF] DEFCON 33 CTF Finals 10rd",
      detail: "Nautilus Institute's DEFCON 33 Final | 2025"
    },
    {
      name: "제 1회 TS 보안 허점을 찾아라! - 우수상",
      detail: "한국교통안전공단 주최 | 2019"
    },
    {
      name: "디지털 포렌식 챌린지 KDFS - 최우수상 (1위)",
      detail: "한국디지털포렌식학회 주최 경찰청장상 | 2020"
    },
    {
      name: "제 2회 TS 보안 허점을 찾아라! - 최우수상",
      detail: "한국교통안전공단 주최 | 2020"
    },
    {
      name: "제 5회 TS 보안 허점을 찾아라! - 장려상",
      detail: "한국교통안전공단 주최 | 2023"
    },
    {
      name: "제 2회 전라남도 웹 취약점 경진대회 - 최우수상",
      detail: "전라남도 주최 | 2024"
    },
    {
      name: "제 5회 호남사이버보안 콘퍼런스 웹 취약점 경진대회 - 최우수상 (1위)",
      detail: "동신대학교 주최 | 2024"
    },
    {
      name: "제 6회 TS 보안 허점을 찾아라! - 최우수상",
      detail: "한국교통안전공단 주최 | 2024"
    },
    {
      name: "제 3회 전라남도 웹 취약점 경진대회 - 우수상",
      detail: "한국교통안전공단 주최 한국교통안전공단 이사장상 | 2025"
    },

  ],
  socials: [
    { icon: "◈", name: "GitHub", link: "https://github.com/hackchang", handle: "@hackchang" },
    { icon: "◆", name: "Blog", link: "https://hackchang.tistory.com", handle: "hackchang Blog" }
  ]
};

// ===== Command Definitions =====
const COMMANDS = {
  help: {
    desc: "Show available commands",
    execute: cmdHelp
  },
  about: {
    desc: "Who is 정해창?",
    execute: cmdAbout
  },
  skills: {
    desc: "View technical skills",
    execute: cmdSkills
  },
  awards: {
    desc: "View awards",
    execute: cmdAwards
  },
  certifications: {
    desc: "View certifications",
    execute: cmdCertifications
  },
  socials: {
    desc: "View social links",
    execute: cmdSocials
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

function cmdCertifications() {
  let html = '<div class="section-title">Certifications</div>';
  html += '<div class="divider">────────────────────────</div>';
  DATA.certifications.forEach((cert, i) => {
    if (i > 0) html += '<br>';
    html += `<div class="edu-name">◈ ${cert.name}</div>`;
    html += `<div class="edu-detail">${cert.detail}</div>`;
  });
  return html;
}

function cmdAwards() {
  let html = '<div class="section-title">Awards</div>';
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
  html += 'Welcome to <strong>hackchang</strong>\'s terminal portfolio.';
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
