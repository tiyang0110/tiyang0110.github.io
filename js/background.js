const images = [
    "architecture-g815760068_1920.jpg",
    "buildings-g6de270251_1920.jpg",
    "tianjin-gdd30baf7c_1920.jpg"
]

const selImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.querySelector('body');

bgimage.style.backgroundImage = `url(/img/${selImage})`;
