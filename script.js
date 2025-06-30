document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    const subTextElement = document.querySelector('.hero-section .animated-subtext');
    const textToType = subTextElement.textContent;
    subTextElement.textContent = '';

    let i = 0;
    function typeWriter() {
        if (i < textToType.length) {
            subTextElement.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    // Scroll animation with fade-in class
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('before-fade');
        sectionObserver.observe(section);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// This ensures the form resets when coming back with Back/Forward cache
window.addEventListener("pageshow", function(event) {
    const form = document.querySelector(".contact-form");
    if (form) {
        console.log("Pageshow triggered. Persisted:", event.persisted);
        form.reset();
    }
});
