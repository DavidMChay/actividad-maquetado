const logos = [
    'Resources/logo1.png',
    'Resources/logo2.png', 
    'Resources/logo3.png',
    'Resources/logo4.png'
];

const randomLogo = logos[Math.floor(Math.random() * logos.length)];

document.getElementById('logo').src = randomLogo;

document.getElementById('button-addon2').addEventListener('click', function() {
    let query = document.querySelector('.form-control').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${query}`;
    }
});
