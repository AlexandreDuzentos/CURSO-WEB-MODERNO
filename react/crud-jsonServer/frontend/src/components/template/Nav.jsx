import React  from "react"
import "./Nav.css"

/* Componentes */
import NavItem from "./NavItem"

export default props =>
 <aside className="menu-area">
    <nav className="menu">
      <NavItem link="/" icon="home" text="home"/>
      <NavItem link="/users" icon="users" text="usuarios"/>
    </nav>
 </aside>