(function () {
    function navegarViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        if(!link) return

        const destino = document.querySelector('[wm-link-destino]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
                /**
                 * Usando regex para capturar todo código de dentro da tag script vindo
                 * por meio de uma requisição ajax e executá-lo, pois quando o código 
                 * dentro da tag script é carregado diretamente na página que fez a requisção
                 * ajax, ou seja, na página de destino, o código dentro da tag script não é
                 * executado.
                 * 
                 * a função match será a responsável por capturar o código de dentro da tag
                 * script e a função eval por executá-lo.
                 */
                const resultado = html.match(/\<script\>([\s\S]*)\<\/script\>/)

                /**
                 * Teste para garantir que de fato a tag script sendo carregada via ajax
                 * tenha código js dentro dela.
                 */
                if(resultado && resultado.length >= 2) {
                    eval(resultado[1])
                }
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[wm-link]')
            /*
             A propriedade HTMLAnchorElement.hash retorna uma string contendo  um '#'
             seguido do fragmento indentificador da URL.
            */
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash)
    
    configurarLinks()
    navegacaoInicial()
})()