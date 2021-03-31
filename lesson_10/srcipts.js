console.log('TEST!!');

const hello = 'A';
const world = 'B';

function logIn() {
  let userFullName;
  let i = 0;
  // do {
  //   userFullName = prompt('Введите свое полное имя');// admin
  //   console.log("userFullName %c" + userFullName, "color: red; font-style: italic; font-size: 18px; background-color: blue; padding: 2px;");
  //   i++;
  // } while(userFullName === undefined || userFullName === null || userFullName === '' || userFullName === ' ')
  for (
    ;
    userFullName === undefined ||
    userFullName === null ||
    userFullName === '' ||
    userFullName === ' ';

  ) {
    userFullName = prompt('Введите свое полное имя'); // admin
    console.log(
      'userFullName %c' + userFullName,
      'color: red; font-style: italic; font-size: 18px; background-color: blue; padding: 2px;'
    );
  }
  const isAdmin = userFullName === 'admin';

  console.log(
    'Равен админу? %c' + isAdmin,
    'color: green; font-style: italic; font-size: 18px; background-color: yellow; padding: 2px;'
  );

  if (isAdmin) {
    // true false
    alert('Добро пожаловать админ');
    appBody.classList.add('logged-in-as-admin');
  } else {
    alert('Вы не админ! Но все равно добро пожаловать ' + userFullName);
    appBody.classList.add('logged-in-as-guest');
  }
}

function getNumber(operandName){
  let stringValue;
  let number;
  do {
    stringValue = prompt('Please enter ' + operandName);
    number = parseInt(stringValue);
  } while(isNaN(number));// 
  return number
}

function sum(a, b) { // 
  if (typeof a !== 'number' || typeof b !== 'number' ) {
    throw Error('a and b must be typeof number');
  }
  console.log(a, b)
  return a + b;
}


function test() {
  // const world = 20;
  const t = 123;
  console.log(hello, world, t);
  function childTest() {
    const y = 30;
    console.log(t, y, hello, world)
  }
  childTest()
}

findTotal();
// FUNCTION DECLARATION
function findTotal() {
  console.log(hello, world);
  const operandA = getNumber('A');
  const operandB = getNumber('B');
  const total = sum(operandA, operandB);
  alert(total)
}
// FUNCTION EXPRESSION
const myCoolFunction = function() {
  console.log('TEST')
}

// arrow FUNCTION
const myCoolFunction2 = () => {
  console.log('TEST')
}

myCoolFunction2()

const myBtn = document.querySelector('.find-total-btn');
myBtn.addEventListener('click', findTotal);

// alert('Total: ' + total)
// DOM document object model 
// const logInBtn = document.querySelector('.log-in-button');
// console.log(logInBtn);
// // logInBtn.classList.add('test');
// // logInBtn.style.background = 'red'
// // logInBtn.textContent = 'TEST'
// logInBtn.addEventListener('click', logIn)
