
const hamburger = document.getElementById("hamburger");
const menuMobile = document.getElementById("menuMobile");
const navbar = document.getElementById("navbar");
const navbarChild = document.getElementById("navbarChild");
const navMenu = document.getElementById("navMenu");
const navLogo = document.getElementById("navLogo");
const closeBtn = document.getElementById("closeBtn");

function toggleMenu() {
    menuMobile.classList.toggle("backdrop-blur-lg", "open");

    if (menuMobile.classList.contains('max-h-0')) {
        menuMobile.classList.remove('max-h-0', 'opacity-0', 'py-0');
        menuMobile.classList.add('max-h-[300px]', 'opacity-100', 'py-10');
        navbarChild.classList.add("bg-[#040404]", "text-[#f2f2f2]");
        hamburger.classList.add("opacity-0", "scale-0");
        closeBtn.classList.remove("opacity-0", "scale-0");
    } else {
        menuMobile.classList.add('max-h-0', 'opacity-0', 'py-0');
        menuMobile.classList.remove('max-h-[300px]', 'opacity-100', 'py-10');
        navbarChild.classList.remove("bg-[#040404]", "text-[#f2f2f2]");
        hamburger.classList.remove("opacity-0", "scale-0");
        closeBtn.classList.add("opacity-0", "scale-0");
    }
}


hamburger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);


window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
        navbar.classList.add("bg-[#040404]", "shadow-md");
        menuMobile.classList.add("bg-[#040404]/90", "shadow-md", "text-[#f2f2f2]");
        navMenu.classList.add("text-[#f2f2f2]");
        navLogo.classList.add("text-[#f2f2f2]");
        hamburger.classList.add("text-[#f2f2f2]");
    } else {
        navbar.classList.remove("bg-[#040404]", "shadow-md");
        menuMobile.classList.remove("bg-[#040404]/90", "shadow-md", "text-[#f2f2f2]");
        navLogo.classList.remove("text-[#f2f2f2]");
        navMenu.classList.remove("text-[#f2f2f2]");
        hamburger.classList.remove("text-[#f2f2f2]");
    }
})

// Array kata-kata yang akan ditampilkan
const words = ["Frontend Dev", "Web Designer", "UI/UX Designer", "Figma User"];

// Variabel status
let wordIndex = 0;   // Indeks kata saat ini di array `words`
let charIndex = 0;   // Indeks karakter yang sedang diketik/dihapus
let isDeleting = false; // Status: apakah sedang menghapus atau mengetik
const typingSpeed = 75; // Kecepatan ketik (ms)
const deletingSpeed = 50;  // Kecepatan hapus (ms)
const wordDelay = 1300; // Jeda sebelum mulai mengetik/menghapus kata berikutnya (ms)

const targetTextElement = document.getElementById('target-text');

function typeWriter() {
    // 1. Ambil kata saat ini
    const currentWord = words[wordIndex % words.length];
    let timeout = typingSpeed;

    if (isDeleting) {
        // --- LOGIKA MENGHAPUS (DELETING) ---
        // Jika sedang menghapus, kurangi charIndex
        charIndex--;
        targetTextElement.textContent = currentWord.substring(0, charIndex);
        timeout = deletingSpeed;

        if (charIndex === 0) {
            // Jika sudah selesai menghapus
            isDeleting = false;
            wordIndex++; // Pindah ke kata berikutnya
            timeout = wordDelay; // Jeda sebelum mulai mengetik kata baru
        }
    } else {
        // --- LOGIKA MENGETIK (TYPING) ---
        // Jika sedang mengetik, tambahkan charIndex
        charIndex++;
        targetTextElement.textContent = currentWord.substring(0, charIndex);
        timeout = typingSpeed;

        if (charIndex === currentWord.length) {
            // Jika sudah selesai mengetik
            isDeleting = true;
            timeout = wordDelay; // Jeda sebelum mulai menghapus
        }
    }

    // Panggil fungsi ini lagi setelah waktu timeout
    setTimeout(typeWriter, timeout);
}

// Mulai animasi saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "-translate-y-12");
        }
    });
});

document.querySelectorAll(".box").forEach((el) => observer.observe(el));

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        // delay: Jeda waktu sebelum pindah slide berikutnya (dalam milidetik)
        delay: 3000, // Geser setiap 4 detik (4000ms)

        // disableOnInteraction: Setel ke false agar auto scroll tidak berhenti 
        // ketika pengguna menyentuh/menggeser slider.
        disableOnInteraction: false,

        // pauseOnMouseEnter: (Opsional) Jika true, geseran berhenti saat mouse masuk
        pauseOnMouseEnter: true,
    },

    // speed: Kecepatan transisi slide (misalnya 1 detik)
    speed: 1000,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


ScrollReveal().reveal('.fade-down', {
    reset: true,
    delay: 200,           // Jeda sebelum animasi mulai (ms)
    distance: '50px',    // Jarak pergerakan elemen
    origin: 'top',    // Elemen 'muncul' dari bawah
    interval: 100,       // Jeda antar elemen (untuk membuat efek berurutan)
    easing: 'ease-in-out',
    duration: 700 // Efek pergerakan
});

ScrollReveal().reveal('.fade-up', {
    reset: true,
    delay: 200,           // Jeda sebelum animasi mulai (ms)
    distance: '50px',    // Jarak pergerakan elemen
    origin: 'bottom',    // Elemen 'muncul' dari bawah
    interval: 100,       // Jeda antar elemen (untuk membuat efek berurutan)
    easing: 'ease-in-out',
    duration: 700// Efek pergerakan
});

ScrollReveal().reveal('.fade-right', {
    reset: true,
    delay: 50,           // Jeda sebelum animasi mulai (ms)
    distance: '50px',    // Jarak pergerakan elemen
    origin: 'right',    // Elemen 'muncul' dari bawah
    interval: 100,       // Jeda antar elemen (untuk membuat efek berurutan)
    easing: 'ease-in-out',
    duration: 800// Efek pergerakan
});

ScrollReveal().reveal('.fade-right-noreset', {
    delay: 50,           // Jeda sebelum animasi mulai (ms)
    distance: '50px',    // Jarak pergerakan elemen
    origin: 'right',    // Elemen 'muncul' dari bawah
    interval: 100,       // Jeda antar elemen (untuk membuat efek berurutan)
    easing: 'ease-in-out',
    duration: 800// Efek pergerakan
});

ScrollReveal().reveal('.fade-left', {
    reset: true,
    delay: 50,           // Jeda sebelum animasi mulai (ms)
    distance: '50px',    // Jarak pergerakan elemen
    origin: 'left',    // Elemen 'muncul' dari bawah
    interval: 50,       // Jeda antar elemen (untuk membuat efek berurutan)
    easing: 'ease-in-out',
    duration: 800// Efek pergerakan
});