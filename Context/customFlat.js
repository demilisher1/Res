// function smartSum(array, result = []) {
//     for (let value of array) {
//         if (Array.isArray(value)) {
//             smartSum(value, result)
//         }  else {
//             result.push(value)
//         }
//     }
//     return result
// }
//
// const result2 =  smartSum([1,2,[[3,4],5],6]);
//
// console.log(result2);


// function user(name) {
// alert('Привет ' + name);
// };
//
// function userInputName(callback) {
//     let userName = prompt('Введите ваше имя ');
//     callback(userName)
// };
//
// userInputName(user)

// const d = {
//     a: function() {
//         console.log('123')
//     },
//     b: () => {
//         console.log('456')
//     },
//     c: () => {
//         console.log(this)
//         d.a();
//         d.b();
//     },
//     cc: function () {
//         console.log('leve1', this)
//         return {
//             test: function () {
//                 return () => {
//                     console.log('leve2', this)
//                     return () => {
//                         console.log('leve3', this)
//                         return () => {
//                             console.log('leve4', this)
//                             return function() {
//                                 console.log('leve5', this)
//                                 this.name = 123
//                             }
//
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// d.cc().test()()()()();

let value = "Сюрприз!";

function f() {
    let value = "ближайшее значение";

    function g() {
        debugger;
        // в консоли: напишите alert(value); Сюрприз!
    }

    return g;
}

let gb = f();
gb();


