import { lightbox } from '../main.js';

export function createGalleryMarkup(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  const markup = images
    .map(
      image => `
      <div class="photo-card">
        <a href="${image.largeImageURL}" target="_blank">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><i class="img-text">Likes </i><span>${image.likes}</span></p>
          <p><i class="img-text">Views </i><span>${image.views}</span></p>
          <p><i class="img-text">Comments </i><span>${image.comments}</span></p>
          <p><i class="img-text">Downloads </i><span>${image.downloads}</span></p>
        </div>
      </div>
    `
    )
    .join('');
  gallery.innerHTML += markup; // Добавляем новую разметку к существующей
  lightbox.refresh();
}
