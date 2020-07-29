// 함수 호이스팅 ( Function Hoisting )
// var을 통해 정의된 변수의 선언문을 유효 범위의 최상단으로 끌어올리는 것 ( 선언과 할당의 분리 )

{
	// var 함수 호이스팅 전 예제
	var globalNum = 10; // globalNum을 전역 변수로 선언

	function hoisting() {
		console.log(`지역변수 선언 전 globalNum의 값은 ${globalNum} 입니다.`); // undefined
		var globalNum = 20; // globalNum을 지역 변수로 선언
		console.log(`지역변수 globalNum의 값은 ${globalNum} 입니다.`); // 20
	}

	hoisting();
}

{
	// var 함수 호이스팅 후 예제 모습
	// 선언 단계와 초기화 단계가 한번에 실행
	var globalNum = 10; // globalNum을 전역 변수로 선언

	function hoisting() {
		// 스코프의 선두에서 선언 단계와 초기화 단계가 실행 ( 22 Line )
		// 변수 선언문 이전에 변수를 참조 가능
		var globalNum; // 함수 호이스팅에 의해 변수의 선언 부분이 함수의 맨 처음 부분으로 이동
		console.log(`지역변수 선언 전 globalNum의 값은 ${globalNum} 입니다.`); // undefined ( 언만 되어 있고, 할당은 안된 상태  )
		var globalNum = 20; // globalNum을 지역 변수로 선언
		console.log(`지역변수 globalNum의 값은 ${globalNum} 입니다.`); // 20 ( 변수가 선언 되어 초기화 된 상태 )
	}

	hoisting();
}

{
	// let, const 호이스팅 의 경우
	// 선언된 변수는 선언 단계와 초기화 단계가 분리되어 실행
	function hoisting() {
		// 스코프의 선두에서 선언 단계가 실행
		// 아직 변수가 초기화 ( 메모리 공간 확보 및 undefined로 초기화 )가 안된 상태
		// 변수 선언문 이전에 변수를 참조 불가능

		console.log(`변수 선언 전 hoistingLet 값은 ${hoistingLet} 입니다.`); // ReferenceError: hoistingLet is not defined ( 변수 'hoistingLet' 선언 안된 상태 )

		let hoistingLet; // 변수 선언문에서 초기화 단계가 실행
		console.log(hoistingLet); // undefined ( 선언만 되어 있고, 할당은 안된 상태 )

		hoistingLet = 10; // 할당문에서 할당 단계가 실행
		console.log(hoistingLet); // 10
	}

	hoisting();
}
