
class Car {
  constructor(root, x, y, height = 100, imgUrl =  './assets/images/car.png', name) {
      this.x = x;
      this.y = y;
      this.imgUrl = imgUrl;
      this.height = height;
      this.root = root;
      this.speed = Math.floor(Math.random() * 10);
      this.name = name;
  }

  move() {
    this.x += this.speed;
    this.carImg.style.left = `${this.x}px`;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  render() {
      this.carImg = document.createElement('img');// 
      // this.carImg = "<img src=“http://nostarch.com/images/car.png”/>";
      console.log(this.carImg)
      this.carImg.src= this.imgUrl;
      this.carImg.style.position = 'absolute';
      this.carImg.style.left = `${this.x}px`;
      this.carImg.style.top = `${this.y}px`;
      this.carImg.style.height = `${this.height}px`;
      this.root.append(this.carImg);
  }

  clear() {
    this.carImg.remove()
  }
}

export {Car}