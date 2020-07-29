const i = 10;
const j = 4;

// 산술 연산자 ( Arithmetic Operator )
// - 값을 피연산자로 받아 하나의 숫자값을 반환

console.log(i + j) // 10 + 4 = 14;
console.log(i - j) // 10 - 4 = 6;
console.log(i * j) // 10 * 4 = 40;
console.log(i / j) // 10 / 4 = 2.5;
console.log(i % j) // 2 ( 나눈 나머지 값 )

console.log('--------------------')

// 증감 연산자 ( increment and decrement operator )
// - 값을 피연산자로 받아 하나의 숫자값을 반환

let a = 1;
let b = 1;
let c = 1;
let d = 1;

console.log(a++) // 1 (연산자 뒤에 ++ (접미사) 이 붙으면 증가하기 전의 값을 반환)
console.log(++b) // 2 (연산자 앞에 ++ (접두사) 이 붙으면 증가한 후의 값을 반환)
console.log(c--) // 1 (연산자 뒤에 -- (접미사) 이 붙으면 감소하기 전의 값을 반환)
console.log(--d) // 0 (연산자 앞에 -- (접두사) 이 붙으면 감소한 후의 값을 반환)
