let a = document.getElementById('header-two');
let text1 = a.textContent;
console.log(text1);

let el = document.getElementsByTagName("section")[0];
console.log(el);

const list = document.querySelector('li:nth-of-type(5n)');
let textLi = list.textContent;
console.log(textLi);

let elClass = document.getElementsByClassName('hatred-level-block')[0];
console.log(elClass);
