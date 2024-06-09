import React from "react"
import "./Button.css"

/*
   Dentro desse componente utilizaremos templates string para setar as classes
   de forma condicional dependendo dos atributos passados para a chamada do componente e 
   além dessa forma também podemos utilizar uma variável para atingir o mesmo fim.
*/
export default props => {

    let classes = "button "
    classes += props.operation ? "operation" : ""
    classes += props.double ? "double" : ""
    classes += props.triple ? "triple" : ""

    /*
    Está sendo feita uma verificação antes de chamar a função click, pois há a possibilidade
    de a propriedade click não estar setada o que fará a o meu programa lançar uma exceção, a
    verificação é justamente para evitar a execeção.

    Podemos ter uma chamada a método num teste lógico.
     */
    return (
        <button className={classes} onClick={e => props.click && props.click(props.label)}> {props.label}</button>
    )
  
    /*
    
   return (
      <button className={`
       button
       ${props.operation ? "operation" : ""}
       ${props.double ? "double" : ""}
       ${props.triple ? "triple" : ""}
     `}>
      {props.label}</button>
   )
    */
}
