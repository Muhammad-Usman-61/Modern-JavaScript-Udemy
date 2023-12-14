const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popup-wrapper');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup-close-btn');

button.addEventListener('click', () => {
    popupWrapper.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
});

popupWrapper.addEventListener('click', e => {
    popupWrapper.style.display = 'none';
});

popup.addEventListener('click', e => {
    e.stopPropagation();
});