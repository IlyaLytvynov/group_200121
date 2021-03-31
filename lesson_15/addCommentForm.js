const getUniqId = () => {
  return Math.floor(Math.random() * 999).toString()
}

const getInputUniqId = () => {
  return 'add-comment-form_'+getUniqId()
}


const addCommentForm = (root, onSubmitSuccess) => {
  console.log(getInputUniqId())
  const nameId = getInputUniqId();
  const textId = getInputUniqId();
  const uploadId = getInputUniqId();
  const contentTemplate = `
    <label class="add-comment-form__field" for="${nameId}">
      <span class="add-comment-form__label">Author:</span>
      <input id="${nameId}" 
        class="add-comment-form__native-input" 
        type="text" 
        name="author"
        required 
        placeholder="Enter your name">
    </label>
    <label class="add-comment-form__field" for="${textId}">
      <span class="add-comment-form__label">Text:</span>
      <textarea id="${textId}" 
        class="add-comment-form__native-input add-comment-form__native-input_textarea" 
        type="text" 
        name="text" 
        required 
        placeholder="Enter your comment"></textarea>
    </label>
    <label class="add-comment-form__field" for="${uploadId}">
      <span class="add-comment-form__label">Upload image:</span>
      <input id="${uploadId}" 
        class="add-comment-form__unpload-input" 
        type="file" 
        name="image"/>
    </label>
    <img style="display: none" class="add-comment-form__preview"/>
    <button type="submit">Send comment</button>
    <button type="reset">Clear</button>
  `;

  const formElement = document.createElement('form');

  formElement.classList.add('add-comment-form');
  formElement.innerHTML = contentTemplate;

  const uploadInput = formElement.querySelector(`#${uploadId}`);
  const preview = formElement.querySelector('.add-comment-form__preview')

  uploadInput.addEventListener('change', (e) => {
    if(uploadInput.value) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        console.log('HELLO WORLD', fileReader);
        preview.src = fileReader.result;
        preview.style.display = 'inherit';
      };

      const file = uploadInput.files[0];

      fileReader.readAsDataURL(file)
    }
  })
  
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);

    fetch('http://localhost:4000/comments', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if(response.status < 400) {
        return response.json()
      }
      throw {
        errorStatus: response.status, 
        message: response.statusText
      }
    })
    .then(comment => {
      onSubmitSuccess(comment)
    })
    .catch((e) => {
      console.error(e)
    })
  })

  root.append(formElement)
}

export {addCommentForm}