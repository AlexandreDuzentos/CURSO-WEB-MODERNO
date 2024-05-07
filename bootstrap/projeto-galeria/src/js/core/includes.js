/*
O import está sendo feito usando o sistema de módulos do nodeJS porque
o jquery foi baixado como uma dependência do projeto, e portanto está dentro
da pasta node_modules, e para acessar alguma dependência de dentro da pasta node_modules,
precisamos usar o sistema de módulos para importar tal dependência.
 */
import $ from "jquery";

/*
  Array que armazenará uma lista de funções callback que serão chamadas quando
  uma requisição for feita de forma bem sucedida, ou seja quando uma página html tiver
  sido carregada com sucesso numa requsição ajax.
 */
const loadHtmlSuccessCallback = []

/*
 Função que será chamada quando uma página HTML tiver sido carregada
 com sucesso numa requisição ajax, ela é responsável por adicionar callbacks
 de sucesso ao array funções callback chamadas com sucesso numa requisição ajax.
 */
export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSuccessCallback.includes(callback)){
        loadHtmlSuccessCallback.push(callback)
    }
}

/*
const $ = require("jquery") é o mesmo, porém acima está sendo usado o sistema de módulos
do ECMASCRIPT 2015 e aqui o COMMONS JS.
*/

/*
Função responsável por ler todos os elementos marcados com o atributo wm-include, o 
parâmetro parent corresponde ao elemento pai do elemento marcado com o atributo wm-include.
 */
function loadIncludes(parent){
    if(!parent) parent = 'body'

    /*
     A função find busca por elementos filhos dentro do elemento selecionado, nesse
     caso estou selecionados todos os filhos de elemento body que estejam marcados com
     o atributo personalizado wm-include
     */
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')

        /*
         Fazendo uma requisição AJAX para o servidor para obter os parciais para compor
         a página completa.
          */
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include') // exluindo a propriedade para que não haja outra interpretação dela

                /** Percorrendo a lista de callbacks de sucesso e chamando cada uma
                 * das callbacks dentro dela passando os dados obtidos da requisição via 
                 * ajax que foi feita com sucesso.
                 */
                loadHtmlSuccessCallback.forEach(callback => callback(data))

                /** A função está chamando ela mesma, isso é recursividade, isso está sendo
                 * feita para que se dentro do elemento que acabou de ser inserido no elemento
                 * atual(e) tiver algum elemento filho marcado com o atributo wm-include, o parcial
                 * daquele elemento já seja carregado dentro dele, isso continuará enquanto o elemento
                 * que foi inserido dentro elemento marcado com o atributo wm-include tiver outro
                 * elemento marcado com o atributo wm-include.
                 */
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()