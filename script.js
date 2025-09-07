// Get the elements from the HTML
const entryScreen = document.getElementById('entry-screen');
const mainContent = document.getElementById('main-content');

// Listen for a click on the entry screen
entryScreen.addEventListener('click', () => {
    
    // 1. Start fading out the entry screen
    entryScreen.style.opacity = '0';
    
    // 2. Start fading in the main content
    mainContent.style.opacity = '1';

    // 3. After the fade-out is complete (1 second), hide it completely
    //    and allow the main page to be scrollable if needed.
    setTimeout(() => {
        entryScreen.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 1000); // 1000 milliseconds = 1 second

});
