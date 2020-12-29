'use strict';

// Object-oriendted programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  //constructor
  constructor(name, age){
      //fields
      this.name = name;
      this.age = age;
  }
    
  // methods
  speak(){
      console.log(`${this.name} : hello!`)
  }
}

const ellie = new Person('ellie', 20)
console.log(ellie.name)
console.log(ellie.age)
ellie.speak()

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
   // if (value < 0){
    //     throw Error('age can not be negative')
    // }
    this._age = value < 0 ? 0 : value
  }
}

const user1 = new User('Steve', 'Job', -1)
console.log(user1.age)

// 3. Fields (public, private) // 최신 문법이라 아직 쓰기에는 무리가 있다.
// Too soon!
// MDN에서 찾아보기
class Experiment {
  publicField = 2; 
  #privatedField = 0; // class 안에서만 쓸 수 있음
}
const experiment = new Experiment();
console.log(experiment.publicField)
console.log(experiment.privatedFiled)

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }
  static printPublisher(){
    console.log(Article.publisher)
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher) // 안됨
console.log(Article.publisher)
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
}

  draw() {
    console.log(`drawing ${this.color} color!`);
  }
    
  getArea() { 
    return this.width * this.height
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape { // over writing 가능
  draw(){
    super.draw() // over writing 하면 기존의 함수는 지워지지만, 이렇게 super를 써서 부모의 것도 다시 불러올 수 있다.
    console.log('🔺') 
  }
  getArea() {
    return (this.width * this.height) /2
  }

  toString() {
    return `Triangle color : ${this.color}`
  }
}
const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw()
console.log('rectangle area is', rectangle.getArea())
console.log('=========')
const triangle = new Triangle(20, 20, 'red')
triangle.draw()
console.log('triangle area is', triangle.getArea())

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle) // T
console.log(triangle instanceof Rectangle) // F
console.log(triangle instanceof Triangle) // T
console.log(triangle instanceof Shape) // T
console.log(triangle instanceof Object) // T
console.log(triangle.toString());