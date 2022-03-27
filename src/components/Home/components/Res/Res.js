import React from "react";

import avatar from '../../../../../static/images/IAm.jpg'

import style from './res.module.css'

class Res extends React.Component {
    render() {
        return (
            // <div className={style.container}>
            <div className={style.info}>
                <img src={avatar.src} alt='My Photo' className={style.avatar}/>
                <div className={style.text}>
                    <div className={style.title}>Алексей Шуляков</div>
                    <div className={style.iam}>Я основатель сервисного центра <strong>IC-Parts</strong></div>
                    <div className={style.iam}>Я люблю микроэлектронику, пешие прогулки, изучать что-либо новое</div>
                    <div className={style.social}>Мои социальные сети</div>
                    <div className={style.new}>
                        <a href="https://vk.com/demilisher" target="_blank">Мой VK</a>
                    </div>
                </div>
            </div>
            // </div>
        );
    }
}


export default Res;



