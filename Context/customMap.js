// написать функцию котороя принимает 2 аргумента каллбак и массив,
//     функция возвращает новый видоизмененный массив
// результат выполнения функции колбека должен менять значение в массиве

const Arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function customMap(callback, array) {
    let resultArr = [];
    for (let value of array) {
        resultArr.push(callback(value))
    }
    return resultArr
};

function callback(value) {
    return value + 1
}

console.log(customMap(callback, Arr));
