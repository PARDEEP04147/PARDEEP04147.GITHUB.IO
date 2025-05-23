// Add this to your script.js file
function animateCounters() {
    const counters = document.querySelectorAll('.number');
    const speed = 200; // Animation duration in ms
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Trigger when the about section comes into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const achievementsSection = document.querySelector('.achievements');
if (achievementsSection) {
    observer.observe(achievementsSection);
}