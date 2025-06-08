document.addEventListener('DOMContentLoaded', () => {
    // Basic typing animation for hero section sub-text
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

    // Simple scroll animation for sections (fade in)
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // When 10% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        sectionObserver.observe(section);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
