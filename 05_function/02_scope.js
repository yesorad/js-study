// 변수의 유효범위 ( Variable Scope )

// 01. 지역변수 ( Local Scope )
// 지역변수란 함수 내부에서 선언되며, 특정 함수나 블록 내부에 국한된 스코프
// 변수가 선언된 함수 내에서만 유효하며, 함수가 종료되면 메모리에서 사라진다.
// 함수의 매개변수 또한 함수 내에서 정의되는 지역 변수처럼 동작
function local(){
    var localNum = 10; // 지역변수 localNum 10을 대입
    console.log(localNum);
}

local() // 10

// 02. 전역변수 ( Global Variable )
// 전역변수란 함수 외부에서 선언되며, 어떤 함수나 블록에도 속하지 않은 최상단 스코프
// 어느 영역에서나 접근할 수 있으며, 웹 페이지가 닫혀야만 메모리에서 사라진다.
var globalNum = 15; // 전역번수 globalNum 에 15를 대입
function global(){
    var globalNum = 20; // 지역변수 globalNum 20을 대입
    console.log(globalNum);
}

global(); // 20 ( 함수 global() 내부의 지역변수 globalNum을 호출 )
console.log(globalNum) // 15 ( 전역변수를 호출 )