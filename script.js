document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav a, .main-nav a');

    // 1. Toggle Menu Mobile
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
    });

    // Tutup menu saat link di-klik (di mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileNav.classList.contains('open')) {
                mobileNav.classList.remove('open');
            }
        });
    });

    // 2. Scroll Reveal Animation untuk Produk
    const productCards = document.querySelectorAll('.animate-product');

    const observerOptions = {
        root: null, // Menggunakan viewport
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% elemen terlihat
    };

    const productObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class 'visible' untuk menjalankan animasi CSS
                entry.target.classList.add('visible');
                // Hentikan pengamatan setelah animasi berjalan (opsional, untuk performa)
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    productCards.forEach(card => {
        productObserver.observe(card);
    });

    // 3. Animasi Logo (opsional, sudah ada CSS, ini hanya contoh JS)
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'rotate(1deg) scale(1.02)';
        logo.style.transition = 'transform 0.3s';
    });
    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'rotate(0deg) scale(1)';
    });

});