/** importando um módulo usando o sistema de módulo do ECMASCRIPT 2015 */
import Pessoa from "./pessoa"

/** 
 * Por padrão o sistema de módulo importará o arquivo index.js de dentro da pasta assets, e ele por sua vez importará os outros
 * arquivos referênciados dentro dele.
 */
import "./assets"

// importando um arquivo js que se deseja que o webpack enchergue ou seja, que caia no radar dele.
import "./modulos/moduloA" 






const atendente = new Pessoa

console.log(atendente.cumprimentar())