

function filter (list) {
    const nArr = [];
    for (let value of list) {
        if (typeof value === 'number') {
            nArr.push(value)
        }
    }
    return nArr
}

// console.log(nArr)
console.log(filter([1,2,'a','b']),
filter([1,'a','b',0,15]));

// const nArr = [];
// function filter_list (list) {
//     // debugger
//     for (let value of list) {
//         if (typeof value === 'number') {
//             nArr.push(value)
//         }
//     }
//     return nArr
// }
//
//
//
// console.log(filter_list([1,2,'a','b']))
// console.log(filter_list([1,'a','b',0,15]))
// console.log(filter_list([1,2,'aasf','1','123',123]))
