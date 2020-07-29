// 배열 속성 02 ( Array Method )
// toString, join, some, every

{   // toString ( 배열을 문자열로 바꾸어 리턴 )
    let array = ['A', 'B', 'C', 'D', 'E'];
    console.log(array.toString()) // A, B, C, D, E
}

{   // join(value) ( 배열 원소 전부를 하나의 문자열로 합친다 )
    // value : 배열의 각 요소를 구분할 문자열
    let array = ['A', 'B', 'C', 'D', 'E'];
    console.log(array.join()) // A, B, C, D, E
    console.log(array.join('-')) // A-B-C-D-E
}

{   // some(item, index) ( 지정된 함수의 결과가 true일 때까지 배열의 각 원소를 반복 )
    // item : 현재 배열의 요소
    // index : 현재 배열 요소의 위치
    let array = [1, 2, 3, 4, 5];
    console.log(array.some(function(item, index){
        console.log(`${index} 번 ${item}`) // 2번까지 돌고 true 를 리턴
        return item % 2 === 0; // true
    }))
}

{   // every(item, index) ( 배열의 모든 요소가 특정 조건을 만족하는지 확인 )
    // item : 현재 배열의 요소
    // index : 현재 배열 요소의 위치
    let array = [1, 2, 3, 4, 5];
    console.log(array.every(function(item, index){
        console.log(`${index} 번 ${item}`) // 1번 부터 false 를 리턴
        return item % 2 === 0; // false
    }))    
}
