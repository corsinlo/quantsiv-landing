document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form handling
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value.trim();
            if (email) {
                alert('Thank you! We\\'ve recorded your interest: ' + email);
                form.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Marquee effect for supported companies banner
    const bannerTrack = document.querySelector('.banner-track');
    if (bannerTrack) {
        // Clone the banner items for seamless scrolling
        const bannerItems = bannerTrack.innerHTML;
        bannerTrack.innerHTML += bannerItems;

        // Pause on hover
        bannerTrack.addEventListener('mouseenter', () => {
            bannerTrack.style.animationPlayState = 'paused';
        });

        bannerTrack.addEventListener('mouseleave', () => {
            bannerTrack.style.animationPlayState = 'running';
        });
    }
});