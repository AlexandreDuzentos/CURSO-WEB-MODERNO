import $ from "jquery"

import { onLoadHtmlSuccess } from "../core/includes"

const duration = 600

/** Função responsável por filtrar imagens da cidade passada como argumento para a função,
 * se nenhuma cidade for passada todas a imagens serão retornadas.
 */
function filterByCity(city){
   $('[wm-city]').each(function(i, e){

    const isTarget = $(this).attr("wm-city") === city || city === null

    if(isTarget){
        /** Além de exibir a imagem também é necessário exibir
         * o elemento que a envolve, de modo a que a grid se reorganize, pois
         * é o elemento pai que corresponde a uma coluna da grid.
         */
        $(this).parent().removeClass("d-none")
        $(this).fadeIn(duration)
    } else {
        /** Além de esconder a imagem também é necessário esconder
         * o elemento que a envolve, de modo a que a grid se reorganize, pois
         * é o elemento pai que corresponde a uma coluna da grid.
         */
        $(this).fadeOut(duration, () => {
            $(this).parent().addClass("d-none")
        })
    }
     
    /*
    if($(e).attr("wm-attr") === city){
         $(e).fadeIn(duration)
    } else {
        $(e).fadeOut()
    }
    */

   })
}


$.fn.cityButtons = function(){
    const cities = new Set
    
    $("[wm-city]").each(function(i, e){
        cities.add($(e).attr('wm-city'))
    })
    
    const btns = Array.from(cities).map((city) => {
         const btn = $("<button>").addClass(["btn", "btn-info"]).html(city)
    
         btn.on("click", event => filterByCity(city))
    
         return btn
    })
    
    const btnAll = $("<button>").addClass(["btn", "btn-info", "active"]).html("Todas")
    btnAll.on("click", event => filterByCity(null))
    
    btns.push(btnAll)
    
    const btnGroup = $("<div>").addClass(["btn-group"])
    btnGroup.append(btns)
    
    $(this).html(btnGroup)

    return this
    
}


/*
O plugin será apenas executado quando a requisição ajax tiver sido realizado com
sucesso, pois a função passada como argumento para função onLoadHtmlSuccess é adicionada
no array loadHtmlSuccessCallback, e quando uma requisição feita via ajax para obter uma
página html ocorrer com sucesso, esse array é percorrido é percorrido e cada função dentro 
dele é executada e dentro de cada função que é executada tem o código que roda o plugin,
oque garante que agora sempre que uma requisição ajax for feita para obter uma página,
o js associado a página que foi obtida via ajax será executado também, pois o sucesso da
requisição ajax está sendo interceptado e com isso o código js associado a página obtida
na requisição é executado. 
 */
onLoadHtmlSuccess(function(data) {
    $("[wm-city-buttons]").cityButtons()
})


