class Button {
  constructor(root, title, t) {
    this.root = root;
    this.title = title;
    this.t = t
  }

  render() {
    const el = document.createElement('button');
    el.classList.add('btn');
    el.textContent = this.title;

    el.addEventListener('click', () => {
      console.log('HELLO');
      this.t()
    })

    this.root.append(el)
  }
}

export {Button}