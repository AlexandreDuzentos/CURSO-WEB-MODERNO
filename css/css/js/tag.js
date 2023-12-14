document.querySelectorAll(".tag").forEach((tag) => {

    /** Objeto usado para formatar as tags com cores diferentes */
    const colors = {
        p: "#388e3c",
        div: "#1565c0",
        span: "#e53935",
        section: "#f67809",
        ul: "#5e35b1",
        ol: "#fbc02d",
        header: "#d81b60",
        nav: "#64dd17",
        main: "#00acc1",
        footer: "#304ffe",
        form: "#9f6581",
        body: "#25b6da",
        padrao: "#616161",

        /* 
         lógica para retornar uma cor correspondente ao nome de uma tag ou uma cor padrão
         caso a tag não exista.
        */
        get(){
           return this[tagName] ? this[tagName] : this.padrao
        }
    }

     /**
    *  Pegando o nome qualificado de cada tag que possua a class tag
    *  e convertendo-o para para caixa baixa.
    *  */
     const tagName = tag.tagName.toLowerCase()


   // Mudando a cor da borda dos elementos que possuem a class tag
   tag.style.borderColor = colors.get()
   
   /** Testando se na lista de classes de cada tag a classe nolabel está presente */
   if(!tag.classList.contains('nolabel')){

      /** Criando um elemento html*/
      const label = document.createElement("label")

      // Estilizando o elemento html criado
      label.style.backgroundColor = colors.get();

      // Adicionando dentro da  tag label o nome da tag
      label.innerHTML = tagName;

      // Inserindo a tag label antes de qualquer outra tag dentro do elemento tag
      tag.insertBefore(label, tag.childNodes[0])
   }

})