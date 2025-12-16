// ==================== SCROLL ANIMATIONS (APPLE STYLE) ====================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe form groups with staggered animation
const formGroups = document.querySelectorAll('.form-group');
formGroups.forEach((group, index) => {
    group.style.opacity = '0';
    group.style.transform = 'translateY(20px)';
    group.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    observer.observe(group);
});

// Observe checkbox group
const checkboxGroup = document.querySelector('.checkbox-group');
if (checkboxGroup) {
    checkboxGroup.style.opacity = '0';
    checkboxGroup.style.transform = 'translateY(20px)';
    checkboxGroup.style.transition = 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s';
    observer.observe(checkboxGroup);
}

// Observe submit button
const submitBtn = document.querySelector('.submit-btn');
if (submitBtn) {
    submitBtn.style.opacity = '0';
    submitBtn.style.transform = 'translateY(20px)';
    submitBtn.style.transition = 'opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s';
    observer.observe(submitBtn);
}

// ==================== FORM VALIDATION ====================
const form = document.getElementById('predictForm');

if (form) {
    form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input[required], select[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = '#ff3b30';
                
                setTimeout(() => {
                    input.style.borderColor = '#d2d2d7';
                }, 2000);
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            const firstInvalid = form.querySelector('input:invalid, select:invalid');
            if (firstInvalid) {
                firstInvalid.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }
    });
}

// ==================== INPUT ENHANCEMENTS ====================
const numberInputs = document.querySelectorAll('input[type="number"]');

numberInputs.forEach(input => {
    // Prevent non-numeric input
    input.addEventListener('keypress', (e) => {
        const char = String.fromCharCode(e.which);
        if (!/[\d.]/.test(char)) {
            e.preventDefault();
        }
        if (char === '.' && input.value.includes('.')) {
            e.preventDefault();
        }
    });
    
    // Remove invalid styling on input
    input.addEventListener('input', () => {
        if (input.style.borderColor === 'rgb(255, 59, 48)') {
            input.style.borderColor = '#d2d2d7';
        }
    });
});

// ==================== SELECT ENHANCEMENTS ====================
const selectElements = document.querySelectorAll('select');

selectElements.forEach(select => {
    // Update color when value selected
    select.addEventListener('change', function() {
        if (this.value !== '') {
            this.style.color = '#1d1d1f';
        }
        
        // Remove invalid styling
        if (this.style.borderColor === 'rgb(255, 59, 48)') {
            this.style.borderColor = '#d2d2d7';
        }
    });
    
    // Set initial color if value exists
    if (select.value !== '') {
        select.style.color = '#1d1d1f';
    } else {
        select.style.color = '#86868b';
    }
});

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', () => {
    // Fade in hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        setTimeout(() => {
            hero.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ==================== SMOOTH BUTTON PRESS ====================
if (submitBtn) {
    let touchStartY = 0;
    
    submitBtn.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });
    
    submitBtn.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        if (Math.abs(touchEndY - touchStartY) < 10) {
            submitBtn.style.transform = 'scale(0.98)';
            setTimeout(() => {
                submitBtn.style.transform = 'scale(1)';
            }, 100);
        }
    });
}

console.log('Apple-style interface loaded');
