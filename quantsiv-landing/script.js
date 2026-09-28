document.addEventListener('DOMContentLoaded', function () {
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
});
