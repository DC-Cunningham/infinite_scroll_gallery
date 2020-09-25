const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// API Setup
const count = 4;
const apiKey = "PpfXjPmTosr2-DHANp4unoqYk1FPT9Ifpd7XTAltq7I";
const collection = "Architecture";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&collections=${collection}&count=${count}`;

// Set attribute helper
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Check if all images have benn loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 10;
  }
}

// create elements for links, photos and add to document
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    // create <a> to link to unsplash photo
    const item = document.createElement("a");
    setAttributes(item, { href: photo.links.html, target: "_blank" });
    // Create image
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Event Listener to check when each image is finished loading
    img.addEventListener("load", imageLoaded);
    // put image inside document
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos from Unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch error
  }
}

// Event Listeners
// Get more photos on scroll to bottom of page
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

// On Load
getPhotos();
