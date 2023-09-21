/**
 * JSON: Em computação, JSON, um acrônimo de JavaScript Object Notation, é um formato compacto,
 * de padrão aberto independente, de troca de dados simples e rápida entre sistemas.
 */

const obj = {a: 1, b:2, c:3, soma(){ return a + b + c}}

// A função stringify do objeto JSON converte um objeto em Json
const json = JSON.stringify(obj)

// A função parse do objeto JSON converte um json em objeto
const newObj = JSON.parse(json)


/*
 Um formato json válido deve ter todas as suas chaves delimitadas por aspas duplas, e se o valor for uma sequência de caracteres
 também deve seguir a mesma regra.
*/

console.log(JSON.parse(`{"firstName":"Alexandre", "lastName": "Alexandre", "idade":20, "feliz":true, "altura":1.87,
 "morada": {"cidade":"luanda", "municipio": "Talatona", "distrito":"futungo", "bairro":"kawelele"}}`))

