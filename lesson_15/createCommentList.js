import {createComment} from './createComment.js';

/**
 * JSDoc 
 * @param {HTMLElement} root 
 * @param {Array<Object>} commentList 
 */
const createCommentList = (root, commentList) => {
  console.log(commentList)
  let ul = root.querySelector('ul.comments-list')
  if( ul !== null) {
    ul.innerHTML = '';
  } else {
    ul = document.createElement('ul');
    ul.classList.add('comments-list');
  }

  
  for(let comment of commentList) {
    createComment(ul, comment);
  }

  root.append(ul);
}

export {createCommentList}