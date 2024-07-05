import React from "react"
import "./Logo.css";
import logo from "../../assets/images/cod3r.png"

export default props =>
 <aside className="logo">
    <a className="logo" href="/">
        <img src={logo} alt="logo"/>
    </a>
 </aside>