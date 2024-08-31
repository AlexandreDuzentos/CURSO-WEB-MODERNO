// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*
 O parâmetro req é uma objeto que contém informações
 sobre a requisição que foi enviada.

 O parâmetro res é um objeto que contém funções
 que permitem devolver uma resposta para o browser.
 */
export default function handler(req, res) {
  res.status(200).json({
     name: "Teste API",
     metodo: req.method,
     nome: req.query.nome,
     sobrenome: req.query.sobrenome
     
  });
}
