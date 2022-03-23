import React from "react";
import Res from "./components/Res/Res.js";
import About from "./components/About/About.js";

import style from "./Home.module.css";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Res />
                <About />
            </div>
        );
    }
}

export default Home;
