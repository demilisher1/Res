import React from "react";
import style from './res.module.css'
import avatar from '../../public/IAm.jpg'

class Res extends React.Component {
    render() {
        return (
            <div className={style.container}>
                <img src={avatar.src} alt='My Photo' className={style.avatar}/>
                {/*<div className={style.new}>*/}
                <div className={style.new}>
                    <h1>Алексей Шуляков</h1>
                    <div>Я основатель сервисного центра <strong>IC-Parts</strong></div>
                    <div>Я люблю микроэлектронику, пешие прогулки, изучать что-либо новое</div>
                    <div>Мои социальные сети</div>
                    <a href="https://vk.com/demilisher" target="_blank">Мой VK</a>
                </div>
                {/*</div>*/}
            </div>
        );
    }
}


export default Res;



