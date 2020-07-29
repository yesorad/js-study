// prototype 상속

// 함수 객체 생성
function Person() {}

// Person 의 prototype 으로 hello 함수 생성
Person.prototype.hello = function () {
	console.log("hello");
};

// Home 이라는 함수 객체 생성
function Home(home) {
	this.home = home;
	this.where = function () {
		console.log(`where is ${this.home}`);
	};
}

Home.prototype = Person.prototype; // Home 의 prototype 을 Person 의 prototype으로 대입

const my = new Home("Seoul"); // Home의 prototype은 Person 객체로부터 상속된다.

my.hello(); // hello
my.where(); // where is Seoul

console.log(my instanceof Home); // true
console.log(my instanceof Person); // true
console.log(my instanceof Object); // true
