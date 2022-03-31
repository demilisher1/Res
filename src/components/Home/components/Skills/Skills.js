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
        const head = this.state.head;
        const body = this.state.body;

        return (
            <div className={style.works}>
                <div className={style.my}>Опыт работы</div>
                <div className={style.items}>
                    {head.map((value, key) => (
                        <div key={key}>{value}</div>
                    ))}
                </div>
                <div>
                    {body.map(function (value,key){
                        const { name, date, position } = value;

                        return (
                            <div key={key} className={style.list}>
                                <div className={style.name}>{name}</div>
                                <div className={style.position}>{position}</div>
                                <div className={style.date}>{date}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Skills;