import React from "react";
import style from './About.module.css'

class About extends React.Component {
    render() {
        return (
            <div className={style.about}>
                <div className={style.me}>Обо мне</div>
                <div className={style.story}>
                    <a target="_blank" href="AboutMe.html">Моя история</a>
                </div>
            </div>
        );
    }
}


export default About;