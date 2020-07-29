// 함수 ( Function )
// 하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록을 의미

// 함수의 정의
function func(arg01, arg02){
    // func : 함수의 이름
    // arg01, arg02 ... : 함수의 매개변수
    // return : 함수의 결과값 을 리턴
    return console.log(arg01 + arg02)
}

// 함수의 호출
// arg01 : 2 
// arg02 : 3
func(2, 3); // 5

// 값으로서의 함수
function add(x){ // 덧셈식 함수를 정의
    return x + x
};
var addNum = add; // 변수 addNUm 에 add 함수를 대입
console.log(add(3)); // 3 + 3 = 6 ( 함수 add를 호출 )
console.log(addNum(4)); // 4 + 4 = 8 ( 변수 addNum 을 함수처럼 호출 )
