// 배열 속성 01 ( Array Method )
// array[], length, indexOf, sort, reverse

let array = ['A', 'B', 'C', 'D', 'E'];

// array[] ( n번째 인덱스에 접근 )
console.log(array[0]) // 'A' 

//length ( 배열의 갯수 반환 )
console.log(array.length) // 5 

{   // indexOf ( 배열 내부 항목의 인덱스 찾기 )
    let array = ['A', 'B', 'C', 'D', 'E'];
    console.log(array.indexOf('C')) // 2
    console.log(array.indexOf('F')) // -1
}

{   // sort(sortFunction) ( 배열의 항목을 알파벳, 또는 지정된 함수에 따른 순서로 정렬 )
    let array = [15, 12, 9, 10, 5, 3, 1, 2]
    array.sort();
    console.log(array) // [ 1, 10, 12, 15, 2, 3, 5, 9 ] ( 지정된 함수가 없으면 오름차순, 유니코드 문자 순서로 정렬된다.)

    array.sort(function(a, b){ return a - b })
    console.log(array) // [ 1, 2, 3, 5, 9, 10, 12, 15 ] ( 오름차순 )

    array.sort(function(a, b){ return b - a })
    console.log(array) // [ 15, 12, 10, 9, 5, 3, 2, 1 ] // ( 내림차순 )
}

{   // reverse ( 배열의 순서를 반대로 바꾼다 )
    let array = ['A', 'B', 'C', 'D', 'E'];
    array.reverse();
    console.log(array) // [0, 'A', 'B', 'C', 'D', 'E']
}

{   // slice(start, end) ( 배열의 start부터 end까지(end는 미포함)에 대한 새로운 배열 객체로 리턴 )
    let array = ['A', 'B', 'C', 'D', 'E'];
    console.log(array.slice(0,3)) // ['A', 'B' , 'C']
}

{   // concat ( 다수의 배열을 합치고 병합된 배열의 사본을 리턴 )
    let array01 = ['A', 'B', 'C'];
    let array02 = ['D', 'E']
    let array03 = ['F', 'G']
    console.log(array01.concat(array02)) // ['A', 'B' , 'C', 'D', 'E']
    console.log(array01.concat(array02, array03)) // ['A', 'B' , 'C', 'D', 'E', 'F', 'G']
}







