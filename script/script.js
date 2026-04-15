// Mobile Menu
const mobileBurger = document.getElementById('mobileBurger');
const mobileMenuPanel = document.getElementById('mobileMenuPanel');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');

mobileBurger.addEventListener('click', () => {
    mobileMenuPanel.classList.add('open');
    document.body.style.overflow = 'hidden';
});

mobileCloseBtn.addEventListener('click', () => {
    mobileMenuPanel.classList.remove('open');
    document.body.style.overflow = '';
});

// Close on nav item click
document.querySelectorAll('.mobile-nav-list li').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenuPanel.classList.remove('open');
        document.body.style.overflow = '';
    });
});


function playVideo() {
    const videoBox = document.querySelector('.video-box');
    videoBox.innerHTML = `
        <iframe 
            width="100%" 
            height="500" 
            src="https://www.youtube.com/embed/Y5RtQ4cawVk?autoplay=1" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
        </iframe>
    `;
}

// Gallery Slider Logic
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.gallery-slider-track');
    const dots = document.querySelectorAll('.gallery-slider-dots span');
    
    if (!track || dots.length === 0) return;

    let currentIndex = 0;
    const totalSlides = dots.length;

    function updateSlider(index) {
        currentIndex = index;
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function autoSlide() {
        let nextIndex = (currentIndex + 1) % totalSlides;
        updateSlider(nextIndex);
    }

    let slideInterval = setInterval(autoSlide, 5000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            updateSlider(index);
            slideInterval = setInterval(autoSlide, 5000);
        });
    });
});