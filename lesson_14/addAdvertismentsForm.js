
import {createMediaCard} from './mediaCard.js';

function createAddAdvertismentsForm(root) {
  const formEl = document.createElement('form');
  const formContentTemplate = `
    <input class="add-advertisment-form__field" type="text" placeholder="Title">
    <input class="add-advertisment-form__field" type="text"  value="images/comp_plate_promo3_wnp43x.png" disabled>
    <textarea class="add-advertisment-form__field" type="text" placeholder="Description"></textarea>
    <button type="submit">Send</button>
    <button type="reset">Clear</button>
  `;
  formEl.classList.add('add-advertisment-form');
  formEl.innerHTML = formContentTemplate;
  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = formEl[0].value;
    const img = formEl[1].value;
    const description = formEl[2].value;
    console.log(title, img, description)

    const formDataJson = {
      description,
      img,
      note: description,
      title
    };  

    const fetchConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataJson)
    };

    fetch('http://localhost:4000/advertisments', fetchConfig)
    .then((res) => {
      if(res.status < 400) {
        return res.json()
      } else {
        throw res.statusText
      }
    })
    .then((data) => {
      const gridConteiner = document.querySelector('.products');
      const gridItem = document.createElement('div');

      gridItem.classList.add('products__item', 'col-4', 'col-sm-6')
      createMediaCard(gridItem, data);

      gridConteiner.append(gridItem);
      console.log('>>>', data)
    }).catch(err => {
      console.log(err)
    })
  })
  root.append(formEl)
}

export {createAddAdvertismentsForm}