import { fetchImages } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightbox = new SimpleLightbox('.gallery a');
const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
let query = '';
let page = 1;

form.addEventListener('submit', event => {
  query = input.value.trim();
  page = 1;
  event.preventDefault();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
    });
    return;
  }
  fetchImages(query, page);
  input.value = '';
});

document.querySelector('#load-more').addEventListener('click', () => {
  page += 1;
  fetchImages(query, page);
});
