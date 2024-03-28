/** 
 * Esse é o arquivo de configuração de webpack, por ter a extensão js, ele será interpretado
 * pelo node, desse modo, pode ser usada  dentro dele uma sintaxe compreendida pelo node, o 
 * sistema de módulos que o node entende.
 * 
 * O arquivo de configuração do webpack fica no diretório raíz do projeto.
 */

/** process.env retorna um objeto contendo o ambiente do usuário */
const modoDev = process.env.NODE_ENV != "production"

const fileLoader = require("file-loader") // loader para atender arquivos de imagem

const webpack = require("webpack") // importando o webpack

/*
 importando plugin que extrai o CSS de seus arquivos JavaScript 
 e o coloca em arquivos CSS separados.
*/
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

/** Plugin para minificar arquivos js */
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

/** Plugin para minificar e otimizar arquivos css */
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")

/** Aqui exportarei o objeto que representa toda a configuração do meu script webpack */
module.exports = {
    mode: modoDev ? "development" : "production",  // específicando em qual modo estará o projeto, produção ou desenvolvimento, de acordo com uma condição ternária

    /* específicando o arquivo que será o ponto de entrada para o webpack iniciar sua execução */
    entry: "./src/principal.js",

    /** configurando a saída para o build do webpack */
    output: {
       filename: "principal.js", // especificando o arquivo de saída(por padrão é o main.js)
       path: __dirname + "/public", // específicando a pasta de saída(por padrão é dist)
    },

    /** Configuração para o plugin web-dev-server */
    devServer: {
       contentBase: "./public",
       port: 9000
    },

    /** Essa seção optimization é executada apenas se o webpack estiver em modo de desenvolvimento(development) */
   optimization: {
        minimizer: [
           new UglifyJSPlugin({
               cache: true,
               parallel: true
           }),

           new OptimizeCssAssetsWebpackPlugin({})
        ]
   },

    plugins: [
       new MiniCssExtractPlugin({
           filename: "estilo.css", // nome do arquivo css que será gerado a partir da interpretação dos arquivos css, dentro da pasta de saída do build
       })
    ],

    /** 
     * cadastrando loaders para o webpack
     * 
     * dentro do array de rules, temos vários objetos, e cada objeto representa loaders 
     * para cada extensão de arquivo, podemos ter mais de um loader por tipo de arquivo.
     * 
     * os loaders nada mais são do que plugins do próprio webpack, eles são dependencias
     * que devem ser baixadas no site do npm.
     *  */

    module: {
       rules: [
        {
           test: /\.s?[ac]ss$/, // critério para o webpack saber que arquivos serão lidos por esse loader(que nada mais é do que uma expressão regular), arquivos css, scss e sass serão lidos por esse loader
           use : [
              // Aqui dentro pode-se ter vários loaders para atender os arquivos css, esses loaders nada mais são do plugins do webpack 
               MiniCssExtractPlugin.loader, // plugin que extrai o css para dentro de arquivos separados. Ele cria  um arquivo css por arquivo js que contém  CSS.
              //'style-loader', // plugin que adiciona CSS a DOM injetando a tag <style>, o style-loader lê todos os arquivos css e guarda seu conteúdo dentro do arquivo de saída do webpack para posteriormente injetá-lo na página HTML via DOM, usando a tag <style>, o plugin style-loader é conflitante o MiniCssExtract plugin
              'css-loader', // loader que interpreta  @import , url(), o css-loader também lê os arquivos de css
              'sass-loader' // loader que lê arquivos sass/scss e compila-o para css
             
           ]
        },
        {
           test: /\.(png|jpe?g|gif)$/i,
           use : [
              /*
              loader para atender arquivos de imagem, os arquivos de imagem já entram no radar do
              webpack através do import do arquivo de css, pois o arquivos de css fazem referência
              aos arquivo de imagem, e o arquivo de imagem será movido para a pasta de saída do gulp
              do webpack.
              */
              "file-loader" 
           ]
        }
    ]
    }
    

}

