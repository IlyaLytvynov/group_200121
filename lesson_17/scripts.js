import {Car} from './car.js'
import {Game} from './game.js'

const body = document.querySelector('body')
// const myCar = new Car(body, 10, 20);
// myCar.render()
// const myCar = new Car(body, 50, 50,  './assets/images/car.png', 150);
// myCar.render()
// myCar.move()
// const myCar2 = new Car(body, 50, 150, './assets/images/car2.png', 250);
// myCar2.render()
// myCar2.move()

const myGame = new Game(body)
myGame.render()
