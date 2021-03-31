function renderLiContent(title) {
  return `<h2>TEST: ${title}</h2>`;
}

function createList(root, dataList) {
  const ul = document.createElement('ul');
  for(let title of dataList) {
    const li = document.createElement('li');
    li.innerHTML = renderLiContent(title);
    li.addEventListener('click', () => {
      console.log('TEST');
      li.style.backgroundColor = 'red';
      li.textContent = li.textContent + 'hello';
    })

    ul.append(li);
  }
  root.append(ul)
}

export {createList}