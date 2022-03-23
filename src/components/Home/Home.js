import React from "react";
import Res from "../Res.js";
import About from "./../components/About.js";
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