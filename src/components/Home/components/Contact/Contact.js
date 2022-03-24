import React from "react";
import style from './Contact.module.css'

class Contact extends React.Component {
    render() {
        return (
            <div className={style.container}>
                <h2>Связаться со мной</h2>
                <div>
                    <div>
                        <label htmlFor="name">Ваше имя</label>
                        <input type="text" id="name" placeholder="Введите ваше имя..."/>
                    </div>
                    <div>
                        <label htmlFor="email">Ваш email</label>
                        <input type="text" id="email" placeholder="Введите ваш email..."/>
                    </div>
                    <div>
                        <label htmlFor="text">Введите ваш текст</label>
                        <textarea id="text" cols="15" rows="2"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Связаться!"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;