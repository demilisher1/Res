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
        const fold = head.map(function (currentValue, index) {
            return (
                <div key={index}>{currentValue}</div>
            )
        })

        const list = body.map(function (currentValue,index){
            const name = currentValue.name;
            const date = currentValue.date;
            const position = currentValue.position
            return (
                <div key={index} className={style.list}>
                    <div className={style.name}>{name}</div>
                    <div className={style.position}>{position}</div>
                    <div className={style.date}>{date}</div>
                </div>
            )
        })

        return (
            <div className={style.works}>
                <div className={style.my}>Опыт работы</div>
                <div className={style.items}>
                    {fold}
                </div>
                <div>
                    {list}
                </div>
            </div>
        );
    }
}

export default Skills;