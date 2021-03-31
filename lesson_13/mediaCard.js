function createMediaCard(root, data) {
  console.log('HELLO!!!!', data);
  const conteiner = document.createElement('div');
  conteiner.classList.add('media-card');
  const content = `
      <img src="https://boring-fe.herokuapp.com/${data.img}" alt="" class="media-card__img">
      <h2 class="media-card__title">${data.title}</h2>
      <p class="media-card__description">${data.description}</p>
  `;
  conteiner.innerHTML = content;
  root.append(conteiner);
}

export {createMediaCard};