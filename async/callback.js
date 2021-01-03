'use strict'

// JavaScript is synchronous. 
// Execute the code block by order after hoisting.
// hoisting: var, function declaration
// hoisting은 면접에서도 자주 나옴, 위 것들이 자동적으로 제일 위로 올라가는 것.
// 자동적으로 실행되는 것

console.log('1')
setTimeout(function(){ // 나중에 따로 한번 더 정리하기
  console.log('2')    
}, 1000) // 밀리세컨드, 1000밀리세컨드 = 1초
console.log('3')

// Synchronous callback
function printImmediately(print) {
  // printImmediately 는 wrapping 함수
  print() //print는 callback 함수
}

printImmediately(() => console.log('hello'))

// Asynchronous callback
function printWithDelay(print, timeout){ 
  // printWithDelay 는 wrapping 함수
  setTimeout(print, timeout); // setTimeout은 callback함수
}
 
printWithDelay(() => console.log('aync callback'), 2000);


console.clear()

// Callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => {
      if (
        (id === 'Raf' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not! found!!!')) 
        // Error 생성자는 오류 객체를 생성합니다. 
        // Error 객체의 인스턴스는 런타임 오류가 발생했을 때 던져집니다. 
        // Error 객체를 사용자 지정 예외의 기반 객체로 사용할 수도 있습니다.
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(() => {
      if(user === 'Raf'){
        onSuccess({ name: 'Raf', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id'); 
// 브라우저 api, 창이 열리고 입력할 수 있으며, 
// 그 입력된 값을 매개변수에 할당 할 수 있음 
const password = prompt('enter your password');

userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWitheRole => {
        console.log(`Hi ${userWitheRole.name}! Your role is ${userWitheRole.role}`)
      },
      (error) => {
        console.log(error)
      }
    )
  },
  (error) => {
    console.log(error)
  }
);