// 데이터 타입
const num = 1 // 숫자(number)
const string = '2' // 문자(string)
const array = ['kim', 'eung', 'gil'] // 배열(array)
const object = {firstName: 'kim', lastName: 'eunggil'} // 객체(object)
const boolean = true; // 논리 true or false (boolean)
const symbol = Symbol(); // es6 부터 사용
const Null = null; // 존재하지않음(null)
const Undefined = undefined // 비어있는값 or 초기화한적 없는 값(undefined)

// typeOf (javascript 데이터 타입을 찾기 위한 함수)

console.log(typeof num) // number
console.log(typeof string) // string
console.log(typeof array) // object(array) 베열도 객체로 본다.
console.log(typeof object) // object
console.log(typeof boolean) // boolean
console.log(typeof symbol) // Symbol()
console.log(typeof Null) // object(null) 존재하지않는 null 값도 javascript 에서는 객체로 본다.
console.log(typeof Undefined) // undefined

console.log('--------------------')

// undefined 와 null 의 차이

console.log(typeof undefined) // undefined
console.log(typeof null) // null
console.log(null === undefined) // false
console.log(null == undefined) // true

// 기존 값들을 
// undefined 및 null 을 사용하여
// 비어있는 값으로 만들 수 있다.