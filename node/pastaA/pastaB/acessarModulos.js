/**
 *  A função require é usada para importar um módulo
 *  O linux é case-sensitive, já o Mac OS e o windows são case-insetives
 * 
 *  É possível importar os módulos da minha aplicação(criados por mim), os módulos de terceiros, que quando
 *  baixados ficam dentro da pasta node_modules e os módulos core(nativos do node), que já vêm previamente 
 *  instalados.
 */

// Módulo da minha aplicação(criados por min)
const moduloA = require("../../2- ModuloA")
const C = require("./pastaC")

// Módulo de terceiros(que ficam disponíveis na pasta node_modules)
const saudacao = require("lodash");

// Módulos core(nativos do node)
const http = require("http")
const path = require("path")
const net = require ("net")
const fs = require("fs")

console.log(moduloA.nome)
console.log(saudacao.ola)
console.log(C.ola2)

/*
http.createServer((req, res) => {
   res.write("Bom dia!")
   res.end()
}).listen(8080)
*/

/*
console.log(http)
console.log(path)
console.log(net)
*/
