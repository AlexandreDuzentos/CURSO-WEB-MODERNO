<template>
    <div class="home">
        <v-form>
            <v-file-input
             label="Selecione as legendas"
             prepend-icon="mdi-message-text"
             append-icon="mdi-send"
             outlined
             multiple
             v-model="files"
             @click:append="processSubtitles()"
             >

            </v-file-input>
        </v-form>
        <div class="pills">
        <PillComponent v-for="item in groupedWords" :word="item.word"
        :amount="item.amount" :key="item.word" />
    </div> 
</div>
    
</template>

<script>
 import PillComponent from './PillComponent.vue';
 import { ipcRenderer } from "electron";

  export default {
    components: { PillComponent },
     data: () => {
        return {
            files: [],
            groupedWords: [
                           {word: "i", amount: 547},
                           {word: "you", amount: 478},
                           {word: "it", amount: 10}
                          ]
        }
     },
     methods: {
        processSubtitles(){
            const paths = this.files.map(file => file.path)
            /*
             O IpcRenderer é usado na minha aplicação vue frontend e permite a
             comunicação com o backend por meio do canal definido no backend
             que foi o blablabla, aqui estou enviando uma mensagem com o conteúdo
             "alo" para o backend.
             */
            ipcRenderer.send("process-subtitles", paths)

            /* Recebendo resposta do backend */
            ipcRenderer.on("process-subtitles", (event, resp) => {
               this.groupedWords = resp
            })
        }
     }
  }
</script>

<style>
   .pills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
   }

   .home {
     margin: 20px;
   }
</style>