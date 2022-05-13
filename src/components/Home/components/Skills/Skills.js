import React from "react";
import style from './Skills.module.css'
import {element, string} from "prop-types";
import {makePublicRouterInstance} from "next/router";
import index from "../../../../../pages";
import {cancelIdleCallback} from "next/dist/client/request-idle-callback";

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




    //  Reduce = (array, callback, initialValue) => {
    //      const init = initialValue;
    //      for (let value in array) {
    //
    //      }
    // };

  // TODO::   создать фунцию которая на входе будет принимать массив функцию колбэка и инитиалвалл. фуннкция должна вернуть
  //   результат которой я буду преобразовывать в функции колбека. изначально до выполнения цикла переменная в которую я буду складывать результат
  //   будет равна инишвалл.







    customFilter = (array, callback) => {
        let newArray = [];
        for (let index in array) {
            const value = array[index];
            debugger;
            const status = callback(value, index);
            if(status) {
                newArray.push(value)
            }
        }
        return newArray;
    };


    render() {
        const {head, body} = this.state;



        const FilterHead = this.customFilter(head, (value, index) =>{
            if (value === 'Место работы') {
                return true;
            }
            return false;
        });

        // const red = body.reduce((acc, value) => {
        //     acc = acc + ' ' + value.name;
        //     return acc
        // }, '')
        // console.log(red);

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
