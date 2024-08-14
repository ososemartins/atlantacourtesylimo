document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const overlay = document.querySelector('.overlay');

    menuIcon.addEventListener('click', function() {
        overlay.classList.toggle('active');
    });

    // Close the menu when clicking outside of it
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });

    // Add scroll event listener to reveal sections
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        const viewportHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < viewportHeight * 0.8) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    revealOnScroll();
});
