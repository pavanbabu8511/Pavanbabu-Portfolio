document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    const subTextElement = document.querySelector('.hero-section .animated-subtext');
    const textToType = subTextElement.textContent;
    subTextElement.textContent = ''; // Clear initial text

    let i = 0;
    function typeWriter() {
        if (i < textToType.length) {
            subTextElement.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Typing speed
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

// Clear form when navigating back to the page
window.addEventListener("pageshow", function(event) {
    if (event.persisted) {
        const form = document.querySelector(".contact-form");
        if (form) {
            form.reset();
        }
    }
});
