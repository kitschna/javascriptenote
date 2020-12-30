'use stric'

// Array😍

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits)
console.log(fruits[0])
console.log(fruits.length)

console.clear()
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

console.clear()

// c. forEach API
fruits.forEach((fruit) => console.log(fruit))

// fruits.forEach(function(fruit, index, array){
//     console.log(fruit, index, array)
// })

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍉')
console.log(fruits)

// pop: remove an item from the end
fruits.pop()
console.log(fruits)

// unshift: add an item to the benigging
fruits.unshift('🥝', '🧅')
console.log(fruits)


// shift: remove an item from the benigging
fruits.shift()
console.log(fruits)

// note!!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍋', '🥔', '🍠')
console.log(fruits)
fruits.splice(1, 1)
console.log(fruits)
fruits.splice(1, 1, '🥭', '🦴')
console.log(fruits)

// combine two arrays
const fruits2 = ['🥭', '🦴']
const newFruits = fruits.concat(fruits2)
console.log(newFruits)

console.clear()

// 5. Searching 
// indexOf: find the index
console.log(fruits)
console.log(fruits.indexOf('🍋')) // index number
console.log(fruits.indexOf('🍠')) // index number
console.log(fruits.indexOf('🥐')) // -1(없으면 return -1)

// includes
console.log(fruits.includes('🍋'))// true
console.log(fruits.includes('🥐'))// false

console.clear()

// lastIndexOf
fruits.push('🍋')
console.log(fruits)
console.log(fruits.indexOf('🍋')) // 앞에서 부터 검사하여 같은 배열의 index 반환
console.log(fruits.lastIndexOf('🍋')) // 뒤에서 부터 검사하여 같은 배열의 index 반환

// homework
// Array에 있는 메서드들의 정의와 사용법 한번 읽어보기. (2020.12.31)


