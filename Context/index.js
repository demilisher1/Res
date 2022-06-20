
class Fruit {
    constructor(props) {
        this.name = props.name;
        this.color = props.color;
        this.sens = props.sens;
        this.price = props.price;
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


const initValue = 0;
const sumInitValue = List.reduce(function (acumulator, currentValue) {
    if () {
        acumulator = acumulator + currentValue.price;
        return acumulator
    } else {

    }

}, initValue)

// const initValue = 0;
// const sumInitValue = List.reduce((acum, Value) => acum + Value.price, initValue );
console.log(sumInitValue);

// let x = 0;
// for (let object of List) {
//     x = x + object.price
// };
// console.log(x)





// console.log(List);

