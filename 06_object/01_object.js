// new Object

/*

  객체란 여러 속성을 하나의 변수에 저장할 수 있도록 해주는 데이터 타입으로
  Key / Value 를 저장할 수 있는 구조이다.

  배열, 함수, 객체, 날짜, 수학, 정규표현식 등 다 객체에 포함된다.

*/

const obj = new Object();

console.log(obj, typeof obj); // object

// key, value 표현식

const obj02 = { name: "EungGil", age: 28 };
console.log(`이름은 ${obj02.name} 이고, 나이는 ${obj02.age} 입니다.`); // 이름은 EungGil 이고, 28 입니다.
