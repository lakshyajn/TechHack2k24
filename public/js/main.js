document.addEventListener('DOMContentLoaded', () => {
    // Countdown timer
    const countdownElement = document.getElementById('countdown-timer');
    const hackathonDate = new Date('2024-09-15T09:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = hackathonDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Hackathon has started!";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }); 
});