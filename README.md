# Infinite Scroll Gallery

## Description

Utilising the [Unsplash API](https://unsplash.com/) to create a never ending gallery of images.

## Table of Contents

- [Description](#description)
- [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Authors and Acknowledgment](#authors-and-acknowledgment)
- [License](#license)

## Screenshot

![Infinite Scroll Gallery screenshot](https://github.com/DC-Cunningham/infinite_scroll_gallery/blob/master/assets/SS_InfiniteScroll.png)

## Installation

The application has been deployed [here](https://dc-cunningham.github.io/infinite_scroll_gallery/)

## Usage

The scripting of the API is designed to create a feeling of infinite scrolling. On initial load the page retrieves 4 photos (to optimise load time) and renders them to the DOM. As the user scrolls down an event listener compares the window.innerHeight and window.scrollY with the document.body.offsetHeight and the API is called to fill more photos as the user get close to the bottom of the document and more photos are appended to the DOM.

## Future Plans and Known Bugs

Would like to implement a search field to allow users to filter the photo results.

## Authors and Acknowledgment

### Main Author

[DC-Cunningham](https://github.com/DC-Cunningham)

![Author Avatar](https://avatars0.githubusercontent.com/u/47209814?v=4&s=100)

## License

© 2020 The Beautiful Revolution. All Rights Reserved.
