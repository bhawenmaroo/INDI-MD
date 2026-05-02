document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Theme Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const moonIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    const sunIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

    // Check localStorage or system preference
    let savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        let currentTheme = htmlElement.getAttribute('data-theme');
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeToggleBtn.innerHTML = sunIcon;
        } else {
            themeToggleBtn.innerHTML = moonIcon;
        }
    }

    // --- 2. Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 3. Vanta.js Hero Initialization ---
    // Only initialize if screen width > 768px (performance)
    if (window.innerWidth > 768 && document.getElementById('vanta-hero') && typeof VANTA !== 'undefined') {
        VANTA.HALO({
            el: "#vanta-hero",
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

    // --- 4. Scroll Reveal & Background Shift Animations ---
    const dynamicSections = document.querySelectorAll('.bg-dynamic');
    
    // Intersection Observer for scroll reveal and background transitions
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When section is 50% visible, apply subtle background shift based on theme
                const theme = htmlElement.getAttribute('data-theme');
                if (theme === 'dark') {
                    entry.target.style.backgroundColor = '#0A1F1A'; // Subtle BioGreen-tinted dark
                } else {
                    entry.target.style.backgroundColor = '#F0F7FF'; 
                }
            } else {
                // Reset to default
                entry.target.style.backgroundColor = '';
            }
        });
    }, { threshold: 0.5 });

    dynamicSections.forEach(section => {
        sectionObserver.observe(section);
    });
});
