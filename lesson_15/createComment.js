/**
 * 
 * @param {HTMLElement} root 
 * @param {Object} commentObj 
 * @param {string} commentObj.author
 * @param {string} commentObj.text
 * @param {number} commentObj.createdAt
 * @param {string} commentObj.avatarUrl
 * @param {number} commentObj.id
 */
const createComment = (root, commentObj) => {
  const template = `
    <h4 class="comment__author">${commentObj.author}</h4>
    <p class="comment__text">${commentObj.text}</p>
    ${(() => commentObj.avatarUrl ? `<img src="${commentObj.avatarUrl }" alt="" class="comment__thumbnail"> ` : '')()}
  `
  
  const li = document.createElement('li');
  
  li.innerHTML = template;
  
  root.append(li)
}

export {createComment}