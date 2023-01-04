import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createGalleryImages(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) => `<div class="gallery__item"> 
    <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt='${description}'
    />
    </a>
    </div>`
    )
    .join("");
}
const createGallery = createGalleryImages(galleryItems);
galleryEl.innerHTML = createGallery;
galleryEl.addEventListener("click", handleImageClick);


function handleImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const modal = basicLightbox.create(`
    <div class="modal">
        <img src=${event.target.dataset.source} 
        />   
    </div>
`);
  modal.show();

  const modalEl = document.querySelector(".modal");
  modalEl.addEventListener("click", closeImage);

  function closeImage() {
  modal.close();         
  };
}

