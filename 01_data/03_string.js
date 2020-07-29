// String Method

const number = 10;
const value = 'abcDEFabc';

// String ( 숫자 -> 문자 변환 )
console.log(String(number)) // '10' 

// toString ( 숫자 -> 문자 변환 )
console.log(number.toString()) // '10' 

// boolean 값을 문자로 변환
console.log(String(true)) // 'true'
console.log(true.toString()) // 'true'

// indexOf(searchValue[,fromIndex]) ( 문자열이 처음으로 등장하는 인덱스를 리턴 )
// lastIndexOf(searchValue[,fromIndex]) ( 문자열이 마지막으로 등장하는 인덱스를 리턴 )
// 대소문자 구분 (값이 없으면 -1 리턴)

console.log(value.indexOf('abc')) // 0
console.log(value.indexOf('def')) // 3
console.log(value.indexOf('e', 3)) // 4 ( 해당 인덱스부터 인덱스값 검색 )
console.log(value.lastIndexOf('abc')) // 6
console.log(value.lastIndexOf('D')) // 3
console.log(value.lastIndexOf('a', 5)) // 0 ( 해당 인덱스부터 인덱스값 검색 )

console.log('--------------------')

// charAt ( 전달받은 인덱스 값에 있는 문자를 리턴 )

console.log(value.charAt(0)) // 'a'
console.log(value.charAt(10)) // 전달받은 인덱스가 문자열의 길이보다 클 경우에는 빈 문자열을 리턴

