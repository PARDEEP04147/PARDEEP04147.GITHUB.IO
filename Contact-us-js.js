// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const submitBtn = this.querySelector('.submit-btn');
    
    // Change button text
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual AJAX call)
    setTimeout(() => {
        // Success message
        alert('Thank you! Your message has been sent. We will contact you soon.');
        this.reset();
        submitBtn.innerHTML = 'Send Message';
        submitBtn.disabled = false;
    }, 1500);
});

// Animate contact cards on scroll
const contactCards = document.querySelectorAll('.contact-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

contactCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});