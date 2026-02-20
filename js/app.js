// ===== State =====
const commandHistory = [];
let historyIndex = -1;

// ===== DOM Elements =====
const output = document.getElementById('output');
const commandInput = document.getElementById('command-input');
const terminalBody = document.getElementById('terminal-body');

// ===== Initialize =====
function init() {
  // Load saved theme
  const savedTheme = localStorage.getItem('terminal-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // Show welcome message
  appendOutput(cmdWelcome());

  // Focus input
  commandInput.focus();

  // Event listeners
  commandInput.addEventListener('keydown', handleKeyDown);
  terminalBody.addEventListener('click', () => commandInput.focus());
}

// ===== Input Handling =====
function handleKeyDown(e) {
  switch (e.key) {
    case 'Enter':
      handleEnter();
      break;
    case 'ArrowUp':
      e.preventDefault();
      navigateHistory(-1);
      break;
    case 'ArrowDown':
      e.preventDefault();
      navigateHistory(1);
      break;
    case 'Tab':
      e.preventDefault();
      handleTab();
      break;
    case 'l':
      if (e.ctrlKey) {
        e.preventDefault();
        executeClear();
      }
      break;
  }
}

function handleEnter() {
  const rawInput = commandInput.value.trim();
  commandInput.value = '';

  // Add command line to output
  appendCmdLine(rawInput);

  if (rawInput === '') return;

  // Add to history
  commandHistory.push(rawInput);
  historyIndex = commandHistory.length;

  // Parse command and args
  const parts = rawInput.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1).join(' ');

  // Execute command
  executeCommand(cmd, args);
}

function executeCommand(cmd, args) {
  if (COMMANDS[cmd]) {
    const result = COMMANDS[cmd].execute(args);
    if (result === '__CLEAR__') {
      executeClear();
    } else {
      appendOutput(result);
    }
  } else {
    appendOutput(
      `<div class="error-msg">Command not found: ${escapeHtml(cmd)}</div>` +
      `<div class="hint">Type 'help' to see available commands.</div>`
    );
  }
  scrollToBottom();
}

// Called from clickable commands in output
function executeFromClick(cmd) {
  appendCmdLine(cmd);
  commandHistory.push(cmd);
  historyIndex = commandHistory.length;
  executeCommand(cmd, '');
}

function executeClear() {
  output.innerHTML = '';
}

// ===== History Navigation =====
function navigateHistory(direction) {
  if (commandHistory.length === 0) return;

  historyIndex += direction;

  if (historyIndex < 0) {
    historyIndex = 0;
  } else if (historyIndex >= commandHistory.length) {
    historyIndex = commandHistory.length;
    commandInput.value = '';
    return;
  }

  commandInput.value = commandHistory[historyIndex];
  // Move cursor to end
  setTimeout(() => {
    commandInput.selectionStart = commandInput.selectionEnd = commandInput.value.length;
  }, 0);
}

// ===== Tab Completion =====
function handleTab() {
  const input = commandInput.value.trim().toLowerCase();
  if (!input) {
    // Show all commands
    const allCmds = Object.keys(COMMANDS).join('  ');
    appendOutput(`<div class="tab-suggestion">${allCmds}</div>`);
    scrollToBottom();
    return;
  }

  const matches = Object.keys(COMMANDS).filter(cmd => cmd.startsWith(input));

  if (matches.length === 1) {
    commandInput.value = matches[0];
  } else if (matches.length > 1) {
    appendOutput(`<div class="tab-suggestion">${matches.join('  ')}</div>`);
    scrollToBottom();
  }
}

// ===== Output Helpers =====
function appendOutput(html) {
  const div = document.createElement('div');
  div.className = 'output-block';
  div.innerHTML = html;
  output.appendChild(div);
  scrollToBottom();
}

function appendCmdLine(text) {
  const div = document.createElement('div');
  div.className = 'cmd-line';
  div.innerHTML = `<span class="prompt">visitor@hackchang.sh:~$</span> <span class="cmd-text">${escapeHtml(text)}</span>`;
  output.appendChild(div);
}

function scrollToBottom() {
  requestAnimationFrame(() => {
    terminalBody.scrollTop = terminalBody.scrollHeight;
  });
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', init);
