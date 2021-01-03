// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['apple', 'banana'])
console.log(json)

const rabbit = {
  name : 'tori',
  color : 'white',
  size : null,
  birthDate : new Date(),
  //symbol : Symbol('id'), // symbol도 포함되지 않는다.
  jump : () => {
      console.log(`${name} can jump!`) // 함수는 JSON 포함되지 않는다.
  }
}

json = JSON.stringify(rabbit);
console.log(json)

console.log(`======`)
json = JSON.stringify(rabbit, ['name', 'color', 'size']);

console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'Raf' : value;
});

console.log(json)
console.clear()


// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit)
const obj = JSON.parse(json)
console.log(obj)
rabbit.jump() // 사용할 수 있다.
// obj.jump()는
// 이미 JSON.strigify를 하면서 함수를 전달하지 않았기 때문에 사용불가
// 그래서 사용하려면, 

const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
})
console.log(obj2)
console.log(rabbit.birthDate.getDate())
console.log(obj2.birthDate.getDate())
