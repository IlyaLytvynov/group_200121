class Light {
  constructor(root, color) {
    this.root = root;
    this.color = color
    this.isEnabled = false;
  }

  render() {
    this.domElement = document.createElement('div');
    this.domElement.style.borderRadius = '50%';
    this.domElement.style.background = 'grey';
    this.domElement.style.width = '100px';
    this.domElement.style.height = '100px';
    this.root.append(this.domElement);
  }

  toggleOn() {
    this.isEnabled = true;
    this.domElement.style.backgroundColor = this.color;
  }

  toggleOff() {
    this.isEnabled = false;
    this.domElement.style.backgroundColor = 'grey';
  }

  toggle() {
    if(this.isEnabled === true) {
      this.toggleOff();
    } else {
      this.toggleOn();
    }
  }
}

export {Light}