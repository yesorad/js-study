// 변수 ( variable )
// 변수는 선언 단계 > 초기화 단계 > 할당 단계 에 걸쳐 생성

// var ( 함수 스코프 단위로 호이스팅 )
// 함수 스코프를 사용하며 재할당, 재선언 모두 가능

var testVar = 1;
console.log(testVar); // 1

var testVar = 5;
console.log(testVar); // 5

var testVar = 10;
console.log(testVar); // 10


// undefiend로 초기화되어 호이스팅
console.log(hoistingVar); // undefiend
var hoistingVar = 3;
console.log(hoistingVar); // 3
