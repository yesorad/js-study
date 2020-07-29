// 배열 속성 04 ( Array Method )
// slice, forEach, map, filter, reduce

{   // slice(start, end) ( 배열의 start부터 end까지(end는 미포함)에 대한 새로운 배열 객체로 리턴 )
    let array = ['A', 'B', 'C', 'D', 'E'];
    console.log(array.slice(0, 3)) // ['A', 'B', 'C']
}

{   // forEach(item) ( 배열의 각 요소를 한 번씩 실행 )
    // item : 처리할 배열의 요소
    let array = ['A', 'B', 'C', 'D', 'E'];
    array.forEach(function(item){
        console.log(item) // A B C D
    });
}

{   // map(item) ( 배열의 각 원소를 지정된 함수로 실행하여 새로운 배열을 리턴 )
    // item : 처리할 배열의 요소
    let array = [1, 2, 3, 4];
    let arrMap = array.map(function(item){
                    return item * 2
                })
    console.log(arrMap) // [2, 4, 6, 8]
}

const arr = [1, 2, 3, 4, 5]
arr.map((item) => {
    console.log(item)
})

{   // filter(item) ( 배열의 각 원소를 지정된 함수로 실행하며 true 인 원소들로 새로운 배열을 리턴 )
    // item : 처리할 배열의 요소
    let array = [1, 2, 3, 4, 5, 6];
    let arrFilter = array.filter(function(item){
                    return item %2 === 0
                })
    console.log(arrFilter) // [2, 4, 6]
}

{   // reduce(prevItem, currentItem, index) ( 배열의 각 원소를 지정된 함수로 실행하며 true 인 원소들로 새로운 배열을 리턴 )
    // prevItem : 이전 콜백 함수에서 리턴한 값
    // currentItem : 현재 배열 요소의 값
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arrReduce = array.reduce(function(prevItem, currentItem){
                    return prevItem + currentItem
                })
    console.log(arrReduce) // 55
}