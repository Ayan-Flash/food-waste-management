let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Set the translateX for showing the correct image
    const offset = -slideIndex * 800; // Each image is 800px wide
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlides(slideIndex + 1);
}

function prevSlide() {
    showSlides(slideIndex - 1);
}

// Automatically advance the slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// Initialize the first slide
showSlides(slideIndex);
// --------------------------------------------------------------------------------

// Function to toggle dropdown menu
function toggleMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Function for login button
function login() {
    alert('Login button clicked!');
}

// Function for register button
function register() {
    alert('Register button clicked!');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.three-dots')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//-----------------------------------------------------------------------------------
// Function to show the login form and hide others
function showLoginForm() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('donor-form').classList.add('hidden');
    document.getElementById('requestor-form').classList.add('hidden');
    document.getElementById('register-options').classList.add('hidden');
}

// Function to show the register options and hide others
function showRegisterForm() {
    document.getElementById('register-options').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('donor-form').classList.add('hidden');
    document.getElementById('requestor-form').classList.add('hidden');
}

// Function to show the donor registration form and hide others
function showDonorForm() {
    document.getElementById('donor-form').classList.remove('hidden');
    document.getElementById('register-options').classList.add('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('requestor-form').classList.add('hidden');
}

// Function to show the requestor registration form and hide others
function showRequestorForm() {
    document.getElementById('requestor-form').classList.remove('hidden');
    document.getElementById('register-options').classList.add('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('donor-form').classList.add('hidden');
}

// Function to toggle the dropdown menu visibility
function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.three-dots')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
