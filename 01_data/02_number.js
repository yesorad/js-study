// Number Method

// parseInt ( 문자 -> 숫자 (정수) 변환 )
console.log(parseInt('12')) // 12
console.log(parseInt('3.14')) // 3
console.log(parseInt('3.14 문자')) // 3
console.log(parseInt('문자 3.14')) // NaN ( 문자열이 앞에 있으면 NaN )

console.log('---------------------')

// parseFloat ( 문자 -> 숫자 (소수) 변환 )
console.log(parseFloat('12')) // 12
console.log(parseFloat('3.14')) // 3.14
console.log(parseFloat('3.14 문자')) // 3.14
console.log(parseFloat('문자 3.14')) // NaN ( 문자열이 앞에 있으면 NaN )

console.log('---------------------')

// NaN ( Not a Number )
console.log(NaN == undefined); // false
console.log(NaN == null); // false
console.log(undefined == null); // true
console.log(NaN === NaN); // false
console.log(NaN !== NaN); // true
console.log(isNaN(NaN)) // true ( 전달된 값이 NaN 인지 아닌지 검사 );