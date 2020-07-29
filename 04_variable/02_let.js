// 변수 ( variable )
// 변수는 선언 단계 > 초기화 단계 > 할당 단계 에 걸쳐 생성

// let ( 블록 스코프 단위로 호이스팅 )
// 변수에 재할당이 가능
let testLet = '1' 
console.log(testLet) // testLet 1 선언
let testLet = '5'  // ( 변수 'testConst'은 이미 선언 됨 )
console.log(testLet) // testLet 1 선언
testLet = '10' // testLet 5 재할당 가능
console.log(testLet)

// let은 선언하고 나중에 값을 할당이 가능
let testLet02;
testLet02 = '10';
console.log(testLet02)


