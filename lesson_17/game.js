import {Car} from'./car.js'

export class Game {
  constructor(root) {
    this.root = root;
    this.width = 500;
    this.height = 300;
    this.bgColor = 'limegreen';
    this.carSize = 50;
  }

  render() {
    this.gameContainer = document.createElement('div');
    this.field = document.createElement('div');
    this.field.style.width = `${this.width}px`;
    this.field.style.height = `${this.height}px`;
    this.field.style.backgroundColor = `${this.bgColor}`;
    
    this.gameContainer.append( this.field)

    this.btnStart = document.createElement('button');
    this.btnReset = document.createElement('button');

    this.btnStart.textContent = 'start';
    this.btnReset.textContent = 'stop';

    this.btnStart.addEventListener('click', () => {
      this.startGame()
    })

    this.btnReset.addEventListener('click', () => {
      this.stopGame()
    })

    this.gameContainer.append(this.btnStart);
    this.gameContainer.append(this.btnReset);
    this.root.append(this.gameContainer);
  }

  stopGame() {
    clearInterval(this.intervalId);
    this.car1.clear();
    this.car2.clear();
  }

  startGame() {
    if (this.car1 || this.car2) {
      this.stopGame()
    }

    this.car1 = new Car(this.field, 0, 0, this.carSize, undefined, 'Car 1')
    this.car2 = new Car(this.field, 0, this.carSize + 10, this.carSize, undefined, 'Car 2')

    this.car1.render()
    this.car2.render()
  
    this.intervalId = setInterval(() => {
      this.car1.move()
      this.car2.move()
     
      if (this.car1.x + this.carSize >= this.width) {
        clearInterval(this.intervalId);
        alert('Winner is:' + this.car1.name)
      }

      if (this.car2.x + this.carSize >= this.width) {
        clearInterval(this.intervalId);
        alert('Winner is:' + this.car2.name)
      }
    }, 100)
  }

}