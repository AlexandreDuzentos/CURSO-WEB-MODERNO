(function($){
    $.fn.temporizador = function(opcoes){
        /** A função extend do Jquery permite usar valores padrão em caso do
         * usuário não passar nada no parâmetro da função.
         */
        const opcoesFinais = $.extend({
            mensagem: "Em breve",
            horario: "23:59:59"
        }, opcoes)

        const horaDezena = $("<span class='digito'>").html("0")
        const horaUnidade = $("<span class='digito'>").html("0")
        const minutoDezena = $("<span class=digito>").html("0")
        const minutoUnidade = $("<span class=digito>").html("0")
        const segundoDezena = $("<span class=digito>").html("0")
        const segundoUnidade = $("<span class=digito>").html("0")

        const separadorHora = $("<span class='separador'>").html(":")
        const separadorMinuto = $("<span class='separador'>").html(":")

        const mensagem = $("<div class='mensagem'>").html(opcoesFinais.mensagem)

        $(this).addClass("temporizador")

        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade,
               separadorMinuto, segundoDezena, segundoUnidade, mensagem)

        /*
         regex para extrair um padrão de data de um texto, o 
         uso do grupo de captura (\d\d) permite-me ter acesso a hora, ao minuto e
         ao segundo separadamente. 
        */
         const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)

        /** Executando a regex em cima do horário recebido como parâmetro */
        const horarioAlvo = regex.exec(opcoesFinais.horario)

        /** 
         * O setInverval garantirá que o código dentro dele será executado independente
         * de a página voltar a ser recarregada, para que quando a data mudar no meu
         * sistema(windows), ela também mude na minha página, sem que eu tenha de voltar
         * recarrega-la, a data vai ser  atualizada na minha página a cada segundo, para
         * que consiga-se ver os segundos a serem atualizados.
         * 
         * O setInterval é para que eu não tenha de ficar recarregando a página para ter
         * acesso a diferença entre as horas mais atual, pois, quando a página é recarregada,
         * como ela tem uma referência para esse arquivo js, ele executa esse código, que é
         * responsável executar a lógica responsável por gerar o temporizador.
         * */
        let temporizador = setInterval(() => {
            const horaInicial = new Date()
            const horaAlvo = new Date()

            horaAlvo.setHours(horarioAlvo[1])
            horaAlvo.setMinutes(horarioAlvo[2])
            horaAlvo.setSeconds(horarioAlvo[3])

            const diferencaEmMili = horaAlvo.getTime() - horaInicial.getTime()

            /**
             * Se a condição for verdadeira, isso significa que a horaInicial ainda é
             * menor ou igual a horaAlvo.
             */

            let diferenca
            if(diferencaEmMili >= 0){

                /**
                 * obtendo a data e hora com fuso horário no padrão ISO 8601, com a data sendo a da
                 * meia noite do dia 1 de janeiro de 1970 e a hora a correspondente a diferença de milissegundos
                 * entre Horarioatual e horárioAlvo.
                 * 
                 * new Date(qtdEmMilissegundos) - criando uma data a partir de uma quantidade
                 * em milissegundos, essa quantidade em milissegundos é somada ao timestamp.
                 * 
                 * O que é o timestamp?
                 * R: é a quantidade de milissegundos desde a meia-noite do dia primeiro(1)
                 * de janeiro de 1970.
                 * 
                 * A data não é criada a partir de uma data que se inicia em 0000:00:00, mas
                 * sim a partir de uma data que se inicial em 1970/01/02.
                 * 
                 * padrão(formato) iso 8601(1970-01-01T10:00:00.000Z)
                 * 
                 * O método toISOString retorna uma data como uma string no formato ISO.
                 */
                diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])

                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])

                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            } else {
        
                /** Calculando a diferença caso a horaFinal seja menor que a Inicial, ou seja, caso
                 * já tenha mudado o dia.
                 * 
                 * A regra para calcular é a seguinte:
                 * 
                 * 1 - calcular a diferença de horas no primeiro dia
                 * 2 - somar a essa diferença a horaAlvo
                 * 
                 * se horaFinal < horaInicial entao
                 *    diferenca = (horaInicial - horaAlvo) + horaAlvo
                 * fimse
                 */
                diferenca = regex.exec(new Date((1000 * 60 * 60 * 24) - horaInicial.getTime() + horaAlvo.getTime()).toISOString())
                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])

                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])

                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
               // clearInterval(temporizador)
            }
        }, 1000)

        return this
    }
})(jQuery)