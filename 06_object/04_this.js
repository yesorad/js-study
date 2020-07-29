// this

/* 
  객체 안의 this 는 해당 객체를 가르키지만,
  arrow function으로 만든 함수 내부에서의
  this는 전역 객체 window를 가리킨다.
*/

const obj = {
	name: "EungGil",
	this01() {
		console.log("this01", this);
	},
	this02: function () {
		console.log("this02", this);
	},
	this03: () => {
		console.log("this03", this);
	},
};

obj.this01();
// this01 {
//   name: 'EungGil',
//   this01: [Function: this01],
//   this02: [Function: this02],
//   this03: [Function: this03]
// }

obj.this02();
// this02 {
//   name: 'EungGil',
//   this01: [Function: this01],
//   this02: [Function: this02],
//   this03: [Function: this03]
// }

obj.this03();
// this03 {}
