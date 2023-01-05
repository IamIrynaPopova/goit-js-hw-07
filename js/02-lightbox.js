import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

function createGalleryImages(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) => `
      <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt="${description}" />
</a>`).join("");
}
const createGallery = createGalleryImages(galleryItems);

galleryEl.innerHTML = createGallery;

galleryEl.addEventListener("click", handleImageClick);


let gallery = new SimpleLightbox(".gallery a");
function handleImageClick() {
  gallery.on("show.simplelightbox", function () {
   
  });      
}
