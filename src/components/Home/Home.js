import React from "react";
import Res from "./components/Res/Res.js";
import About from "./components/About/About.js";
import Hobby from "./components/Hobby/Hobby";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import style from "./Home.module.css";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Res />
                <About />
                <Hobby />
                <Skills />
                <Contact />
            </div>
        );
    }
}

export default Home;
