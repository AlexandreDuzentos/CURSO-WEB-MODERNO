// Importanto arquivos SASS
import  "./scss/index.scss";


/*
Importando Dependências - isso é para que o jquery e o bootstrap estejam no arquivo de
saída do webpack(app.js).

Quando fazemos um import direto como abaixo, o webpack entende que os arquivos sendo importados
serão de JS.
*/
import "jquery" 
import "bootstrap"

// Importando meus arquivos JS
import "./js/core/includes"
import "./js/plugins/cityButtons"
