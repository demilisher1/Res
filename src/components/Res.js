import React from "react";
import style from './res.module.css'
import avatar from '../../public/IAm.jpg'
class Res extends React.Component {
    render() {
        return (
            <div className={style.container}>
                {/*<img src={avatar.src} alt='My Photo' className="avatar"/>*/}
                <div className={style.textinfo}>
                    Hello
                </div>
            </div>
        );
    }
}


export default Res;


