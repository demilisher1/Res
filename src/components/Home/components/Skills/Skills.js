import React from "react";
import style from './Skills.module.css'
import index from "../../../../../pages";
// import {element, string} from "prop-types";
// import {makePublicRouterInstance} from "next/router";
// import index from "../../../../../pages";
// import {cancelIdleCallback} from "next/dist/client/request-idle-callback";

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

        const array = [12, 345, 12, 33, 455, 1, 45, 345, 222, 1, 45, 222, 11];
        //Отобразить сумму тех элементов которые повтораяются 2 и более раз
        const summ = {
        };

        // const uniqVal = [...array];
        // const arr2 = []
        // for (let index in array) {
        //     // debugger;
        //     const res = array[index];
        //     const newIndex = uniqVal.indexOf(res);
        //     if (newIndex !==  -1) {
        //         uniqVal.splice(newIndex, 1);
        //         const statusFinding = uniqVal.includes(res);
        //         if (statusFinding) {
        //             // const pushing = !arr2.includes(res);
        //             // if(pushing){
        //                 arr2.push(res);
        //         }
        //     }
        // };
        // console.log([...arr2])

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
