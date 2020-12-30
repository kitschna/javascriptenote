'use strict'

// 1. Stirng concatenation
 console.log('my' + 'cat');
 console.log('1' + 2);
 console.log(`string literals: 
 
 
 ''''
 1 + 2 = ${1 + 2}`);

 console.log("ellie's \n\tbook");


 // 2. Numeric operator
 console.log(1 + 1); // add
 console.log(1 - 1); // substract
 console.log(1 / 1); // divide
 console.log(1 * 1); // multiply, 곱하기
 console.log(5 % 2); // reminder, 나머지
 console.log(2 ** 3); // exponentiation, 거듭제곱
 
// 3. Increment and decrement operator

let counter = 2;
const preIncrement = ++counter; //(pre)
// 1. counter = counter + 1; 더하고
// 2. preIncrement = counter; 그다음 할당
console.log(`preIncrement: ${preIncrement}, counter : ${counter}`);

const postIncrement = counter++; //(post)
// 1. postIncrement = counter; 할당하고
// 2. counter = counter + 1; 그다음 더하기
console.log(`postIncrement: ${postIncrement}, counter : ${counter}`)

// 4. Assignment operators
let x = 6;
let y = 6;
console.log(x += y); // x = x + y 
console.log(x -= y); // x = x - y
console.log(x *= y); // x = x * y
console.log(x /= y)// x = x / y

// 5. Comparison operators
console.log(10 < 6) // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6) // greater than
console.log(10 >= 6) // greatehr than

// 6. Logical operators : || (or), && (and), ! (not)

const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value !!
console.log(`or : ${value1 || value2 || check()}`); // 함수등은 제일 뒤에 넣는게 효율적
// 만약 위에서 value1이 true였다면 check는 실행 하지도 않음. 이 포인트가 중요.

function check() {
  for(let i = 0; i < 10; i++){
    //wasting time
    console.log("🥰")
  }
    return true;
}

// && (and), finds the first truthy value !!
console.log(`and : ${value1 && value2 && check()}`); // and 역시 heavy한 operation일 경우 뒤에 넣는다.
// 만약 위에서 value1이 false라면 그대로 끝. 뒤에 있는 value 값은 볼 필요도 없음. 실행 안됨.

// often used to compress long if-statement
// nullableObject && nullableObject.something
let nullableObject = null
if (nullableObject != null){
  nullableObject.something;
}

function check() {
  for(let i = 0; i < 10; i++){
    //wasting time
    console.log("🥰")
  }
  return true;
}

// ! (not)
console.log(!value1)

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equlity, with type conversion
console.log(stringFive == numberFive)
console.log(stringFive != numberFive)
console.log('vs')

// === strict equality, no type conversion
console.log(stringFive === numberFive)
console.log(stringFive !== numberFive)
console.log('====================')

// object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1

console.log(ellie1 == ellie2)
console.log(ellie1 === ellie2)
console.log(ellie1 === ellie3)
console.log('====================')
// 예제
console.log('ex')
console.log(0 == false) // 0은 falsy한 값이다.
console.log(0 === false) // 하지만 boolean 타입은 아니다.
console.log('' == false) // ''은 falsy한 값이다.
console.log('' === false) // 하지만 boolean 타입은 아니다.
console.log(null == undefined) // null은 undfined는 같은 것으로 간주되지만
console.log(null === undefined) // 역시 boolean 타입은 아니다.


// 8. Conditinal operator : if
// if, else if, else
const name ='Raf';
if (name === 'Raf'){
  console.log('Welcome, Raf!')
} else if (name === 'coder') {
  console.log('You are amaing coder')
} else {
  console.log('unkown')
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no')

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE';
switch (browser){
  case 'IE' :
    console.log('go away!')
    break;
  case 'Chrome' :
  case 'Firefox' :
    console.log('I love you!');
    break;
  default :
    console.log('same all!')
    break;
}


// 11. Loops
// while loop, while the condition is thrthy,
// body code is executed

let i = 3;
while (i > 0){
    console.log(`while : ${i}`)
    i--;
}

// do while loop, body code is executed first, 
// then check the condition

do {
    console.log(`do while : ${i}`)
    i--;
} while (i > 0)

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`)
}



// nested loops
for (let i = 0; i < 3; i++){
 for(let j = 0; j < 3; j++){
  console.log(`i: ${i}, j:${j}`)
 }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue) //iterate(반복하다)
for(let i = 0; i < 11; i++){
    if(i % 2 !== 0){
        continue
    }
    console.log(`q1. ${i}`)
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for (let i = 0; i < 11; i++){
    if(i > 8){
        break
    }
    console.log(`Q2. ${i}`)
}