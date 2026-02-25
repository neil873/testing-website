// JavaScript untuk Website eL BAS OFFICIAL

document.addEventListener('DOMContentLoaded', function() {

    // Animasi scroll untuk smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip untuk link yang mengarah ke file HTML lain
            if (href.includes('.html')) {
                return;
            }
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Highlight menu aktif berdasarkan scroll
    function highlightActiveMenu() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let currentSectionId = '';
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveMenu);
    
    // Animasi untuk school cards
    const schoolCards = document.querySelectorAll('.school-card');
    
    function animateCardsOnScroll() {
        schoolCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state untuk animasi
    schoolCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateCardsOnScroll);
    animateCardsOnScroll(); // Panggil sekali saat load
    
    // Simulasi loading data dari database
    function loadSchoolData() {
        // Dalam implementasi nyata, ini akan fetch dari file database.json
        console.log('Memuat data sekolah dari database...');
        
        // Contoh penggunaan data dari database
        fetch('database.json')
            .then(response => response.json())
            .then(data => {
                console.log('Data sekolah berhasil dimuat:', data);
                // Di sini Anda bisa manipulasi DOM dengan data yang diterima
            })
            .catch(error => {
                console.error('Gagal memuat data:', error);
            });
    }
    
    // Panggil fungsi load data
    loadSchoolData();
    
    // Tambahkan tahun otomatis di footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
    }
});
// ============================================
// SCRIPT.JS - eL BAS OFFICIAL
// Modern, Elegan, Fully Functional
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // ===== PRELOADER =====
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    }
// ===== THEME TOGGLE (DARK / LIGHT MODE) =====
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    // cek mode tersimpan
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        icon.classList.replace("fa-moon", "fa-sun");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark");
        } else {
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light");
        }
    });
}
    // ===== MOBILE NAVIGATION =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        // Close menu when click link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // ===== STICKY NAVBAR =====
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // ===== ANIMATED COUNTER =====
    const counters = document.querySelectorAll('.stat-number');
    
    function animateCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / 100;
            
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(animateCounter, 20);
            } else {
                counter.innerText = target + '+';
            }
        });
    }
    
    // Trigger counter when visible
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Update URL
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // ===== ACTIVE NAVIGATION =====
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    function highlightNavigation() {
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);

    // ===== ANIMATE ON SCROLL =====
    const animateElements = document.querySelectorAll(
        '.school-card, .profil-card, .kurikulum-item, .fasilitas-item, .prestasi-card, .jurusan-card, .program-card'
    );
    
    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(element);
    });

    // ===== GALERI LIGHTBOX =====
    const galeriItems = document.querySelectorAll('.galeri-item img, .galeri-mini-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    
    if (galeriItems.length && lightbox) {
        galeriItems.forEach(img => {
            img.addEventListener('click', function() {
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
                document.body.style.overflow = 'hidden';
            });
        });
        
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
        
        lightbox.addEventListener('click', function(e) {
            if (e.target !== lightboxImg) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // ===== YEAR AUTO UPDATE =====
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2023', currentYear).replace('2024', currentYear).replace('2025', currentYear).replace('2026', currentYear);
    }

    // ===== SCHOOL PAGE SPECIFIC =====
    const currentPage = window.location.pathname.split('/').pop();
    
    // Apply page-specific colors
    if (currentPage.includes('ra-waladun')) {
        document.documentElement.style.setProperty('--primary-color', '#0F4C5C');
        document.documentElement.style.setProperty('--gradient-start', '#0F4C5C');
        document.documentElement.style.setProperty('--gradient-end', '#1E6F7F');
    } else if (currentPage.includes('mi-elbas')) {
        document.documentElement.style.setProperty('--primary-color', '#1A3A5F');
        document.documentElement.style.setProperty('--gradient-start', '#1A3A5F');
        document.documentElement.style.setProperty('--gradient-end', '#2C5A7A');
    } else if (currentPage.includes('mts-elbas')) {
        document.documentElement.style.setProperty('--primary-color', '#B8860B');
        document.documentElement.style.setProperty('--gradient-start', '#B8860B');
        document.documentElement.style.setProperty('--gradient-end', '#DAA520');
    } else if (currentPage.includes('ma-elbas')) {
        document.documentElement.style.setProperty('--primary-color', '#4A2C5F');
        document.documentElement.style.setProperty('--gradient-start', '#4A2C5F');
        document.documentElement.style.setProperty('--gradient-end', '#6B4A7A');
    } else if (currentPage.includes('kbihu')) {
        document.documentElement.style.setProperty('--primary-color', '#008080');
        document.documentElement.style.setProperty('--gradient-start', '#008080');
        document.documentElement.style.setProperty('--gradient-end', '#20B2AA');
    }

    // ===== BACK TO TOP BUTTON =====
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.classList.add('back-to-top');
    backToTop.setAttribute('aria-label', 'Kembali ke atas');
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== FETCH DATA FROM DATABASE (SIMULATED) =====
    function loadSchoolData() {
        console.log('eL BAS Official - Page loaded:', currentPage);
        
        // Simulated data fetch
        fetch('database/data.json')
            .then(response => response.json())
            .then(data => {
                console.log('Data loaded successfully');
                // Populate data here if needed
            })
            .catch(error => {
                console.log('Using local data (no database.json found)');
            });
    }
    
    loadSchoolData();

    // ===== FORM VALIDATION (IF EXISTS) =====
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    
                    // Add error message
                    let errorMsg = input.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                        errorMsg = document.createElement('span');
                        errorMsg.classList.add('error-message');
                        errorMsg.textContent = 'Field ini wajib diisi';
                        input.parentNode.insertBefore(errorMsg, input.nextSibling);
                    }
                } else {
                    input.classList.remove('error');
                    const errorMsg = input.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.remove();
                    }
                }
            });
            
            if (isValid) {
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.classList.add('success-message');
                successMsg.textContent = 'Pesan Anda telah terkirim!';
                form.appendChild(successMsg);
                
                setTimeout(() => {
                    successMsg.remove();
                    form.reset();
                }, 3000);
            }
        });
    });
});

// ===== ADD BACK TO TOP STYLES =====
const style = document.createElement('style');
style.textContent = `
    .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--white, #FFFFFF);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
    
    .preloader.fade-out {
        opacity: 0;
    }
    
    .loader {
        width: 50px;
        height: 50px;
        border: 4px solid rgba(15, 76, 92, 0.1);
        border-top: 4px solid var(--primary-color, #0F4C5C);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color, #0F4C5C);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 99;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .back-to-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    .back-to-top:hover {
        background: var(--primary-dark, #0A3A48);
        transform: translateY(-5px);
    }
    
    .header.sticky {
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        background: rgba(255,255,255,0.98);
        backdrop-filter: blur(10px);
    }
    
    .no-scroll {
        overflow: hidden;
    }
    
    .error {
        border: 2px solid #dc3545 !important;
    }
    
    .error-message {
        display: block;
        color: #dc3545;
        font-size: 0.85rem;
        margin-top: 5px;
    }
    
    .success-message {
        background: #28a745;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        margin-top: 20px;
        text-align: center;
    }
`;

document.head.appendChild(style);