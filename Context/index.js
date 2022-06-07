
//
// function abc() {
//     console.log(' Внутри функции')
//     console.log(this);
//     console.log(3+5/2);
//     this.style.background = 'red';
// }
 //abc();

// document.querySelector('p').onclick = abc;
// p.addEventListener()

// console.log('Глобальный', this);

const obj = {
    a: 10,
    newFunc: function () {
        console.log(this);
    },
    arrowFunc: () => {
        console.log(this)
    }
};

const obj2 = {
    asd: function () {
       console.log(this)
    },
    qwe:{
        asde: function () {
            console.log('2', this)
        },
        zxc: () => {
            console.log('3', this)
        }
    },
    hello: {
        aaa: function () {
            console.log(this)
        },
        zzz: function () {
            console.log(this)
        },
    },

    zxc: function () {
        return [
            {
                homeWork3: function () {
                    console.log('homeWork3', this)
                }
            }
        ]
    }

};


//HomeWork 1
const homeWork1 = obj2.qwe;

homeWork1.asde();

//HomeWork2

// const homeWork2 = obj2.hello.aaa.bind(obj2.hello);

// homeWork2();

//HomeWork 3

// вывести console.log('homeWork3', this)








