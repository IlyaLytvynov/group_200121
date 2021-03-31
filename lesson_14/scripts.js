import {createList} from './list.js';
import { createMediaCard } from './mediaCard.js';
import {createAddAdvertismentsForm} from './addAdvertismentsForm.js';
const pageContent = document.querySelector('body');
const formWrapper =document.querySelector('main');
createAddAdvertismentsForm(formWrapper)

createList(pageContent, ['USA', 'CANADA', 'CHINA', 'JAPAN']);
createList(pageContent, ['USD', 'CAD', 'YEN', 'JPY']);
createList(pageContent, ['Tomatoes', 'Carrot', 'Onion', 'apples']);

fetch('http://localhost:4000/advertisments')
.then((response) => {
  console.log(response)
  if (response.status === 200) {
    return response.json();
  } else {
    throw Error('SOmeting went wrong')
  }
})
.then((advertisments) => {
  const main = document.querySelector('.main');
  const gridConteiner = document.createElement('div');
  gridConteiner.classList.add('grid', 'products');
  
  for(let advertismentObject of advertisments) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('products__item', 'col-4', 'col-sm-6')
    createMediaCard(gridItem, advertismentObject);
    gridConteiner.append(gridItem);
  }
  main.append(gridConteiner);
})
.catch((err) => {
  console.log('%cERROR HAPPENED', 'color: red; baackground: blue',err)
  alert('Ошибка, но мы все исправим')
})

console.log(4)
