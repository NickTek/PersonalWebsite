// ============================================
// CLICK-TO-REVEAL EMAIL
// EDIT: set data-user and data-domain on the button in index.html
// ============================================
const emailBtn = document.getElementById('email-reveal');
emailBtn.addEventListener('click', () => {
  const user = emailBtn.dataset.user;
  const domain = emailBtn.dataset.domain;
  const email = `${user}@${domain}`;
  emailBtn.textContent = email;
  emailBtn.setAttribute('href', `mailto:${email}`);
  emailBtn.onclick = null;
});

// ============================================
// FOOTER YEAR
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();
