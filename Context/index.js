// const Arr = [1,-4,7,12];
// let resultArr = 0;
//
// for (let value of Arr) {
//     if (value > 0) {
//         resultArr += value
//     }
// }
// console.log(resultArr);

// TODO::
// Задача функции: Изменить значения массива при это не изменяя входящий массив то есть вернуть новый массив с новыми значениями
// Функция принимает:
// 1) массив
// 2) функцию колбека которая будет изменять значение
// Функция возвращает :  функция должна вернуть новый массив с измененными значениями

// const Arr = [1,-4,7,12];
// function customMap(array, change) {
//     let result = [];
//     for (let value of array) {
//         result.push(change(value))
//     }
//     return result
// }
//
// const map = customMap(Arr)
// console.log(map)
//



// function suma (money, sok) {
//     debugger
//     let sum = 0;
//     for (let value of money) {
//         if (value > 0) {
//             sum = sum + sok(value)
//         }
//     }
//     return sum
// };
//
// const result = suma(Arr, sok)
// const result2 = suma(Arr, nadva)
//
// console.log(result)
// console.log(result2)
//
//
// function sok(a) {
//     return a * a
// }
//
// function nadva(a) {
//     return a / 2
// }

// const posN = Arr.filter(function (a) {
//     debugger
//     return a >= 0
// });
// const sumArr = Arr.reduce((pValue, cValue) => {
// debugger
//     if(cValue > 0){
//         return pValue + cValue
//     } else {
//         return pValue
//     }
//
//
// }, 0)
// console.log(sumArr);

// function sequence( start, step) {
//
//     let Init1 = start - step;
//     return function () {
//         return Init1 += step
//     }
//
// };
//
// function fmap(a, gen) {
//
//     return function (...arg) {
//         const resultGen = gen(...arg);
//         const relultA = a(resultGen)
//         debugger;
//         return relultA;
//     };
// }
//
// function square(x) {
//     return x * x;
// }
//
// function add(...arg) {
//     //
//     // let sum = 0;
//     // for (let i = 0; i < arg.length; i++) {
//     //     sum += arg[i]
//     // }
//     //
//     // return sum
//     // let sum = 0;
//     // for (let value of arg) {
//     //
//     //     sum += value
//     // }
//     // return sum
//      return arg.reduce((pValue, cValue) => pValue + cValue, 0);
// }
//
//
// let squareAdd = fmap(square, add);
//
//
// console.log(squareAdd(2, 4, 5, 10)); // 25 = (2 + 3) ^ 2
// console.log(squareAdd(5, 7, 8, 9)); // 144 = (5 + 7) ^ 2

// let Arr = [];
// for (let index in array) {
//     Arr.push(fn(array[index]))
// }
// return Arr;

// function sequence(start, step) {
//     let Init1 = start - step;
//     return function () {
//         return Init1 += step
//     }
// }
// // var generator = sequence(10, 3);
// // var generator2 = sequence(7, 1);
// //
// // console.log(generator()); // 10
// // console.log(generator()); // 13
// // console.log(generator2()); // 7
// // console.log(generator()); // 16
// // console.log(generator2()); // 8
//
// function take(gen, x) {
//     let newArray = [];
//     for (let index = 0; index < x; index++) {
//         newArray.push(gen())
//     }
//     return newArray
// }
//
// var gen2 = sequence(0, 2);
//
//
// console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]

//
// class Fruit {
//     constructor(props) {
//         this.name = props.name;
//         this.color = props.color;
//         this.sens = props.sens;
//         // if (props.price === undefined) {
//         //     this.price = 0;
//         // } else {
//         //     this.price = props.price
//         // }
//         this.price = props.price || 0
//     }
//
//     getColor() {
//         return this.color;
//     }
//
//     getSens() {
//         return this.sens;
//     }
// }
//
// class Apple extends Fruit {
//     constructor(props) {
//         super(props);
//         this.countCostochka = props.countCostochka
//     }
// };
//
// class Mango extends Fruit {
//     constructor(props) {
//         super(props);
//         this.tropical = props.tropical;
//     }
// };
//
// class Grape extends Fruit {
//     constructor(props) {
//         super(props);
//         this.howPcs = props.howPcs;
//     }
// };
//
//
//
//
// const Yabloko = new Apple({name: 'apple', color: 'red', sens: 'sour', countCostochka: 5, price: 22});
// const Manga = new Mango({name: 'Mango', color: 'yellow', sens: 'tart', tropical: true});
// const Vinograd = new Grape({name: 'Grape', color: 'green', sens: 'sweet', howPcs: 44, price: 88 });
//
//
// const List = [
//     Yabloko,
//      Manga,
//     Vinograd
// ];
//
// const Eblan = [];
// for (let value of List) {
//     Eblan.push(value.name)
// };
// console.log(Eblan)

// const newMap = List.map((value) => value.name)
// console.log(newMap)

// const initValue = 0;
// const sumInitValue = List.reduce(function (acumulator, currentValue) {
//     return acumulator + currentValue.price;
// }, initValue)
//
//
// // const initValue = 0;
// // const sumInitValue = List.reduce((acum, Value) => acum + Value.price, initValue );
// console.log(List);
// console.log(sumInitValue);
// console.log(List);
// let x = 0;
// for (let object of List) {
//     x = x + object.price
// };
// console.log(x)
// console.log(List);

