// ===== Data (신규 입사 자기소개용) =====
const DATA = {
  name: "정해창",
  role: "Red Team Operator",
  dob: "1997.01.03",
  mbti: "ENFJ",

  greeting: [
    "이번에 새롭게 합류한 <strong>정해창</strong>입니다. 👋",
    "공격자 관점에서 위협을 설계하고 검증해 온 Red Team Operator예요.",
    "앞으로 잘 부탁드립니다!"
  ],

  about: [
    "공격자 관점에서 실제 위협 시나리오를 설계하고 검증하는 Red Team Operator입니다.",
    "반복되는 일은 자동화로 덜어내는 걸 좋아해, AI를 활용하여 RECON 자동화와 Burp Extension 같은 도구를 직접 만들어 업무를 진행했습니다.",
    "무엇보다 함께 성장하고, 서로 윈윈하는 회사생활을 지향합니다."
  ],

  // 이전 경력 (신규 입사 → 현대오토에버는 '이전 경력'으로)
  career: [
    {
      company: "현대오토에버",
      role: "RED팀 · 책임",
      // TODO: 실제 재직 종료 시점으로 수정
      period: "5년",
      items: [
        "현대자동차 그룹 대상 연간 11개 국내외 그룹사 Adversary Simulation 및 이행점검 수행",
        "Web · Mobile · C/S Application 취약점 진단",
        "피싱 모의훈련 플랫폼 운영 및 AI를 활용한 RECON 자동화 구축",
        "팀 내 협업용 Burp Suite Extension 개발"
      ]
    }
  ],

  skills: {
    "Core Capabilities (핵심 역량)": [
      "Red Team Operations / Adversary Simulation (WEB · APP · CS · INFRA · Active Directory 공격 시나리오 수행)",
      "Detection Evasion (WAF, EDR, SIEM 등 보안 탐지 체계 우회 전략 설계 및 검증)",
      "Command & Control (C2) Infrastructure (sliver 구축)"
    ],
    "Offensive Security (공격 기술)": [
      "Recon / OSINT / Attack Surface Enumeration",
      "Web Application Exploitation (인증/인가, IDOR, SSRF, XSS, RCE 등)",
      "Active Directory 공격 및 Lateral Movement",
      "Privilege Escalation (Linux / Windows)",
      "Persistence & Defense Evasion"
    ],
    "Tooling & Automation (자동화 / 도구 개발)": [
      "Burp Suite Extension 개발",
      "C2 기능 확장 및 탐지 로직 우회",
      "터널링 우회",
      "RECON / OSINT 자동화"
    ],
    "Programming Languages (개발 언어)": [
      "Python (공격 자동화, PoC, Recon 도구 개발)",
      "Java (WEB · APP Application 분석)"
    ]
  },

  // 업무 · 협업 스타일 (자기소개용)
  workStyle: [
    { title: "공격자 관점", desc: "체크리스트를 넘어, 실제 공격자가 할 법한 시나리오를 끝까지 그려보고 검증합니다." },
    { title: "자동화 우선", desc: "손이 두 번 가는 일은 도구로 만듭니다. 사람은 판단에, 반복은 자동화에." },
    { title: "소통 지향", desc: "기술만큼 소통이 중요하다고 생각합니다. 여러 사람들과 꾸준히 대화하며 소통합니다." },
    { title: "편하게 불러주세요", desc: "모르는 건 묻고 아는 건 나눕니다. 저에게 궁금하신 점은 언제든 가볍게 물어봐 주세요." }
  ],

  // 관심사 · 취미 (아이스브레이커)
  interests: [
    "CTF 참가 — 팀으로 국내외 대회에 꾸준히 출전 (DEFCON CTF Finals 진출 경험)",
    "AI를 활용하여 보안 자동화 도구 · 워크플로우 만들기",
    "AI를 활용하여 업무 효율성 향상"
    // TODO: 개인 취미를 자유롭게 추가/수정하세요 (예: 러닝, 게임, 커피 등)
  ],

  // 새 팀에서의 포부
  goals: [
    "팀에 빠르게 녹아들어 '도움이 되는 동료'가 되겠습니다.",
    "제가 가진 공격 관점과 자동화 경험으로 자회사의 빈틈을 찾아 보안사고 전 예방하여 팀에 보탬이 되겠습니다."
  ],

  certifications: [
    { name: "정보처리기사", detail: "한국산업인력공단 | 2020" },
    { name: "리눅스마스터 2급", detail: "한국정보통신진흥협회 | 2017" },
    { name: "워드프로세서 1급", detail: "대한상공회의소 | 2013" }
  ],

  awards: [
    { name: "[CTF] DEFCON 33 CTF Finals - 10위", detail: "Nautilus Institute's DEFCON 33 Final | 2025" },
    { name: "제 3회 전라남도 웹 취약점 경진대회 - 우수상", detail: "한국교통안전공단 이사장상 | 2025" },
    { name: "제 5회 호남사이버보안 웹 취약점 경진대회 - 최우수상 (1위)", detail: "동신대학교 주최 | 2024" },
    { name: "제 2회 전라남도 웹 취약점 경진대회 - 최우수상", detail: "전라남도 주최 | 2024" },
    { name: "제 6회 TS 보안 허점을 찾아라! - 최우수상", detail: "한국교통안전공단 주최 | 2024" },
    { name: "제 5회 TS 보안 허점을 찾아라! - 장려상", detail: "한국교통안전공단 주최 | 2023" },
    { name: "디지털 포렌식 챌린지 KDFS - 최우수상 (1위)", detail: "한국디지털포렌식학회 주최 경찰청장상 | 2020" },
    { name: "제 2회 TS 보안 허점을 찾아라! - 최우수상", detail: "한국교통안전공단 주최 | 2020" },
    { name: "제 1회 TS 보안 허점을 찾아라! - 우수상", detail: "한국교통안전공단 주최 | 2019" }
  ],

  socials: [
    { icon: "✉", name: "Email", link: "mailto:haechang__@naver.com", handle: "haechang__@naver.com" },
    { icon: "◈", name: "GitHub", link: "https://github.com/hackchang", handle: "@hackchang" },
    { icon: "◆", name: "Blog", link: "https://hackchang.tistory.com", handle: "hackchang Blog" }
  ]
};

// ===== Command Definitions =====
const COMMANDS = {
  help:    { desc: "사용 가능한 명령어 보기",            execute: cmdHelp },
  whoami:  { desc: "정해창은 누구? (인사 + 소개)",       execute: cmdWhoami },
  career:  { desc: "이전 경력",                          execute: cmdCareer },
  skills:  { desc: "기술 역량",                          execute: cmdSkills },
  style:   { desc: "업무 · 협업 스타일 (이렇게 일해요)", execute: cmdStyle },
  hobby:   { desc: "관심사 · 취미",                      execute: cmdHobby },
  awards:  { desc: "수상 이력",                          execute: cmdAwards },
  certs:   { desc: "보유 자격증",                        execute: cmdCertifications },
  goal:    { desc: "새 팀에서의 포부",                   execute: cmdGoal },
  contact: { desc: "연락처 · 링크",                      execute: cmdContact },
  clear:   { desc: "화면 지우기",                        execute: () => "__CLEAR__" }
};

// ===== Command Functions =====

function cmdHelp() {
  let html = '<div class="section-title">Available Commands</div>';
  html += '<div class="divider">────────────────────────</div>';
  for (const [cmd, info] of Object.entries(COMMANDS)) {
    html += `<div class="help-row">
      <span class="help-cmd" style="cursor:pointer" onclick="executeFromClick('${cmd}')">${cmd}</span>
      <span class="help-desc">${info.desc}</span>
    </div>`;
  }
  html += '<br><div class="hint">Tip: 명령어 클릭 · Tab 자동완성 · ↑↓ 히스토리 · Ctrl+L 화면 지우기</div>';
  return html;
}

function cmdWhoami() {
  let html = `<div class="section-title">About ${DATA.name}</div>`;
  html += '<div class="divider">────────────────────────</div>';
  html += `<div><span class="info-label">Name:</span> <span class="info-value">${DATA.name}</span></div>`;
  html += `<div><span class="info-label">Role:</span> <span class="info-value">${DATA.role}</span></div>`;
  html += `<div><span class="info-label">DOB:</span> <span class="info-value">${DATA.dob}</span></div>`;
  html += `<div><span class="info-label">MBTI:</span> <span class="info-value">${DATA.mbti}</span></div>`;
  html += '<br>';
  DATA.about.forEach(line => {
    html += `<div class="info-value">${line}</div>`;
  });
  return html;
}

function cmdCareer() {
  let html = '<div class="section-title">Career (이전 경력)</div>';
  html += '<div class="divider">────────────────────────</div>';
  DATA.career.forEach((job, i) => {
    if (i > 0) html += '<br>';
    html += `<div class="edu-name">▸ ${job.company} — ${job.role}</div>`;
    html += `<div class="edu-detail">${job.period}</div>`;
    job.items.forEach(item => {
      html += `<div class="skill-item">  - ${item}</div>`;
    });
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

function cmdStyle() {
  let html = '<div class="section-title">이렇게 일해요</div>';
  html += '<div class="divider">────────────────────────</div>';
  DATA.workStyle.forEach(s => {
    html += `<div class="skill-category">▸ ${s.title}</div>`;
    html += `<div class="skill-item">  ${s.desc}</div>`;
  });
  return html;
}

function cmdHobby() {
  let html = '<div class="section-title">관심사 · 취미</div>';
  html += '<div class="divider">────────────────────────</div>';
  DATA.interests.forEach(item => {
    html += `<div class="skill-item">▸ ${item}</div>`;
  });
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

function cmdGoal() {
  let html = '<div class="section-title">새 팀에서의 포부</div>';
  html += '<div class="divider">────────────────────────</div>';
  DATA.goals.forEach(line => {
    html += `<div class="info-value">▸ ${line}</div>`;
  });
  html += '<br><div class="hint">함께 일하게 되어 기쁩니다. 잘 부탁드립니다! 🙌</div>';
  return html;
}

function cmdContact() {
  let html = '<div class="section-title">Contact</div>';
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
  DATA.greeting.forEach(line => {
    html += `<div class="info-value">${line}</div>`;
  });
  html += '</div>';
  html += '<div class="divider">────</div>';
  html += `<div>명령어 목록을 보려면 '<span class="help-cmd" style="min-width:auto;cursor:pointer" onclick="executeFromClick('help')">help</span>' 를 입력하세요.</div>`;
  html += `<div class="hint">추천: `;
  html += `<span class="help-cmd" style="min-width:auto;cursor:pointer" onclick="executeFromClick('whoami')">whoami</span> · `;
  html += `<span class="help-cmd" style="min-width:auto;cursor:pointer" onclick="executeFromClick('career')">career</span> · `;
  html += `<span class="help-cmd" style="min-width:auto;cursor:pointer" onclick="executeFromClick('style')">style</span> · `;
  html += `<span class="help-cmd" style="min-width:auto;cursor:pointer" onclick="executeFromClick('contact')">contact</span>`;
  html += `</div>`;
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
