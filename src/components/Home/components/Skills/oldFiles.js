// const value = head.reduce( (sum, all) => `${sum} ${all} `,)
// return value;
// console.log(value);

// const newArray = body.filter(function (value,index) {
//     return value.date > "2005 - 2006"
// })
// console.log(newArray);

// const Sort = body;
// body.sort(function Array (x, y) {
//     // return x.name.localeCompare(y.name)
//     return x.position.localeCompare(y.position)
// })
// console.log(Sort)

// console.log(body[1])

// console.log(body[0].name)

//  console.log(body.length)

// console.log(body);
// let bodyNew = body;
// bodyNew.length = 2;
// console.log(body);

// body[7] = {name: 'NewJob', position: 'Разнорабочий', date: '2000-2000' };
// console.log(body);

// body.push({name: 'NewJob', position: 'Разнорабочий', date: '2000-2000' })
// console.log(body);

// body.shift();
// console.log(body);

// body.pop();
// console.log(body);

// body.unshift({name: 'NewJob', position: 'Разнорабочий', date: '2000-2000' });
// console.log(body);

// delete body[0];
// console.log(body);
// console.log(body[1]);
// console.log(body.length);

// body.splice(0, 1);
// console.log(body);

// let removed = body.splice(0, 1);
// console.log(removed);

// let newBy = body;
// newBy.splice(0, 1,  {name: 'NewJob', position: 'Разнорабочий', date: '2000-2000' });
// console.log(newBy);

// let includes = body;
// includes.splice(1, 0, {name: 'NewJob', position: 'Разнорабочий', date: '2000-2000' } );
// console.log(includes);

// let includes = body;
// includes.splice(-1, 1);
// console.log(includes);

// let arrOne = body.slice();
// console.log(body);
// console.log(arrOne);

// let arrOne = body.concat({name: 'NewJob', position: 'Разнорабочий', date: '2000-2000' });
// console.log(arrOne);


// console.log(body.indexOf(['ООО ММС']))
// TODO:: indexOf - метод который может найти индекс массива по его значению.
//  В случае с массивом body, каждым значением массива будет являться обьект,
//  а к примеру в массиве head каждым значением будет строка.
//  НО indexOF работает только с простыми массивами типа head, в которых значением является строка или число. без какой либо вложенности.
//  По этому  indexHead отработает а indexBody - не отработает,

// const indexHead = head.indexOf('Дата'); // должен быть 2
// const indexBody = body.indexOf({
//     name: 'ЗАО Манрос-М',
//     position: 'Грузчик в теплом складе',
//     date: '2005 - 2006',
// });
//
// console.log('indexHead', indexHead)
// console.log('indexBody', indexBody)
// TODO:: Но если мы приведем indexBody к простому массиву, не вложенномму, все сработает

//  const bodyNames = body.map(value => value.name)
// // const bodyNames2 = body.map(function (value){
// //     return value.name
// // })
// console.log('bodyNames - создали массив в котором только name', bodyNames) // создали массив в котором только name
//
// const indexBodyForName = bodyNames.indexOf('ЗАО Манрос-М')
// console.log('indexBodyForName', indexBodyForName)

//TODO:: Это то что я сделал.
// 1. indexOf
// 2. find
// 3.findIndex
// 4. filter - но как я понял он лучше подходит для чисел, но так как у меня не число а строка, то отъсеять
// не получится (только если строку не прировнять к number)
// 5. includes
// 6. sort, на числах немого иначе пример ниже
// 7. reduce

// const bodyPosition = body.map(value => value.position);
//  console.log(bodyPosition);

//  const indexBodyForPosition = bodyPosition.indexOf('Грузчик в холодном цехе');
//  console.log(indexBodyForPosition);

// const bodyIndex = body.find(item => item.name === 'ЗАО Инмарко');
// console.log(bodyIndex);
//
// const bodyIndex2 = body.findIndex(item => item.name === 'ООО Мастер ПАК');
// console.log(bodyIndex2);

// const bodyIndex3 = body.filter(item => item.date === '2003 - 2004');
// console.log(bodyIndex3);

// const bodyIndex = body.map(item => item.name);
// const body2Index = bodyIndex.includes('ЗАО Инмарко');
// console.log(body2Index);

// const Index = body.map(item => item.position);
// const Index2 = Index.sort()
// console.log(Index2.sort());

// const arrOne = [8, 22, 1,];
// console.log(arrOne.sort());
// function Numeric(a, b) {
//     return a-b
// }
// console.log(arrOne.sort(Numeric));

// const works = body.filter(value => value.date === '2005 - 2005');
//
// const works = body.filter(function (works) {
//     return works.date === '2005 - 2005'
// }).map(function (works){
//     return works.name
// });
// console.log(works.name);


// const buble = body.reduce(function (accum, body){
//     accum = accum + ' ' + body.date
//     return accum;
// }, '');
// console.log(buble)

// создать фунцию которая на входе будет принимать массив функцию колбэка и инитиалвалл. фуннкция должна вернуть
// значение которое я буду преобразовывать в функции колбека. изначально до выполнения цикла переменная в которую я буду складывать результат
// будет равна инишвалл.

//     customReduce = (array, callback, initialValue) => {
//     let init = initialValue;
//     for (let index in array) {
//         const newVal = callback(init, array[index], index);
//         init = newVal
//     }
//     return init;
// };
//
// const Reducer = this.customReduce(body, (acc, value, index) => {
//     // debugger;
//     acc = acc + ' ' + value.name;
//     return acc
// }, '');
// console.log(Reducer);

//     customFind = (array, callback) => {
//     for (let index in array) {
//         // debugger;
//         const item = array[index];
//         const findStatus = callback(item);
//         if (findStatus) {
//             return item;
//         }
//     }
// };
//
// customFind = (array, callback) => {
//     for (let item of array) {
//         if (callback(item)) {
//             return item
//         }
//     }
// };
//
// const FindBH = this.customFind(body, (item) =>{
//
//     if (item.name === 'ЗАО Экоил') {
//         return true;
//     }
//     return false;
// });
// console.log(FindBH);



// customFilter = (array, callback) => {
//     let newArray = [];
//     for (let index in array) {
//         const value = array[index];
//         debugger;
//         const status = callback(value, index);
//         if(status) {
//             newArray.push(value)
//         }
//     }
//     return newArray;
// };
// const FilterHead = this.customFilter(head, (value, index) =>{
//     if (value === 'Место работы') {
//         return true;
//     }
//     return false;
// });

// customFindIndex = (array, callback) => {
//
//     for (let index in array) {
//         const item = array[index];
//         const findStatus = callback(item);
//         if (findStatus) {
//             // console.log('я что то нашел')
//
//             return index;
//         }
//
//         // console.log('я ищу не могу найти')
//     }
//
//     return -1
//     // console.log('я ничего не нашел')
//
//     // debugger;
// };

// const FindInd = this.customFindIndex(body, (item) => {
//     if (item.name === 'ЗАО hkgihg') {
//         return true
//     }
//     return false
// });
// console.log(FindInd);
// customFindIndex = (array, callback) => {
//     for (let index in array) {
//         // debugger;
//         const item = array[index];
//         const findStatus = callback(item);
//         if (findStatus) {
//             debugger;
//             return index;
//         }
//         debugger;
//     }
// };


// TODO: Реализовать функцию удаления элемента из массива, функция должна принимать массив и колбэк в аргументах
// При возвращении значения  true колбэка необходимо удалить элемент из массива
// функция должна возвращать новый массив не изменяя массив который получаем в аргументах

// customDelete = (array, callback) => {
//     let newArray = [];
//     for (let value of array) {
//         const deleteStatus = callback(value);
//         if (deleteStatus === false) {
//             newArray.push(value);
//         }
//     };
//     return newArray;
// }

// const deleteVal = this.customDelete(body, (value, index) =>{
//     // debugger;
//     if (value.name === 'ЗАО Инмарко') {
//         return true;
//     }
//     return false;
// })
// console.log(deleteVal)

// const arr = [1,3,444,5,1,1,1,6,6,1,4,2,10,2,3,5,3,1,9,1,7,1,1,1];
// const uniqVal = [...arr];
// const arr2 = []
// for (let index in arr) {
//     // debugger;
//     const res = arr[index];
//     const newIndex = uniqVal.indexOf(res);
//     if (newIndex !==  -1) {
//         uniqVal.splice(newIndex, 1);
//         const statusFinding = uniqVal.includes(res);
//         if (statusFinding) {
//             const pushing = !arr2.includes(res);
//             if(pushing){
//                 arr2.push(res);
//             }
//         }
//     }
// };
// console.log([...tttt])

// const arrrr = [];
// const testttt = new Map()
// for (let value of arr) {
//     if(testttt.has(value)) {
//         testttt.set(value, testttt.get(value) + 1)
//     } else {
//         testttt.set(value, 1)
//     }
//
// };
// testttt.forEach((item, index) => {
//     if(item >= 2){
//         arrrr.push(Number(index))
//     }
// })
// console.log(arrrr)

// в результате должны быть только четные числа
// const resArr = [];
// for (let index in arr) {
//     const value = arr[index];
//     const cloneArr = [...arr]
//     cloneArr.splice(Number(index), 1);
//     if(cloneArr.includes(value)){
//         resArr.push(value)
//     }
// }
//
// const obj = {};
// let sum = 0;
// for (let item of arr) {
//     if(item in obj) {
//         obj[item] = obj[item] + 1
//     }else {
//         obj[item] = 1
//     }
// }
// for (let objectKey in obj) {
//     const objectValue = obj[objectKey]
//     if(objectValue >= 2) {
//         sum = sum + objectKey * objectValue;
//     }
// }
// console.log(resArr)
// console.log(obj)
// console.log(sum)

// let x = [];
//
// for (let item of arr) {
//     //  if (item % 2 === 0)
//     if (item % 2 === 0){
//         x.push(item)
//     }
// }
// let x = 0;
// for (let item of arr) {
//     if (item > x) {
//         x = item
//     }
// }

// console.log(x)

// const x = [];
// for (let item of arr) {
//     if (item % 2 === 0 + 1) {
//         x.push(item)
//     }
// }
// console.log(x)

// const uniqVal = [...arr];
// const arr2 = []
// for (let index in arr) {
//     debugger;
//     const res = arr[index];
//     const newIndex = arr.indexOf(res);
//     if (newIndex % 2 == 0) {
//         arr2.push(newIndex)
//     }
// };
// console.log([...arr2])

// const nArr = [];
// for (let index in arr) {
//     const searchValue = arr[index];
//     // debugger;
//     if (index % 2 === 0){
//         nArr.push(searchValue)
//     }
// }
// console.log(nArr);
// const arr = [12, 345, 12, 33, 455, 1, 45, 345, 222, 1, 45, 222, 11];
//
// const newArr = arr.map((value, index) => ({
//     lesha: index,
//     shu: value
// }));
//
// const newArr2 = arr.map((value, index) =>({
//     lesha: index,
//     shu: value
// }));
//
//
// for (let index in arr) {
//     newArr.push({
//         lesha: index,
//         shu: arr[index]
//     })
//
//
// }
//
// console.log(newArr2)