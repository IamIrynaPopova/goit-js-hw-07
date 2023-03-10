import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

function createGalleryImages(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) => `
      <a class="gallery__item"  href=${original}>
  <img class="gallery__image" src=${preview} alt="${description}" />
</a>`
    )
    .join("");
}
const createGallery = createGalleryImages(galleryItems);

galleryEl.innerHTML = createGallery;

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
}); 

console.log(gallery);



