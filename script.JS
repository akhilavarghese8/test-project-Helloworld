document.addEventListener('DOMContentLoaded', () => {
    // Dynamically load the navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbar-container').innerHTML = data);

    // Dynamically load the main container
    fetch('components/main-container.html')
        .then(response => response.text())
        .then(data => document.getElementById('main-container').innerHTML = data);

    // Dynamically load the footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-container').innerHTML = data);

    // Dynamically load the right container
    fetch('components/right-container.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.right-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading right-container:', error));
});
