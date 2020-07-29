// prototype 체인

function Person(name) {
	this.name = name;
}

// 인스턴스를 만들고 이름을 추가합니다.
const my = new Person("EungGil");

// prototyope 을 이용하여 메소드를 추가합니다.
Person.prototype.last = function () {
	console.log("hello", this.name);
};

my.hello(); // hello EungGil

console.log(Person.prototype); // Person { hello: [Function] }
console.log(Person.prototype.constructor); // [Function: Person] '함수(객체) 자체를 의미함'
console.log(Person.hello); // undefined ( 객체 prototype 안쪽에 있음 )
console.log(Person.prototype.hello); // Function ( prototype 안쪽에서 호출가능 )

console.log(my instanceof Person); // true ( my 는 Person으로부터 나온 인스턴스이냐 확인 )
console.log(my instanceof Object); // true ( Object로 부터 prototype 체인을 만든 후에 나온 인스턴스 )
