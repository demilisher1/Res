import React from "react";
import Link from 'next/link'

import style from './About.module.css'

class About extends React.Component {
    render() {
        return (
            <div className={style.about}>
                <div className={style.me}>Обо мне</div>
                <div className={style.story}>
                    <Link href="/about">Моя история</Link>
                </div>
            </div>
        );
    }
}

export default About;
