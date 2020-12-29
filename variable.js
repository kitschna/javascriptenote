// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible == dangerous

// 1. Use strict
// added ECMAScript 5
// use this for Valina Javascript
'use strict' // 선언하고 할 것!, 타입스크립트를 쓸때는 필요 없음

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name'

{
  let name = 'Raf';
  console.log(name)
  name = 'hello';
  console.log('name')
}

console.log(name)
console.log(globalName)

// var 를 쓰면 안되는 이유 : 아래 코드가 가능함. 
console.group(age)
age = 4;
console.log(age);
var age;

// 자바스크립트 3. 데이터타입, 중간부터 다시 노트해보기

// 3.Constnt, r(read only)
// use const whenever possible.
// only use let if variable needs to change.

const daysInweek = 7
const maxNumer = 5

// Note! 
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// Mutable data types : all objects by default are mutable in JS // 디폴트는 컴퓨터 환경에서 기본값
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes


// 4. Variable types
// primitive, single item :