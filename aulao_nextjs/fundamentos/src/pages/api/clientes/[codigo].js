

export default function handler(req, res) {
   /* Acessando valor dinâmico na url */
    const codigo = req.query.codigo
    
     res.status(200).json({
        id: codigo,
        name: `Alexandre${codigo}`,
        email: `Aduzentos${codigo}@gmail.com`
     })
}