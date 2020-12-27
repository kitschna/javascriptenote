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
let x = 3;
let y = 6;
console.log(x += y); // x = x + y 
console.log(x -= y); // x = x - y
console.log(x *= y); // x = x * y
console.log(x /= y)// x = x / y
