import React from "react";
import style from './Hobby.module.css'

class Hobby extends React.Component {
    render() {
        return (
            <div className={style.container}>
                <h2>Мои хобби</h2>
                <ol className="list">
                    <li><a href="https://kttc.ru/wot/ru/user/demilisher/" target="_blank">WorldOfTanks</a></li>
                    <li>UnrealEngine 5</li>
                    <li>Гулять</li>
                    <li>Спорт: Настольный тенис</li>
                </ol>
            </div>
        );
    }
}

export default Hobby;