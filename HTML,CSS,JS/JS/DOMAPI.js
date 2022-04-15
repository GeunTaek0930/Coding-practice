let boxEl = document.querySelector('.box');

console.log(boxEl)

boxEl.addEventListener('click', function () {
  console.log('Click!!');
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
});


/*
HTML 요소 1개 검색/찾기
const boxEl = document.querySelector('.box');

HTML 요소에 적용할 수 있는 메소드
boxEl.addEventListener();

인수를 추가 가능
boxEl.addEventListener(1,2);

이벤트
boxEl.addEventListener(`click`, 2);

핸들러
boxEl.addEventListener(`click`, function() {
  console.log(`click~!`);
};)
*/


/*
HTML 요소 검색/찾기
const boxEl = document.querySelector('.box');

요소의 클래스 정보 객체 활용
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains);

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains);
*/