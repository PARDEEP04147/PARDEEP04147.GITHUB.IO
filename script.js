// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.setAttribute('aria-expanded', mainNav.classList.contains('active'));
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Services Data
    const services = [
        {
            title: "Job Consultancy",
            description: "Connecting top talent with the right opportunities through our extensive network.",
            image: "images/Job-Consultants-Buland-Consultants.png"
        },
        {
            title: "Digital Marketing",
            description: "Boost your online presence with our comprehensive marketing strategies.",
            image: "images/Digital-Marketing-Buland-Consultants.jpeg"
        },
        {
            title: "Website Design",
            description: "Custom, responsive websites built to perform and convert visitors.",
            image: "images/Website-Development-Buland-Consultants.jpeg"
        },
        {
            title: "Graphic Design",
            description: "Creative visuals that effectively tell your brand's unique story.",
            image: "images/Graphic-Design-Buland-Consultants.jpeg"
        },
        {
            title: "Social Media",
            description: "Strategic content to engage your audience across all platforms.",
            image: "images/Social-Media-Buland-Consultants.jpeg"
        }
    ];

    // Render Services
    const servicesList = document.getElementById('servicesList');
    const dotsContainer = document.getElementById('dotsContainer');

    services.forEach((service, index) => {
        // Create service item
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `
            <img src="${service.image}" alt="${service.title}" loading="lazy">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesList.appendChild(serviceItem);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            scrollToService(index);
        });
        dotsContainer.appendChild(dot);
    });

    // Service Carousel Navigation
    function scrollToService(index) {
        const serviceItem = document.querySelector('.service-item');
        if (!serviceItem) return;
        
        const serviceWidth = serviceItem.offsetWidth;
        const gap = 25; // matches the gap in CSS
        servicesList.scrollTo({
            left: index * (serviceWidth + gap),
            behavior: 'smooth'
        });
    }

    // Auto-scroll services
    let autoScrollInterval;
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            const scrollPos = servicesList.scrollLeft;
            const serviceWidth = document.querySelector('.service-item')?.offsetWidth || 280;
            const gap = 25;
            const maxScroll = servicesList.scrollWidth - servicesList.clientWidth;
            
            if (scrollPos >= maxScroll - 10) {
                servicesList.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                servicesList.scrollBy({ left: serviceWidth + gap, behavior: 'smooth' });
            }
        }, 5000);
    }

    // Initialize auto-scroll
    startAutoScroll();

    // Pause auto-scroll on hover
    servicesList.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    servicesList.addEventListener('mouseleave', () => {
        startAutoScroll();
    });

    // Update dots on scroll
    servicesList.addEventListener('scroll', () => {
        const serviceItem = document.querySelector('.service-item');
        if (!serviceItem) return;
        
        const serviceWidth = serviceItem.offsetWidth;
        const gap = 25;
        const scrollPos = servicesList.scrollLeft;
        const activeIndex = Math.round(scrollPos / (serviceWidth + gap));
        
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    });

    // Manual scroll buttons
    document.querySelector('.scroll-btn.left')?.addEventListener('click', () => {
        const serviceItem = document.querySelector('.service-item');
        if (!serviceItem) return;
        
        const serviceWidth = serviceItem.offsetWidth;
        const gap = 25;
        servicesList.scrollBy({ left: -(serviceWidth + gap), behavior: 'smooth' });
    });

    document.querySelector('.scroll-btn.right')?.addEventListener('click', () => {
        const serviceItem = document.querySelector('.service-item');
        if (!serviceItem) return;
        
        const serviceWidth = serviceItem.offsetWidth;
        const gap = 25;
        servicesList.scrollBy({ left: serviceWidth + gap, behavior: 'smooth' });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Update copyright year automatically
document.getElementById('current-year').textContent = new Date().getFullYear();

// Make header shrink on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Debugging header visibility
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');
    console.log('Header element:', header);
    console.log('Computed styles:', window.getComputedStyle(header));
    
    // Force header visibility (temporary debug)
    header.style.display = 'flex';
    header.style.visibility = 'visible';
    header.style.opacity = '1';
});