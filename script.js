/* ============================
   CALCULATOR FUNCTIONALITY
   ============================ */

const display = document.getElementById('display');

// Append value to display
function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clear the display
function clearDisplay() {
    display.value = '0';
}

// Delete last character
function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

// Calculate the result
function calculate() {
    try {
        const result = eval(display.value);
        display.value = isFinite(result) ? result : 'Error';
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '0';
        }, 1500);
    }
}

// Toggle sign (positive/negative)
function toggleSign() {
    try {
        const currentValue = parseFloat(display.value);
        display.value = currentValue * -1;
    } catch (error) {
        display.value = 'Error';
    }
}

// Square root function
function squareRoot() {
    try {
        const value = parseFloat(display.value);
        if (value < 0) {
            display.value = 'Error';
        } else {
            display.value = Math.sqrt(value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Square function
function square() {
    try {
        const value = parseFloat(display.value);
        display.value = value * value;
    } catch (error) {
        display.value = 'Error';
    }
}

// Reciprocal function (1/x)
function reciprocal() {
    try {
        const value = parseFloat(display.value);
        if (value === 0) {
            display.value = 'Error';
        } else {
            display.value = 1 / value;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

/* ============================
   KEYBOARD SUPPORT
   ============================ */

document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Number keys
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    }
    // Operators
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }
    // Decimal point
    else if (key === '.') {
        appendToDisplay('.');
    }
    // Enter for calculate
    else if (key === 'Enter') {
        e.preventDefault();
        calculate();
    }
    // Backspace for delete
    else if (key === 'Backspace') {
        e.preventDefault();
        deleteLast();
    }
    // Escape for clear
    else if (key === 'Escape') {
        clearDisplay();
    }
    // Percent
    else if (key === '%') {
        appendToDisplay('%');
    }
});

/* ============================
   NAVIGATION MOBILE MENU
   ============================ */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

/* ============================
   SMOOTH SCROLL FOR NAVIGATION
   ============================ */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

/* ============================
   CONTACT FORM HANDLING
   ============================ */

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name') || contactForm.elements[0].value;
        const email = formData.get('email') || contactForm.elements[1].value;
        const message = formData.get('message') || contactForm.elements[2].value;

        // Validate form
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Show success message
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;

        submitButton.textContent = '✓ Message Sent!';
        submitButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        // Log form data (in real app, send to server)
        console.log('Form Data:', {
            name,
            email,
            message,
            timestamp: new Date().toISOString(),
        });

        // Reset form after 2 seconds
        setTimeout(() => {
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.style.background = 'linear-gradient(135deg, var(--accent-blue), #3b82f6)';
        }, 2000);
    });
}

/* ============================
   CTA BUTTON FUNCTIONALITY
   ============================ */

const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const calculatorSection = document.getElementById('calculator');
        calculatorSection.scrollIntoView({ behavior: 'smooth' });
    });
}

/* ============================
   SCROLL ANIMATIONS
   ============================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach((card) => {
    card.style.opacity = '0';
    observer.observe(card);
});

/* ============================
   CALCULATOR DISPLAY FORMATTING
   ============================ */

display.addEventListener('input', (e) => {
    // Prevent invalid characters
    let value = e.target.value;
    value = value.replace(/[^0-9+\-*/%.]/g, '');
    e.target.value = value || '0';
});

/* ============================
   THEME TOGGLE (Optional Enhancement)
   ============================ */

function initThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', theme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
});

/* ============================
   PERFORMANCE OPTIMIZATION
   ============================ */

// Debounce function for window resize
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle responsive adjustments
window.addEventListener(
    'resize',
    debounce(() => {
        console.log('Window resized');
    }, 250)
);

/* ============================
   ADVANCED CALCULATOR FEATURES
   ============================ */

// Memory functions for calculator
let memory = 0;

function memoryAdd() {
    try {
        memory += parseFloat(display.value);
        console.log('Added to memory:', memory);
    } catch (error) {
        console.error('Memory add error:', error);
    }
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
    console.log('Memory cleared');
}

/* ============================
   INITIALIZATION
   ============================ */

document.addEventListener('DOMContentLoaded', () => {
    // Set initial display value
    if (display.value === '') {
        display.value = '0';
    }

    // Log app initialization
    console.log('Engineering Calculator initialized');
});
