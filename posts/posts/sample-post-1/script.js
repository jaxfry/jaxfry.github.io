// JavaScript function to toggle dark mode
function toggleDark() {
    document.body.classList.toggle('dark-mode');
}

// Apply dark mode by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('change', function() {
        toggleDark();
    });

    // Check the initial state of dark mode
    if (localStorage.getItem('darkMode') === 'enabled') {
        darkModeToggle.checked = true;
        toggleDark();
    }
    
    // Toggle dark mode when the slider changes
    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
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
