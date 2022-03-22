import React from "react";
import style from './res.module.css'
class Res extends React.Component {
    render() {
        return (
            <div className={style.container}>
                <img src="/public/IAm.jpg" alt="Hello"/>
            </div>
        );
    }
}


export default Res;


