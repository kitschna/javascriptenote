'use strict'

// Promise is a JavaScript object for asynchronous operation.
// state, 상태를 파악하는게 중요. 
// 기능을 수행하고 있는 중인지, 성공했는지 실패했는지 파악
// producer, 정보를 제공하는 사람,
// consumer, 정보를 사용하는 사람 을 파악하는게 중요

// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. proooducer
// when new Promise is created, the excutor runs automatically.excutor 함수가 바로 실행 됨.
const promise = new Promise((resolve, reject) => { 
  // resolve: 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 콜백함수 
  // reject: 기능을 수행하다가 중간에 문제가 생기면 호출함 
  // doing some heavy work (network, read files)
  console.log('doing something...'); // executor 함수가 바로 실행 됨.
  setTimeout(() => {
    resolve('ellie');
    reject(new Error('no network!!')) // Error object는 나중에 다시 정리.
  }, 2000)
})

// 2. Cosumers: then, catch, finally
promise // then은 성공적인 case.
  .then(value => { // 여기서 value 는 resolve 콜백함수의 인자. 위에서의 'ellie'
    console.log(value); 
  }) // catch는 실패한 case.
  .catch(error => { // error === new Error('no network!!')
    console.log(error) 
  })
  .finally(() => { // 기능의 수행이 성공이든 실패이든 마지막으로 수행됨.
    console.log('finally')  
  })
  
// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000)
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
const getKen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(` 🐔: Ken `), 1000);
  });
const getEgg = function(Ken) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${Ken} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${Ken} => 🥚`)), 1000);
  })
};
const cook = Egg => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${Egg} =>  🎂`), 1000)
  })

  getKen() // resolve(value), value === ` 🐔: Ken `
    .then(Ken => getEgg(Ken))
    .catch(error => {
      return '🥑 '
    })
    .then(a  => cook(a))
    .then(meal => console.log(meal))
    
  
    // .then(Ken => getEgg(Ken))
    // .then(Egg => cook(Egg))
    // .then(final => console.log(final))
  
// 아래처럼 쓸수도 있음
// getKen()
//   .then(getEgg)
//   .then(cook)
//   .then(console.log)