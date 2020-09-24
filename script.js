const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// API Setup
const count = 10;
const apiKey = "PpfXjPmTosr2-DHANp4unoqYk1FPT9Ifpd7XTAltq7I";
const collection = "architecture";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&collections=${collection}&count=${count}`;

// create elements for links, photos and add to document
function displayPhotos() {
  photosArray.forEach((photo) => {
    // create <a> to link to unsplash photo
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // Create image
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
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

// On Load
getPhotos();
