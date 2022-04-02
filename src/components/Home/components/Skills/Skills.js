import React from "react";
import style from './Skills.module.css'

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
        // const array = [10, 20, 130, 70, 80, 12];
        // const filtered = array.filter(function ( Value ) {
        //         return Value > 50;
        //     }
        // );
        // console.log(filtered)
        //
        body.filter(function (value,index) {
            return value.date
        })
        console.log(body);

        // const arr = ['Ваня', 'Иштван', 'Оля'];
        // const result = arr.map(function (item, index,array) {
        //     return item[0]
        // });
        // console.log(arr);
        // console.log(result);

        return (
            <div className={style.works}>
                <div className={style.my}>Опыт работы</div>
                <div className={style.items}>
                    {head.map((value, key) => (
                        <div key={key}>{value}</div>
                    ))}
                </div>
                <div>
                    {body.map( ({name, position, date},key) => (
                        <div key={key} className={style.list}>
                            <div className={style.name}>{name}</div>
                            <div className={style.position}>{position}</div>
                            <div className={style.date}>{date}</div>
                        </div>
                    ))}
                </div>
                {/*{head.forEach(person => console.log(person))}*/}
                {/*{body.filter(date => console.log(date))}*/}
            </div>
        );
    }
}

export default Skills;