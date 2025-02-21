// Function to update the current date
function updateDate() {
    const dateElement = document.getElementById('current-date');
    const yearElement = document.getElementById('current-year');
    const now = new Date();

    // Format the date (e.g., "Monday, October 23, 2023")
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    // Update the date and year in the DOM
    dateElement.textContent = formattedDate;
    yearElement.textContent = now.getFullYear();
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateDate);

// Newsletter Form Submission
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thank you for subscribing! We'll send updates to ${email}.`);
    this.reset();
});

// Slider Functionality
let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slideIndex += n;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);

// Hamburger Menu Functionality
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}