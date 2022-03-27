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
        ],
    };

    render() {
        const {head, body} = this.state;

        return (
            <div className={style.works}>
                <div className={style.my}>Опыт работы</div>
                <div className={style.head}>
                    {head.map((value, index) => (
                        <div key={index}>{value}</div>
                    ))}
                </div>

                <div>
                    {body.map(({name, position, date}, index) => (
                        <div className={style.bodyItem} key={index}>
                            <div>{name}</div>
                            <div>{position}</div>
                            <div>{date}</div>
                        </div>
                    ))}
                </div>

                <div className={style.list}>
                    <div className={style.name}>
                        <div>ООО ММС</div>
                        <div>ООО Мастер ПАК</div>
                        <div>ЗАО Инмарко</div>
                        <div>ЗАО Манрос-М</div>
                        <div>ЗАО Экоил</div>
                        <div>ООО НИКС</div>
                        <div>Одноименное ИП</div>
                    </div>
                    <div className={style.position}>
                        <div>Мастер по изготовлению кухонных гарнитуров</div>
                        <div>Оператор экструзионного оборудования</div>
                        <div>Грузчик в холодном цехе</div>
                        <div>Грузчик в теплом складе</div>
                        <div>Оператор реакторного блока каталитического дигидрирования</div>
                        <div>Инженер ==> далле Начальник СЦ</div>
                        <div>Директор ==> Инженер микроэлектронщик	2011 - now
                        </div>
                    </div>
                    <div className={style.date}>
                        <div>2003 - 2004</div>
                        <div>2004 - 2005</div>
                        <div>2005 - 2005</div>
                        <div>2005 - 2006</div>
                        <div>2007 - 2007</div>
                        <div>2007 - 2009</div>
                        <div>2011 - now</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;