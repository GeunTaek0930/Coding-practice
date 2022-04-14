let isShow = true;
let checked = false;

if (isShow) {
  console.log('Show!');
}

if (checked) {
  console.log('Checked!'); //출력안됌
}

if (isShow) {
  console.log('Show!');
} else {
  console.log('Hide?'); //출력안됌
}