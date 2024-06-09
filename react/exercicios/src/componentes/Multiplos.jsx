/**
 * Embora não seja o padrão criar mais de um componente dentro um arquivo,
 * você tem essa possiblidade e isso tem muito a que ver com a forma que 
 * você tem de exportar esses componentes.
 */

import BomDia from "./BomDia"


/** 
 * Essa sintaxe abaixo não é permitida pelo react porque a palavra reservada default implica
 * que apenas a referência da função será exportada, e que não necessariamente a exportação
 * precisa ser feita a partir do identificador da função, mas pode ser feita.
 */
//export default const boa = props => <h1>Boa tarde {props.nome}!</h1>


/** Exportando múltiplos componentes, ambos componentes sendo exportados vão
 * parar para dentro dos objetos module.exports, exports e this, que apontam para
 * o mesmo lugar, exportando dessa forma(com o export), o acesso será feito apenas por meio do
 * operador destructuring.
 */

//export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

//export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

/** 
 * Exportando dessa maneira(usando o default), no arquivo consumidor desse componente já não preciso
 * desestruturar o componente para acessá-lo, o acesso é direto.
 */
//export default BoaTarde

/** Outras sintaxes opcionais para exportar  */

//const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

//const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

 //export default {BoaTarde, BoaNoite}  // acesso apenas a partir da notação ponto.

 //export {BoaTarde, BoaNoite} // acesso apenas a partir do operador de desestruturação.

 /** Conbinando os dois tipos tipos de export */

 const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

 const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

 
 export default BoaTarde /** Acesso direto funciona apenas se chaves não forem utilizados para exportar */
 export {BoaTarde} /* Acesso apenas a partir do operador de desestruturação */

