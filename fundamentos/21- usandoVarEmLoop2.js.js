let funcs = []

for(var i = 0; i < 5; i++){
    funcs.push(function(){
        console.log(i)
    })
}

/*
 O comportamento do valor impresso em cada posição do array não ser mantido ocorre por que o var não possui escopo
 de bloco, logo, apenas o último valor ficará impresso em cada posição do array
*/
funcs[0]()
funcs[1]()
funcs[3]()