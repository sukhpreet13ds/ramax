// Mobile Menu
const mobileBurger = document.getElementById('mobileBurger');
const mobileMenuPanel = document.getElementById('mobileMenuPanel');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');

if (mobileBurger && mobileMenuPanel && mobileCloseBtn) {
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
}

function playVideo() {
    const videoBox = document.querySelector('.video-box');
    if (videoBox) {
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
}

// Gallery Slider Logic
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.gallery-slider-track');
    const dots = document.querySelectorAll('.gallery-slider-dots span');
    
    if (track && dots.length > 0) {
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
    }

    // Testimonial Slider Logic
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialDots = document.querySelectorAll('#testimonialDots .dot');
    
    if (testimonialTrack && testimonialDots.length > 0) {
        let tIndex = 0;
        const totalT = testimonialDots.length;
        let tInterval;

        function updateT(index) {
            tIndex = index;
            const offset = -index * 100;
            testimonialTrack.style.transform = `translateX(${offset}%)`;
            
            testimonialDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function startT() {
            tInterval = setInterval(() => {
                let next = (tIndex + 1) % totalT;
                updateT(next);
            }, 2500);
        }

        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(tInterval);
                updateT(index);
                startT();
            });
        });

        startT();

        const tContainer = testimonialTrack.closest('.testimonial-slider-container');
        if (tContainer) {
            tContainer.addEventListener('mouseenter', () => clearInterval(tInterval));
            tContainer.addEventListener('mouseleave', startT);
        }
    }
});

    const readMoreBtn = document.querySelector('.choose-read-more');
    const chooseList = document.querySelector('.choose-section-list');

    if (readMoreBtn && chooseList) {
        readMoreBtn.addEventListener('click', () => {
            chooseList.classList.toggle('active');

            if (chooseList.classList.contains('active')) {
                readMoreBtn.textContent = 'Read Less';
            } else {
                readMoreBtn.textContent = 'Read More';
            }
        });
    }


// Contact Form Submit Handler
const contactForm = document.getElementById('contactForm');
const cuSuccessMsg = document.getElementById('cuSuccessMsg');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('cu-name').value.trim();
        const email = document.getElementById('cu-email').value.trim();

        if (!name || !email) {
            alert('Please fill in your Name and Email before submitting.');
            return;
        }

        // Show success message
        if (cuSuccessMsg) {
            cuSuccessMsg.style.display = 'block';
        }

        // Reset form
        contactForm.reset();

        // Hide message after 5s
        setTimeout(() => {
            if (cuSuccessMsg) cuSuccessMsg.style.display = 'none';
        }, 5000);
    });
}

// Gallery Lightbox
(function () {
    const lightbox    = document.getElementById('galLightbox');
    const lightboxImg = document.getElementById('galLightboxImg');
    const closeBtn    = document.getElementById('galLightboxClose');

    if (!lightbox) return;

    // Open on image click
    document.querySelectorAll('.gal-item').forEach(function (item) {
        item.addEventListener('click', function () {
            const src = item.querySelector('img').src;  
            lightboxImg.src = src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });


    // Close on X button
    closeBtn.addEventListener('click', closeLightbox);

    // Close on backdrop click
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    }
})();

// Enquiry Modal Logic
(function() {
    const modal = document.getElementById('enquiryModal');
    const closeBtn = document.getElementById('closeEnquiryModal');
    const openBtns = document.querySelectorAll('.open-enquiry-modal');
    const enquiryForm = document.getElementById('enquiryForm');

    if (!modal || !closeBtn) return;

    // Open Modal
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
            
            // Also close desktop sidebar if it's open
            const sidebar = document.getElementById('desktopSidebar');
            if (sidebar) sidebar.classList.remove('active');
        });
    });


    // Close Modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    };

    closeBtn.addEventListener('click', closeModal);

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Form Submission
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple success feedback
            const submitBtn = enquiryForm.querySelector('.enquiry-submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'SENDING...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your enquiry! Our team will contact you shortly.');
                enquiryForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                closeModal();
            }, 1500);
        });
    }
})();
// Desktop Sidebar Logic
(function() {
    const sidebar = document.getElementById('desktopSidebar');
    const closeBtn = document.getElementById('sidebarCloseBtn');
    const menuToggle = document.querySelector('.menu-toggle');
    const searchToggle = document.querySelector('.search-box');

    if (!sidebar || !closeBtn) return;

    const openSidebar = () => {
        sidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Auto-focus search input
        const searchInput = sidebar.querySelector('.sidebar-search-box input');
        if (searchInput) {
            setTimeout(() => searchInput.focus(), 600);
        }
    };


    const closeSidebar = () => {
        sidebar.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (menuToggle) menuToggle.addEventListener('click', openSidebar);
    if (searchToggle) searchToggle.addEventListener('click', openSidebar);
    
    closeBtn.addEventListener('click', closeSidebar);

    // Close on click outside
    document.addEventListener('mousedown', (e) => {
        if (sidebar.classList.contains('active')) {
            // Check if click was outside sidebar AND not on trigger buttons
            const isClickInsideSidebar = sidebar.contains(e.target);
            const isClickOnMenuToggle = menuToggle && menuToggle.contains(e.target);
            const isClickOnSearchToggle = searchToggle && searchToggle.contains(e.target);

            if (!isClickInsideSidebar && !isClickOnMenuToggle && !isClickOnSearchToggle) {
                closeSidebar();
            }
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
})();

