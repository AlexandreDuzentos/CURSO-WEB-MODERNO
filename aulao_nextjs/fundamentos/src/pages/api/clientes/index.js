export default function handler(req, res){

    if(req.method === "GET"){
        handleGet(req, res)
    } else {
        res.status(405).json({
            error: "Não permitido"
        })
    }


    

}

function handleGet(req, res){
   res.status(200).json({
        id: 1,
        name: "Alexandre",
        birthDate: "16/05/2003"
   })
}