// 배열 속성 03 ( Array Method )
// unshift, push, shift, pop, splice
// - 항목이 없을 시 -1 리턴

{   // unshift ( 배열 앞에 항목 추가 )
    let array = ['A', 'B', 'C', 'D', 'E'];
    array.unshift(0);
    console.log(array) // [0, 'A', 'B', 'C', 'D', 'E']
}

{   // push ( 배열 끝에 항목 추가 )
    let array = ['A', 'B', 'C', 'D', 'E'];
    array.push(7);
    console.log(array) // ['A', 'B', 'C', 'D', 'E', 7]
}

{   // shift ( 배열 앞에 항목 제거 )
    let array = ['A', 'B', 'C', 'D', 'E'];
    array.shift();
    console.log(array) // ['B', 'C', 'D', 'E']
}

{   // pop ( 배열 끝에 항목 제거 )
    let array = ['A', 'B', 'C', 'D', 'E'];
    array.pop();
    console.log(array) // ['A', 'B', 'C', 'D',]
}

{   // splice(start, count, item1, item2 ...) 
    // - 기존 요소를 삭제 또는 교체하거나 새 요소를 추가
    // start : 시작할 요소의 인덱스
    // count : 제거할 요소의 갯수
    // item1, item2 ... : 배열에 추가할 요소 ( 지정하지 않을시 추가 없이 제거만 실행 )
    let array01 = ['A', 'B', 'C', 'D', 'E'];
    let array02 = ['A', 'B', 'C', 'D', 'E'];
    let array03 = ['A', 'B', 'C', 'D', 'E'];
    array01.splice(2, 1)
    console.log(array01) // ['A', 'B', 'D', 'E']
    array02.splice(0, 2)
    console.log(array02) // ['C', 'D', 'E']
    array03.splice(3, 0, 'F')
    console.log(array03) // ['A', 'B' ,'C', 'F', 'D', 'E']        
}