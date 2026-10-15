// ---------- Mobile menu ----------
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
});

// ---------- Scroll animation ----------
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- Active nav link ----------
const sections = document.querySelectorAll('header, section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) {
            current = sec.getAttribute('id') || current;
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
});

// ---------- Typing effect ----------
const roles = ['HTML & CSS', 'JavaScript', 'WordPress', 'C++ & Java'];
const typedEl = document.getElementById('typed');
let roleIndex = 0, charIndex = 0, deleting = false;

function type() {
    const word = roles[roleIndex];
    typedEl.textContent = word.substring(0, charIndex);

    if (!deleting && charIndex < word.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (!deleting) {
        deleting = true;
        setTimeout(type, 1200);
    } else if (charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 300);
    }
}
type();

// ---------- Contact form (email app khol dega) ----------
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent('Portfolio message from ' + name);
    const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');
    window.location.href = 'mailto:mahaali.dev@gmail.com?subject=' + subject + '&body=' + body;
});
