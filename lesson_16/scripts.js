'use strict'
import {Button} from './button.js'
import {Light} from './light.js'
// OOD 
// JAVA OOD
// C++
// JS class -> object

// const t = new Array()
// console.log(t)
const root = document.querySelector('body')
const redLight = new Light(root, 'red')
redLight.render()

const blueLight = new Light(root, 'blue')
blueLight.render()
blueLight.toggleOn()

const btn = new Button(root, 'Toggle lights', () => {
  redLight.toggle()
  blueLight.toggle()
})
btn.render()

const btn2 = new Button(root, 'SwitchOff all', () => {
  redLight.toggleOff()
  blueLight.toggleOff()
})
btn2.render()


