function createLamp(root) {
  const lamp= document.createElement('div');
  lamp.classList.add('lamp')
  const button = document.createElement('button');
}

const createPost = (root, postData) => {
  const container = document.createElement('div');
  const name = document.createElement('h2');
  name.textContent = postData.author
}

createPost(document.querySelector('body'), {
  "author": "Santa!",
  "text": "Ho-Ho-Ho",
  "createdAt": 1609078953695,
  "avatarUrl": "https://boring-fe.herokuapp.com/images/2020-12-27T14:22:33.688Z-santa-icon.png",
  "id": 1
  })

