import Vue from 'vue'
import App from "./App.vue"

/*
A função render que está dentro da instância Vue é invocada no
momento em que a aplicação Vue é montada no DOM. No código do
projeto, isso acontece quando o método .mount('#app') é chamado.
Esse método instrui o Vue a renderizar a aplicação no elemento DOM
identificado pelo seletor #app.

Em primeiro lugar é chamado o método $mount e só depois o render, 
o segundo método depende do primeiro.

O arquivo main.js é o entry point da minha aplicação, ou seja, é o primeiro 
arquivo o webpack lerá antes de qualquer outro e após ele ler todos os arquivos,
ele gerará o build da aplicação.
*/
new Vue({
    /*
     A função render é responsável por renderizar o meu componente raíz, que
     o App no elemento identificado pelo id app.
    */
    render(createElement){
       return createElement(App)
    }
}).$mount("#app")

