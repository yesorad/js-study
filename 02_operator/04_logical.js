// 논리 연산자 ( Logical Operator )
// - 주어진 논리식을 판단하여, 참(true) or 거짓(false) 를 리턴

const i = true;
const x = false;

// && 모두 true 일 경우 true 를 리턴 ( 논리 AND 연산 )
console.log(i && i) // true
console.log(i && x) // false

console.log('--------------------')

// || 하나라도 true 일 경우 true 를 리턴 ( 논리 OR 연산 )
console.log(i || i) // true
console.log(i || x) // true
console.log(x || x) // false

console.log('--------------------')

// ! 결과가 true 이면 false, false 이면 ture 를 리턴 (논리 NOT 연산)
console.log(!i) // false
console.log(!x) // true