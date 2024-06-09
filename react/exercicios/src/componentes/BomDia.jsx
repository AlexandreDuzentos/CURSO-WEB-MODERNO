import React, {Fragment} from "react"

/**
 * O parâmetro props representa um objeto contendo todos os atributos que forem setados
 * dentro do componente no arquivo onde ele está sendo utilizado, o uso do nome props é
 * uma convenção.
 * 
 * A priori eu não posso retornar duas tags dentro de um único componente, preciso envolver
 * tags adjacentes dentro de um componente pai, que inclusive pode ser componente do React que não
 * é renderizado na página, como o <React.Fragment><React.Fragment>, ou um componente que é 
 * renderizado, como uma <div></div> por exemplo.
 * 
 * Outra forma de retornar mais de um componente JS coloca-los dentro de um array.
 */


/** Forma 1 - usando componente renderizado no HTML para envolver componentes adjacentes */

/*
export default props =>
    <div>
        <h1>Bom dia {props.idade}!</h1>
        <h2>Até breve!</h2>
    </div>
*/


/** Forma 2 - usando componente não renderizado no HTML para envolver componentes adjacentes */
/*
export default props =>
    <Fragment>
        <h1>Bom dia {props.idade}!</h1>
        <h2>Até breve!</h2>
    </Fragment>
*/

/**
 *  Forma 3 - usando um array para envolver os componentes adjacentes
 *  
 *  Cada filho dentro de um array precisa ter uma propriedade chamada key, com
 *  um valor único para identifica-lo, isso serve para que o react possa encontrar
 *  os elementos de uma forma muito mais otimizada dentro da DOM.
 *  */
export default props =>
    [
        <h1 key="c1">Bom dia {props.idade}!</h1>,
        <h2 key="c2">Até breve!</h2>
    ]
     
  