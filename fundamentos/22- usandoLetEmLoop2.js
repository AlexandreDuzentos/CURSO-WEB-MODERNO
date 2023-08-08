let funcs = []

for(let i  = 0; i < 5; i++){
    funcs.push(function(){
        console.log(i)
    })
}


/*
 Nesse cenário, o valor do i, correspondente a cada iteração é mantido, pois o let tem escopo de 
 bloco, logo, ele respeita  o valor de cada iteração

 Prefira o uso do let e const, evite o var, por que há alguns estranhezas relacionadas a ele
*/

funcs[0]()
funcs[2]()