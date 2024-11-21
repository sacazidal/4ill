import { words } from './data/products.js';

const button = document.querySelector('.js-btn');
const changeElement = document.querySelector('.change');

let currentIndex = 0;

function changeText() {
    changeElement.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

button.addEventListener('click', changeText);