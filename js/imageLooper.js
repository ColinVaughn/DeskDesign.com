const images = [
    "images/example desk 1.webp",
    "images/example desk 2.webp",
    "images/example desk 3.webp",
    "images/example desk 4.webp",
    "images/example desk 5.webp"
];

let index = 0;
const jumbotronImage = document.getElementById('jumbotronImage');
const carouselIndicators = document.querySelectorAll('.carousel-indicators li');

function changeLights() {
    carouselIndicators[index].classList.remove("active");

    index = (index + 1) % images.length;

    carouselIndicators[index].classList.add("active");

    jumbotronImage.src = images[index];
}

// Start the image carousel
const intervalId = setInterval(changeLights, 4000);

// Optionally: Stop carousel function
function stopCarousel() {
    clearInterval(intervalId);
}
