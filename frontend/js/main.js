// ═══════════════════════════════════════════════════════════
// Sitcod3 Lab — Main JavaScript
// ═══════════════════════════════════════════════════════════

// API Configuration
const API_BASE = '/api';

// ═══ Navigation Scroll State ═══
const nav = document.getElementById('mainNav');
let lastScrollY = 0;

function handleNavScroll() {
    const currentScrollY = window.scrollY;
    nav.classList.toggle('scrolled', currentScrollY > 10);
    lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleNavScroll, { passive: true });

// ═══ Scroll Reveal with IntersectionObserver ═══
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -40px 0px' 
    });

    revealElements.forEach(el => observer.observe(el));
}

// ═══ Card Mouse Tracking for Radial Gradient ═══
function initCardEffects() {
    const cards = document.querySelectorAll('.feature-item, .module-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });
    });
}

// ═══ Smooth Scroll for Anchor Links ═══
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

// ═══ Nav Link Active State ═══
function initNavLinks() {
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    
    // Click handler
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Scroll spy
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                links.forEach(link => {
                    link.classList.toggle('active', 
                        link.getAttribute('href') === `#${id}`
                    );
                });
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => observer.observe(section));
}

// ═══ Button Interactions ═══
function initButtonEffects() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        btn.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// ═══ API Functions ═══
async function fetchHealth() {
    try {
        const response = await fetch(`${API_BASE}/health`);
        return await response.json();
    } catch (error) {
        console.warn('API not available:', error.message);
        return null;
    }
}

async function fetchProjects() {
    try {
        const response = await fetch(`${API_BASE}/projects`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return null;
    }
}

async function submitContact(formData) {
    try {
        const response = await fetch(`${API_BASE}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error submitting contact:', error);
        return { success: false, error: error.message };
    }
}

// ═══ Mobile Menu (if implemented later) ═══
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (!menuBtn) return;
    
    menuBtn.addEventListener('click', () => {
        // Toggle mobile menu - can be expanded
        document.querySelector('.nav-links')?.classList.toggle('mobile-open');
    });
}

// ═══ Initialize Everything ═══
function init() {
    initScrollReveal();
    initCardEffects();
    initSmoothScroll();
    initNavLinks();
    initButtonEffects();
    initMobileMenu();
    
    // Check API health (optional)
    fetchHealth().then(health => {
        if (health) {
            console.log(`✓ Sitcod3 Lab API: ${health.status}`);
        }
    });
    
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   Sitcod3 Lab — Frontend Loaded                           ║
║                                                           ║
║   "Where the art of code meets the science                ║
║    of intelligence."                                      ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
    `);
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for module usage
export { fetchProjects, submitContact, fetchHealth };
