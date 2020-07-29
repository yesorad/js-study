// 변수 ( variable )
// 변수는 선언 단계 > 초기화 단계 > 할당 단계 에 걸쳐 생성

// const ( 블록 스코프 단위로 호이스팅 )
// 재선언, 재할당 모두 불가
const testConst = '2'
console.log(testConst) // 2
const testConst = '4' // SyntaxError: Identifier 'testConst' has already been declared ( 변수 'testConst'은 이미 선언 됨 )
console.log(testConst) 
testConst = '8'    
console.log(testConst) // TypeError: Assignment to constant variable. ( 상수(const) 에 재할당 불가 )