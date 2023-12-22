const baropen = document.getElementById("bar-open");
const barclose = document.getElementById("bar-close");
const navContainer = document.getElementById("navlinks");
const navlinks = document.getElementById("navlinks");

if ((baropen.style.display = "block")) {
  barclose.style.display = "none";
}

baropen.addEventListener("click", () => {
  navlinks.style.display = "block";
  setTimeout(() => {
    navContainer.style.right = "0";
    baropen.style.display = "none";
    barclose.style.display = "block";
  }, 20);
});

barclose.addEventListener("click", () => {
  navContainer.style.right = "-300px";
  baropen.style.display = "block";
  barclose.style.display = "none";
  setTimeout(() => {
    navlinks.style.display = "none";
  }, 1000);
});

// Sample image filenames
const imageFilenames = [
  "person1.jpeg",
  "person2.jpeg",
  "person3.jpeg",
  "person4.jpeg",
  "person4.jpeg",
  "herotwo.jpg",
  "herotwo.jpg",

  // Add more image filenames up to a maximum of 10
];

const carouselContainer = document.getElementById("carousel");
const thumbnailContainer = document.getElementById("thumbnail-container");

// Populate carousel with images and thumbnails
imageFilenames.forEach((filename, index) => {
  // Create carousel image element
  const carouselImage = document.createElement("img");
  carouselImage.src = `../asset/${filename}`; // Add 'assets/' to the image path
  carouselImage.classList.add("carousel-image");
  carouselContainer.appendChild(carouselImage);

  // Create thumbnail element
  const thumbnail = document.createElement("img");
  thumbnail.src = `../asset/${filename}`; // Add 'assets/' to the image path
  thumbnail.classList.add("thumbnail");

  // Set click event to navigate to the respective image
  thumbnail.addEventListener("click", () => {
    const slideWidth = carouselImage.clientWidth;
    carouselContainer.style.transform = `translateX(-${slideWidth * index}px)`;
  });

  thumbnailContainer.appendChild(thumbnail);
});


const box = document.getElementById("box");
const overlay = document.createElement("div");
overlay.id = "overlay";
box.appendChild(overlay);

let opacity = 0;
let increasing = true;

function animateOverlay() {
  overlay.style.opacity = opacity;


  // overlay.innerHTML = 'View Once'

  if (increasing) {
    opacity += 0.007
    if (opacity >= 1) {
      increasing = false;
    }
  } else {
    opacity -= 0.003;
    if (opacity <= 0) {
      increasing = true;
    }
  }

  requestAnimationFrame(animateOverlay);
}

animateOverlay();
