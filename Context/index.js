
class Fruit {
    constructor(props) {
        this.name = props.name;
        this.color = props.color;
        this.sens = props.sens;
        // if (props.price === undefined) {
        //     this.price = 0;
        // } else {
        //     this.price = props.price
        // }
        this.price = props.price || 0
    }

    getColor() {
        return this.color;
    }

    getSens() {
        return this.sens;
    }
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




const Yabloko = new Apple({name: 'apple', color: 'red', sens: 'sour', countCostochka: 5, price: 22});
const Manga = new Mango({name: 'Mango', color: 'yellow', sens: 'tart', tropical: true});
const Vinograd = new Grape({name: 'Grape', color: 'green', sens: 'sweet', howPcs: 44, price: 88 });


const List = [
    Yabloko,
     Manga,
    Vinograd
];

const Eblan = [];
for (let value of List) {
    Eblan.push(value.name)
};
console.log(Eblan)


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

