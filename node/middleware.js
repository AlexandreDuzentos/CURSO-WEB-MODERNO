/*
 middleware pattern(chain of responsability).

 O express js é um frameworks fortemente baseado no padrão chain of responsability.

 O padrão chain of resposability tem a ideia de separar um processo em pequenos passos,mantendo
 desacoplacada a lógica para chamar o próximo passo de um passo em específico, quem conhece o próximo
 passo é um função independente.

 Vamos supor que no primeiro passo você pegue a lista de produtos do banco de dados e coloque
 no objeto, desse modo, o contexto(ctx) já estará preenchido com a lista de produtos, e no próximo
 passo você pode filtrar a lista de produtos vencidos, e no próximo passo você pode gerar e enviar
 um relatório para alguém para fazer um tratamento dos produtos vencidos da empresa.
*/

/**
 * O parâmetro ctx  será um objeto, que será passado de um passo para o outro.
 * O parâmetro next será uma função responsável por conhecer o próximo passo.
 */
const passo1 = (ctx, next) => {
    ctx.valor1 = "md1"
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = "md2"
    next()
}

const passo3 = ctx => ctx.valor3 = "md3"

// Chamada das funções usando a estrutura repetitiva for.
const exec = (ctx, ...middlewares) => {
    for(let i = 0; i < middlewares.length; i++){
        let proxima  = () => middlewares[i + 1]
        middlewares[i](ctx, proxima)
    }
}

// Chamada das funções usando recursividade
/*
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }

    execPasso(0)
}
*/

const ctx = {}
exec(ctx, passo1, passo2, passo3)

//exec(ctx, passo1, passo2, passo3)

console.log(ctx)
