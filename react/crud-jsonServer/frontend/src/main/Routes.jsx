import { Routes, Route } from "react-router-dom";


import Home from "../components/home/home"
import UserCrud from "../components/user/userCrud"


/*
 O arquivo de routes faz um mapeamento ou equivalência entre URLs e componentes,
 em outras palavras, dependendo da URL que eu acessar, um componente será chamado 
 e renderizado.
 */
export default props => (
    <Routes>
        {/** A palavra reservada exact serve para informar que a navegação será apenas
         *   efetivada se a rota for /(barra), se eu não tivesse utilizado o exact,para toda
         *   rota que começasse com /(barra) o componente Home seria carregado, então o 
         *   exact serve para deixar a minha rota mais precisa.
         */}
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/users" element={<UserCrud />}></Route>

        {/*
           O path *(asterisco) atenderá qualquer rota que não esteja mapeada
           e carregará o componente home por padrão.
         */
        }
        <Route path="*" element={<Home />}></Route>
    </Routes>
)

