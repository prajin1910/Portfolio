document.addEventListener('DOMContentLoaded', function () {
    const skillCircles = document.querySelectorAll('.circular-skill .circle');
    const progressBars = document.querySelectorAll('.progress');
    const skillSection = document.getElementById('skills');
    let animated = false; // Prevents multiple animations on scroll

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSkills() {
        if (animated) return; // Prevents re-animation

        if (isElementInViewport(skillSection)) {
            skillCircles.forEach(circle => {
                const percentage = circle.getAttribute('data-percentage');
                circle.style.setProperty('--percentage', percentage);
                animateCircle(circle, percentage);
                circle.parentElement.style.opacity = 1; // Make it visible
            });

            progressBars.forEach(bar => {
                animateProgressBar(bar);
            });

            animated = true; // Set animated to true to prevent further animations
        }
    }

    function animateCircle(circle, target) {
        let start = 0;
        const end = parseInt(target);
        const duration = 2000; // Animation duration in ms
        const stepTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
            if (start < end) {
                start++;
                circle.style.setProperty('--percentage', start); // Update percentage in the circle
                circle.textContent = start + '%'; // Update percentage text
            } else {
                clearInterval(timer);
            }
        }, stepTime);
    }

    function animateProgressBar(bar) {
        let start = 0;
        const end = parseInt(bar.style.width);
        const duration = 1000; // Animation duration in ms
        const stepTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
            if (start < end) {
                start++;
                bar.style.width = start + '%'; // Update width of progress bar
                bar.textContent = start + '%'; // Update percentage text
            } else {
                clearInterval(timer);
            }
        }, stepTime);
    }

    window.addEventListener('scroll', animateSkills);
});
// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var button = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Scroll back to the top when the button is clicked
document.getElementById("scrollToTopBtn").onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

const toggleButton = document.querySelector('.toggle-button');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Toggle sidebar visibility
    content.classList.toggle('active'); // Adjust content margin
});
