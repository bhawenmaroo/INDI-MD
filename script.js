// Anti-flicker: Apply theme BEFORE page renders
(function() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
})();

document.addEventListener('DOMContentLoaded', () => {
    const moonIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    const sunIcon  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

    // --- 1. Theme Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    function updateThemeIcon(theme) {
        if (!themeToggleBtn) return;
        themeToggleBtn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
        themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }

    // Set icon on load
    updateThemeIcon(html.getAttribute('data-theme'));

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateThemeIcon(next);
        });
    }

    // --- 2. Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        // Run once on load in case page is already scrolled
        if (window.scrollY > 80) navbar.classList.add('scrolled');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // --- 3. Vanta.js Hero (only on homepage) ---
    const vantaEl = document.getElementById('vanta-hero');
    if (vantaEl && window.innerWidth > 768 && typeof VANTA !== 'undefined') {
        VANTA.HALO({
            el: '#vanta-hero',
            mouseControls: true,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            baseColor: 0x0a1628,
            backgroundColor: 0x080f1e,
            amplitudeFactor: 1.5,
            size: 1.2
        });
    }

    // --- 4. Scroll Reveal Animations ---
    const revealEls = document.querySelectorAll('.division-card, .rnd-card, .agri-category, .sci-category, .product-category, .facility-card');

    if ('IntersectionObserver' in window && revealEls.length) {
        // Set initial hidden state
        revealEls.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // Stagger effect
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 80 * (Array.from(revealEls).indexOf(entry.target) % 6));
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealEls.forEach(el => revealObserver.observe(el));
    }

    // --- 5. Active nav link highlight ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.color = 'var(--color-accent)';
        }
    });
});
