// 비교 연산자( Comparison Operator )
// - 피연산자들을 비교하고 비교에 따라 논리 값을 반환 ( true / false )

const i = 10;
const j = 4;

console.log(i == j) // 동등 false (값이 같으면 true)
console.log(i != j) // 부등 true (값이 다르면 true)
console.log(i === j) // 일치 false (값과 타입이 같으면 true)
console.log(i !== j) // 불일치 true (값과 타입이 다르면 true)
console.log(i > j) // ~ 보다 큰 true
console.log(i >= j) // ~ 보다 크거나 같은 true
console.log(i < j) // ~ 보다 작은 false
console.log(i <= j) // ~ 보다 작거나 같은 false