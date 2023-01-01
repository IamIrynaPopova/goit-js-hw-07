import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const createGalleryImages = galleryItems
  .map(
    (item) => `<div class="gallery__item"> 
    <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt='${item.description}'
    />
    </a>
    </div>`
  )
  .join("");

galleryEl.innerHTML = createGalleryImages;



// function--------------------
const getOriginalImage = (event) => {
        if (event.target.nodeName !== "IMG") {
                return;
        }
        const galleryImage = document.querySelector(".gallery__image");
        const sourceImageOriginal = galleryImage.dataset.source;
        return sourceImageOriginal;
};

galleryEl.addEventListener("click", getOriginalImage);
