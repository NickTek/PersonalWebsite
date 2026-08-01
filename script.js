// ============================================
// THEME TOGGLE (remembers choice via localStorage)
// ============================================
const root = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// On load: use saved preference, or fall back to system preference
const saved = localStorage.getItem('theme');
if (saved) {
  applyTheme(saved);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
}

toggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ============================================
// CLICK-TO-REVEAL EMAIL (keeps it off the page source as plain text)
// EDIT: set data-user and data-domain on the button in index.html
// ============================================
const emailBtn = document.getElementById('email-reveal');
emailBtn.addEventListener('click', () => {
  const user = emailBtn.dataset.user;
  const domain = emailBtn.dataset.domain;
  const email = `${user}@${domain}`;
  emailBtn.textContent = email;
  emailBtn.setAttribute('href', `mailto:${email}`);
  emailBtn.onclick = null; // stop re-triggering after reveal
});

// ============================================
// FOOTER YEAR
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();
