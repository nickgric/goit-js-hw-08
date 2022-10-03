import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryContentArr = [];

galleryItems.forEach(galleryItem => {
  let galleryContentElement = `<a class="gallery__item" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" title="${galleryItem.description}" alt="${galleryItem.description}" /></a>`;
  galleryContentArr.push(galleryContentElement);
});

const galleryContentStr = galleryContentArr.join('');
gallery.insertAdjacentHTML('afterbegin', galleryContentStr);

const lightboxGallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
