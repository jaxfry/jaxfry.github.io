// JavaScript function to toggle dark mode
function toggleDark() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Check the initial state of dark mode in localStorage
    const darkModeState = localStorage.getItem('darkMode');
    
    if (darkModeState === 'enabled') {
        // If dark mode is enabled in localStorage, enable it by default
        darkModeToggle.checked = true;
        toggleDark();
    } else if (darkModeState === 'disabled') {
        // If dark mode is disabled in localStorage, ensure it's unchecked
        darkModeToggle.checked = false;
    } else {
        // If dark mode state is not set in localStorage, you can choose to enable it by default
        // Here, we enable it by default if no state is found in localStorage
        darkModeToggle.checked = true;
        toggleDark();
        localStorage.setItem('darkMode', 'enabled');
    }

    // Add an event listener to the dark mode toggle switch
    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }

        // Toggle dark mode when the slider changes
        toggleDark();
    });
});

// Get references to the icons
const javascriptIcon = document.getElementById('javascript-icon');
const pythonIcon = document.getElementById('python-icon');
const htmlIcon = document.getElementById('html-icon');
const cssIcon = document.getElementById('css-icon');
const javaIcon = document.getElementById('java-icon');

// Function to add the bx-spin class on hover
function addBxSpinClass(icon) {
  icon.classList.add('bx-spin');
}

// Function to remove the bx-spin class on mouseout
function removeBxSpinClass(icon) {
  icon.classList.remove('bx-spin');
}

// Add event listeners to each icon
javascriptIcon.addEventListener('mouseenter', () => addBxSpinClass(javascriptIcon));
javascriptIcon.addEventListener('mouseleave', () => removeBxSpinClass(javascriptIcon));

pythonIcon.addEventListener('mouseenter', () => addBxSpinClass(pythonIcon));
pythonIcon.addEventListener('mouseleave', () => removeBxSpinClass(pythonIcon));

htmlIcon.addEventListener('mouseenter', () => addBxSpinClass(htmlIcon));
htmlIcon.addEventListener('mouseleave', () => removeBxSpinClass(htmlIcon));

cssIcon.addEventListener('mouseenter', () => addBxSpinClass(cssIcon));
cssIcon.addEventListener('mouseleave', () => removeBxSpinClass(cssIcon));

javaIcon.addEventListener('mouseenter', () => addBxSpinClass(javaIcon));
javaIcon.addEventListener('mouseleave', () => removeBxSpinClass(javaIcon));
