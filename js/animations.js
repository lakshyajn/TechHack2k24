document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Typing effect for hero text
    const heroText = document.querySelector('.hero h1');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }

    // Countdown animation
    const countdownElement = document.getElementById('countdown-timer');
    if (countdownElement) {
        const countdownDate = new Date('2024-09-15T00:00:00').getTime();
        const countdownTimer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <div>${days}<span>days</span></div>
                <div>${hours}<span>hours</span></div>
                <div>${minutes}<span>minutes</span></div>
                <div>${seconds}<span>seconds</span></div>
            `;

            if (distance < 0) {
                clearInterval(countdownTimer);
                countdownElement.innerHTML = 'Hackathon has started!';
            }
        }, 1000);
    }

    // Animate number counters
    const counters = document.querySelectorAll('.counter');
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60 FPS

        let current = 0;
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Reveal animations for sections
    const revealSections = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealSections.forEach(section => {
        revealObserver.observe(section);
    });

    // Animate challenge cards
    const challengeCards = document.querySelectorAll('.challenge-card');
    challengeCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Particle background effect
    const particleContainer = document.createElement('div');
    particleContainer.classList.add('particle-container');
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particleContainer.appendChild(particle);
    }

    // Form validation
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm()) {
                // Submit the form
                alert('Form submitted successfully!');
                registrationForm.reset();
            }
        });

        function validateForm() {
            let isValid = true;
            const inputs = registrationForm.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            return isValid;
        }
    }
    // Add this at the end of the file
function createParticles() {
    const particleContainer = document.querySelector('.particle-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particleContainer.appendChild(particle);
    }
}

 createParticles();
});