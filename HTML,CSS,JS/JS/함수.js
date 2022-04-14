function helloFunc() {
  console.log(1234);
}

helloFunc();

function returnFunc() {
  return 123;
}

let a = returnFunc();

console.log(a);

function sum(b, c) {
  return b + c;
}

let b = sum(1, 2);
let c = sum(7, 12);
let d = sum(2, 4);

console.log(b, c, d);


//기명함수
function hello() {
  console.log('Hello~');
}
//익명함수
let world = function () {
  console.log(`World~`);
}
//함수호출
hello();
world();

//객체 데이터
const GEUNTAEK = {
  name: `GeunTaek`,
  age: 26,
  //메소드
  getName: function(){
    return this.name;
  }
};

const hisName = GEUNTAEK.getName();
console.log(hisName);

console.log(GEUNTAEK.getName());