import 'normalize.css'
import './scss/style.scss'

const button = document.querySelector('.show-button');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');

button.addEventListener('click', () => {
    popup.classList.toggle('active');
});

popup.addEventListener('click', e => {
    popup.classList.toggle('active');
},);

popupContent.addEventListener('click', e => {
    e.stopPropagation();
});