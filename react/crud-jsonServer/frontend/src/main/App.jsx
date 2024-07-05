import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

/** Componentes */
import Logo from "../components/template/Logo"
import Nav from  "../components/template/Nav"
import Footer from "../components/template/Footer"
import Routes from "./Routes"

/*
O componente BrowserRouter provê uma estratégia de roteamento para
navegadores web, fornencendo as URLs mais limpas possíveis, uma 
outra estratégia de roteamento é o HashRouter.
 */
import { BrowserRouter } from "react-router-dom"

export default props => 
<BrowserRouter>
    <div className="app">
       <Logo />
       <Nav />
       <Routes/>
       <Footer />
    </div>
</BrowserRouter>