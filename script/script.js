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