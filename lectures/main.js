console.log('Hello Javascript!!');
console.log('Hello Javascript!!', '헬로우!!', '즐거운공부');
console.log('안녕');

// alert('Hello Javascript');

let str = 'Hello Javascript';
let number = 30;
console.log('문자열: ', str);
console.log('숫자:', number);

function sayHello() {
  console.log('hello1');
  console.log('hello2');
  console.log('hello3');
}

sayHello();
console.log('-------------');
sayHello();

let obj = {
  number: 30, //Property (속성)
  sayHello: function () {
    console.log('obj>hello1');
    console.log('obj>hello2');
    console.log('obj>hello3');
  },
};

console.log(obj);
console.log(obj.number);
obj.sayHello();
