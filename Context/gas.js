// let gas = document.querySelectorAll('.gas');
// for (let i = 0; i < gas.length; i++) {
// debugger
//     gas[i].onclick = function () {
//         let gallons = document.querySelector('.gallons').value;
//         let amount = this.getAttribute('data');
//         console.log(gallons * amount);
//     }
// }
// function getName() {
// console.log(this.name);
// return this
// };
// function getPrice() {
//     console.log(this.price)
//     return this
// };
//
// const prod = {
//     name: 'AMD',
//     price: 200,
//     getName,
//     getPrice
// };
//
// prod.getName().getPrice()

// let arr = [-2, 1, 0, 1354, 3, 4, 5, -6];
// let arr2 = [-2, 1, 0, 1354, 3, 4, 5, -6];
// let filtered = arr.filter((number) => number > 3);
// console.log(filtered);


// let filtered2 = arr.filter(function (value, index) {
//     return true
// })
// console.log(filtered2);

// let b = arr.map(function (value) {
//     debugger
//     console.log(value)
//     return value*2 + 1
//
// });
// let b = arr.reduce(function (acum, current) {
//
//     // if (current > acum) {
//     //     acum = current
//     // }
//     if (current > 0) {
//         return acum += current
//     }
//     return acum
// })
// console.log(b);


class Test {
    constructor(props) {
        this.name = props.name
    }

    testMethod(){
        return this.name
    }
    static testMethod2(){
        return this.name
    }
    static testMethod3(){
        return 'asd'
    }
}

const asd1 = Test;
const asd2 = Test({name: 'lesha'});
const asd3 = new Test({name: 'lesha'});

console.log(asd1); // Присваиваем переменной asd объект Test.
console.log(asd2); // конструктор не даст сделать без new
console.log(asd3); // Создастся экземпляр объекта Test в котором будет будет name: 'Lesha'
console.log(asd1.testMethod()); // 'Lesha'
console.log(asd1.testMethod2()); //
console.log(asd1.testMethod3());
console.log(asd2.testMethod());
console.log(asd2.testMethod2());
console.log(asd2.testMethod3());
console.log(asd3.testMethod());
console.log(asd3.testMethod2());
console.log(asd3.testMethod3());