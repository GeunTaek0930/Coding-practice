const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`)
  console.log(index, boxEl);
});

/*
HTML 요소 모두 검색 / 찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

찾은 요소들 반복해서 함수 실행
익명 함수를 인수로 추가
boxEl.forEach(function () {});

첫 번째 매개변수(반복 중인 요소), 두 번째 매개변수(반복 중인 번호)
boxEls.forEach(function (boxEl, index) {});

출력
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});
*/


/*
const boxEl = document.querySelector('.box');

Getter, 값을 얻는 용도
console.log(boxEl,textContent);

Setter, 값을 지정하는 용도
boxEl.textContent = 'GEUNTAEK?!';
console.log(boxEl.textContent);
*/