import React from "react";
import style from './About.module.css'

class About extends React.Component {
    render() {
        return (
            <div className={style.container}>
                <h2>Обо мне</h2>
                <div>
                    <a target="_blank" href="AboutMe.html">Моя история</a>
                </div>
            </div>
        );
    }
}


export default About;