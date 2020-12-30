// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object.
// object = { key : value };
'use strict'
// 1. Literals and properties
const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age)
}

const ellie = { name : 'ellie', age : 4 };

function print2(person) {
  console.log(person.name)
  console.log(person.age)
}

let obj1 = {} // 'object literal' syntax
let obj2 = new Object(); // 'object constructor' syntax

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob)

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob)

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob)

function printValue(obj, key) {
  console.log(obj[key]) // 이렇게 출력할때는 닷이 아닌 브라켓을 사용. 왜냐하면, 닷을 사용하면 읽어내질 못함
}

printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value
const person1 = { name: 'bob', age : 2}
const person2 = { name: 'steve', age : 3}
const person3 = { name: 'dave', age : 4}
const person4 = makePerson('raf', 20)
const person5 = makePerson2('raf', 30)
const person6 = new Person('raf', 40)
const person7 = new Person('a', 2)
function makePerson(name, age) {
  return {
    name: name, // key는 생략도 가능
    age: age
  }
}

function makePerson2(name, age) {
  return {
    name, // key는 생략도 가능
    age,
  }
}

// 또한, 위 두 함수는 class처럼 사용 가능한데, 
// 4. Constructor Function 이라고 한다.
function Person(name, age) { // 함수명은 대문자로 써주며,
  // return { return은 생략하고,
    // this = {}; 가 생략된 것이며
    this.name = name // this.로 받는다
    this.age = age // 호출할때도 new Person(name, age)로!
  //} // return this; 도 생략된 것
}

console.log(person4)
console.log(person5)
console.log(person6)

// 5. in operator: property existence check(key in obj)
console.log('name' in ellie) // T
console.log('age' in ellie) // T
console.log('random' in ellie) // F
console.log(ellie.random) // unefined

// 6. for..in vs for..of
// for(key in obj)
console.clear() // 이전의 console.log() 를 다 지움
for (key in ellie) {
  console.log(key)
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for(let i = 0; i < array.length; i++){
  console.log(array[i])
}
console.clear()
// 위 방법을 더 짧고 편하게 하는 방 법 아래
for (value of array){
  console.log(value)
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'}
const user2 = user
user2.name = 'coder';
console.log(user) 
// 여기서 user의 name은 'coder'로 바뀌었음. 
// 그 이유는 user2의 레퍼런스는 user의 레퍼런스와 같은 자료를 가르키고 있기 때문
// 그렇다면 자료를 그대로 복사해 보자. 아래
// (delete를 사용해서 바로 자료를 지울 수도 있음)

// old way
const user3 = {};
for(key in user){
  user3[key] = user[key]
}
console.clear();
console.log(user3); 
// 여기서 user3 은 user2.name = 'coder';를 주석 처리하면, 다시 원래 자료로 돌아옴

// new way
const user4 = {}; // target = user4
Object.assign(user4, user) //source = user
console.log(user4)

// another example
const fruit1 = { color : 'red'};
const fruit2 = { color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2) // 뒤의 데이터가 올라감. 뒤집어 씀
console.log(mixed.color) // blue
console.log(mixed.size) // big