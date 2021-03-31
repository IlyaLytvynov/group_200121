import {addCommentForm} from './addCommentForm.js';
import {createCommentList} from './createCommentList.js';

const allComments = [];
const formRoot = document.querySelector('main')
const onSubmitSuccess = (comment) => {
  console.log('>>>>', comment)
  comment.avatarUrl = 'http://localhost:4000/' + comment.avatarUrl;
  allComments.unshift(comment);
  console.log(allComments);
  createCommentList(formRoot, allComments);
}


addCommentForm(formRoot, onSubmitSuccess)

fetch('http://localhost:4000/comments?_sort=createdAt&_order=desc')
.then((res) => {
  return res.json()
})
.then(rawData => {
  for(let rawComment of rawData) {
    rawComment.avatarUrl = 'http://localhost:4000/' + rawComment.avatarUrl;
    allComments.push(rawComment);
  }
  createCommentList(formRoot, allComments)
})