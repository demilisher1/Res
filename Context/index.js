
class Fruit {
    constructor(props) {
        this.name = props.name;
        this.color = props.color;
        this.sens = props.sens;
    }

    getColor(){
        return this.color;
    }
    getSens() {
        return this.sens;
    }

    // static kakDela(){
    //     return 'норм'
    // }
}

class Apple extends Fruit {
    constructor(props) {
        super(props);
        this.countCostochka = props.countCostochka
    }
};

class Mango extends Fruit {
    constructor(props) {
        super(props);
        this.tropical = props.tropical;
    }
};

class Grape extends Fruit {
    constructor(props) {
        super(props);
        this.howPcs = props.howPcs;
    }
};


// const ewqeqw = Fruit.kakDela();
// console.log(ewqeqw);


const Yabloko = new Apple({name: 'apple', color: 'red', sens: 'sour', countCostochka: 5});
const Manga = new Mango({name: 'Mango', color: 'yellow', sens: 'tart', tropical: true});
const Vinograd = new Grape({name: 'Grape', color: 'green', sens: 'sweet', howPcs: 44 });

const List = [
    Yabloko,
    Manga,
    Vinograd
]

console.log(List);

// alert(matureOrange.name)
// alert(greenOrange.name)
// alert(matureOrange.canYeat)


// function Fruits(titleElement) {
// this.title = titleElement;
// }
//
// let fruit = new Fruits('Apple');
// let fruit2 = new Fruits('Orange')
// console.log(fruit.title)

// const obj = {
//     a: 10,
//     newFunc: function () {
//         console.log(this);
//     },
//     arrowFunc: () => {
//         console.log(this)
//     }
// };
// const obj2 = {
//     asd: function () {
//        console.log(this)
//     },
//     qwe:{
//         asde: function () {
//             console.log('2', this)
//         },
//         zxc: () => {
//             console.log('3', this)
//         }
//     },
//     hello: {
//         aaa: function () {
//             console.log(this)
//         },
//         zzz: function () {
//             console.log(this)
//         },
//     },
//
//     zxc: function () {
//         return [
//             {
//                 homeWork3: function () {
//                     console.log('homeWork3', this)
//                 }
//             }
//         ]
//     }
// };
// const obj3 = {
//     test1: {
//         qwe: function (objectName) {
//             console.log(this)
//             return obj3.test1[objectName]
//         },
//         lesha: {
//             zdorova: 'aga',
//             aaa: function () {
//                 console.log(this)
//                 return this.zdorova
//             }
//         },
//         alex: {
//             privet: 'oй boy',
//             aaa: function () {
//                 console.log(this)
//                 return this.privet
//             }
//         }
//     }
//
// }
// obj3.test1.qwe()
// obj3.test1.lesha.aaa()
// obj3.test1.alex.aaa()
//
// const cheto = obj3.test1.qwe('alex');
// console.log(cheto)
// Что выведет консоль?
// obj2.zxc()[0].homeWork3() //Добрались до функции homeWork3
// console.log(obj2.zxc()[0].homeWork3())
// console.log(obj2.zxc()[0].homeWork3)
// console.log(obj2.zxc()[0]["homeWork3"])
// function Fruits(name, canYeat) {
//     this.name = name;
//     this.canYeat = canYeat;
// };
//
// let fruit = new Fruits();
//
// function Orange(name) {
//     this.name = name;
// };
//
// Orange.prototype = fruit;
//
// matureOrange = new Orange('Уральские');
// greenOrange = new Orange('Пермские');
//
// matureOrange.canYeat = true
// greenOrange.canYeat = false
//
// console.log(matureOrange, greenOrange)

// alert(matureOrange.name)
// alert(greenOrange.name)
// alert(matureOrange.canYeat)


// function Fruits(titleElement) {
// this.title = titleElement;
// }
//
// let fruit = new Fruits('Apple');
// let fruit2 = new Fruits('Orange')
// console.log(fruit.title)

// const obj = {
//     a: 10,
//     newFunc: function () {
//         console.log(this);
//     },
//     arrowFunc: () => {
//         console.log(this)
//     }
// };
// const obj2 = {
//     asd: function () {
//        console.log(this)
//     },
//     qwe:{
//         asde: function () {
//             console.log('2', this)
//         },
//         zxc: () => {
//             console.log('3', this)
//         }
//     },
//     hello: {
//         aaa: function () {
//             console.log(this)
//         },
//         zzz: function () {
//             console.log(this)
//         },
//     },
//
//     zxc: function () {
//         return [
//             {
//                 homeWork3: function () {
//                     console.log('homeWork3', this)
//                 }
//             }
//         ]
//     }
// };
// const obj3 = {
//     test1: {
//         qwe: function (objectName) {
//             console.log(this)
//             return obj3.test1[objectName]
//         },
//         lesha: {
//             zdorova: 'aga',
//             aaa: function () {
//                 console.log(this)
//                 return this.zdorova
//             }
//         },
//         alex: {
//             privet: 'oй boy',
//             aaa: function () {
//                 console.log(this)
//                 return this.privet
//             }
//         }
//     }
//
// }
// obj3.test1.qwe()
// obj3.test1.lesha.aaa()
// obj3.test1.alex.aaa()
//
// const cheto = obj3.test1.qwe('alex');
// console.log(cheto)
// Что выведет консоль?
// obj2.zxc()[0].homeWork3() //Добрались до функции homeWork3
// console.log(obj2.zxc()[0].homeWork3())
// console.log(obj2.zxc()[0].homeWork3)
// console.log(obj2.zxc()[0]["homeWork3"])
