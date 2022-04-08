import React from "react";
import style from './Skills.module.css'
import {element, string} from "prop-types";

class Skills extends React.Component {

    state = {
        head: [
            'Место работы',
            'Должность',
            'Дата',
        ],
        body: [
            {
                name: 'ООО ММС',
                position: 'Мастер по изготовлению кухонных гарнитуров',
                date: '2003 - 2004',
            },
            {
                name: 'ООО Мастер ПАК',
                position: 'Оператор экструзионного оборудования',
                date: '2004 - 2005',
            },
            {
                name: 'ЗАО Инмарко',
                position: 'Грузчик в холодном цехе',
                date: '2005 - 2005',
            },
            {
                name: 'ЗАО Манрос-М',
                position: 'Грузчик в теплом складе',
                date: '2005 - 2006',
            },
            {
                name: 'ЗАО Экоил',
                position: 'Оператор реакторного блока каталитического дигидрирования',
                date: '2007 - 2007',
            },{
                name: 'ООО НИКС',
                position: 'Инженер ==> далле Начальник СЦ',
                date: '2007 - 2009',
            },{
                name: 'Одноименное ИП',
                position: 'Директор ==> Инженер микроэлектронщик',
                date: '2011 - now',
            },
        ],
    };
    render() {
        const {head, body} = this.state;

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
        // 7.

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
        const arrOne = [10, 24, 3];
        console.log(arrOne.sort());







        return (
            <div className={style.works}>
                <div className={style.my}>Опыт работы</div>
                <div className={style.items}>
                    {head.map((value, key) => (
                        <div key={key}>{value}</div>
                    ))}
                </div>
                <div>
                    {body.map(({name, position, date},key) => (
                        <div key={key} className={style.list}>
                            <div className={style.name}>{name}</div>
                            <div className={style.position}>{position}</div>
                            <div className={style.date}>{date}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Skills;
