// ========== SMOOTH SCROLL BEHAVIOR ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== NAVBAR HIDE ON SCROLL ==========
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        if (scrollTop > lastScrollTop) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

navbar.style.transition = 'transform 0.3s ease';

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// ========== NEWSLETTER FORM HANDLER ==========
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (email) {
        const button = e.target.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'SUBSCRIBED ✓';
        button.style.backgroundColor = 'var(--accent-red)';
        
        setTimeout(() => {
            emailInput.value = '';
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
        
        console.log('Newsletter signup:', email);
    }
}

// ========== CONTACT FORM HANDLER ==========
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    if (name && email && message) {
        const button = e.target.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'MESSAGE SENT ✓';
        button.style.backgroundColor = 'var(--accent-red)';
        
        setTimeout(() => {
            e.target.reset();
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
        
        console.log('Contact message:', { name, email, message });
    }
}

// ========== CTA BUTTON RIPPLE EFFECT ==========
const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fragrance-card, .craft-card, .info-card').forEach(card => {
    observer.observe(card);
});

// ========== ADD RIPPLE ANIMATION STYLES ==========
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-menu a.active {
        color: var(--accent-gold);
    }
    
    .fade-in {
        animation: fadeInUp 0.6s ease forwards;
    }
`;
document.head.appendChild(style);

console.log('✨ Diabolical website loaded successfully! 🖤');

