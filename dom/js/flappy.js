/** Função responsável por criar elementos html com seus respectivos atributos */
function novoElemento(tagName, className){
    const elem = document.createElement(tagName) // criando elemento
    elem.className = className // setando atributo para o elemento
 
    return elem
 }
 
 
 /* função responsável por representar uma barreira normal ou reversa(função construtora) */
 function Barreira(reversa = false){
    this.elemento = novoElemento("div", "barreira")
 
    const borda = novoElemento("div", "borda")
    const corpo = novoElemento("div", "corpo")
 
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)
 
    /* função responsável por setar a altura do corpo da barreira */
    this.setAltura = altura => corpo.style.height = `${altura}px`
 }
 
 /*
 const b = new Barreira()
 b.setAltura(200)
 document.querySelector('[wm-flappy]').appendChild(b.elemento)
 */
 
 /**
  *  função responsável por representar um par de barreiras.
  *  @param altura altura do jogo
  *  @param abertura abertura entre as barreiras
  *  @param x posição em que o par de barreiras estará no eixo x.
   */
 function ParDeBarreiras(altura, abertura , x){
     this.elemento = novoElemento("div", "par-de-barreiras") // criando tag que abarcará a barreira superior e inferior
 
     this.superior = new Barreira(true) // criando barreira reversa
     this.inferior = new Barreira(false) // criando barreira normal
 
     this.elemento.appendChild(this.superior.elemento) 
     this.elemento.appendChild(this.inferior.elemento)
 
     /** Função responsável por sortear a altura das barreiras superiores e inferiores e seta-las */
     this.sortearAbertura = () => {
         const alturaSuperior = Math.random() * (altura - abertura)
         const alturaInferior = altura - abertura - alturaSuperior
         //this.superior.setAltura(alturaSuperior)
         //this.inferior.setAltura(alturaInferior)
     }
 
     /* Função responsável por pegar o valor da coordenada do par-de-barreiras na horizontal */
     this.getX = () => parseInt(this.elemento.style.left.split("px")[0])
 
     /* Função responsável por setar o valor da coordenada do par-de-barreiras na horizontal */
     this.setX = x => this.elemento.style.left = `${x}px`
 
     /*
      A propriedade element.clientWidth equivale a largura interna de um elemento com o display
      diferente do inline.
     */
     this.getLargura = () => this.elemento.clientWidth
 
     this.sortearAbertura()
     this.setX(x)
 
 }
 
 /*
 const b = new ParDeBarreiras(700, 200, 600)
 document.querySelector('[wm-flappy]').appendChild(b.elemento)
 */
 
 
 /**
  *  Função responsável por representar vários pares de barreiras
  * 
  * @param altura altura do jogo
  * @param largura largura do jogo 
  * @param abertura abertura entre as barreiras superior e inferior
  * @param espaco espaço entre um par de barreiras e outro
  * @param notificarPonto // função que será executada quando um par de barreiras cruzar pelo meio do jogo
  */
 function Barreiras(altura, largura, abertura, espaco, notificarPonto){
     this.pares = [
           new ParDeBarreiras(altura, abertura, largura),
           new ParDeBarreiras(altura, abertura, largura + espaco),
           new ParDeBarreiras(altura, abertura, largura + espaco * 2),
           new ParDeBarreiras(altura, abertura, largura + espaco * 3)
     ]
 
 
     // determinará o intervalo em que as barreiras serão deslocadas(em pixels) na animação
     const deslocamento = 3 
 
     /** método responsável por animar as barreiras e não entendi como funciona */
     this.animar = () => {
         this.pares.forEach((parDeBarreiras) => {
               parDeBarreiras.setX(parDeBarreiras.getX() - deslocamento)
 
               // quando o elemento sair da área do jogo
               if(parDeBarreiras.getX() < -parDeBarreiras.getLargura()) {
                  parDeBarreiras.setX(parDeBarreiras.getX() + espaco * this.pares.length)
                  parDeBarreiras.sortearAbertura()
               }
 
               const meio = largura / 2
               const cruzouOMeio = parDeBarreiras.getX() + deslocamento >= meio
                      && parDeBarreiras.getX() <  meio
               if(cruzouOMeio) notificarPonto()
         })
     }
 }
 
 /** Função responsável pelo passaro */
 function Passaro(alturaJogo) {
     let voando = false
 
     this.elemento = novoElemento("img", "passaro")
     this.elemento.src = "imgs/passaro.png"
 
     this.getY = _ => parseInt(this.elemento.style.bottom.split("px")[0])
     this.setY = y => this.elemento.style.bottom = `${y}px`
 
     /* o evento keydown é disparado quando uma tecla é pressionada */
     window.onkeydown = e => voando = true
 
     /* o evento keyup é disparado quando uma tecla é solta */
     window.onkeyup = e => voando = false
 
     /* função responsável por animar o passáro */
     this.animar = () => {
         const novoY = this.getY() + (voando ? 8 : -5)
         const alturaMaxima = alturaJogo - this.elemento.clientHeight
 
         if(novoY <= 0){
            this.setY(0)
         } else if(novoY >= alturaMaxima) {
              this.setY(alturaMaxima)
         } else {
             this.setY(novoY)
         }
     }
 
     this.setY(alturaJogo / 2.0)
 
 }
 
 /*
 areaDoJogo.appendChild(passaro.elemento)
 */
 
 function Progresso(){
     this.elemento = novoElemento("span", "progresso")
 
     this.atualizarPontos = pontos => {
         this.elemento.innerHTML = pontos
     }
 
     this.atualizarPontos(0)
 }
 
 /*
 const areaDoJogo = document.querySelector('[wm-flappy]')
 const barreiras = new Barreiras(700, 1200, 200, 400)
 const passaro = new Passaro(700)
 areaDoJogo.appendChild(passaro.elemento)
 areaDoJogo.appendChild(new Progresso().elemento)
 barreiras.pares.forEach((par) => areaDoJogo.appendChild(par.elemento))
 setInterval(() => {
     barreiras.animar()
     passaro.animar()
  }, 20)
  */
 
  function estaoSobrepostos(elementoA, elementoB){
       const a = elementoA.getBoundingClientRect()
       const b = elementoB.getBoundingClientRect()
 
       const horizontal = a.left + a.width >= b.left 
       && b.left + b.width >= a.left
 
       const vertical = a.top  + a.height >= b.top 
       && b.top + b.height >= a.top
 
       return horizontal && vertical
  }
 
  function colidiu(passaro, barreiras){
      let colidiu = false;
 
      barreiras.pares.forEach((parDeBarreiras) => {
         if(!colidiu) {
             const superior = parDeBarreiras.superior.elemento
             const inferior = parDeBarreiras.inferior.elemento
             colidiu = estaoSobrepostos(passaro.elemento, superior)
                       || estaoSobrepostos(passaro.elemento, inferior)
         }
      })
 
      return colidiu
  }
 
  function FlappyBird(){
      let pontos = 0
 
      const areaDoJogo = document.querySelector("[wm-flappy]")
      const altura = areaDoJogo.clientHeight
      const largura = areaDoJogo.clientWidth
 
      const progresso = new Progresso()
      const barreiras = new Barreiras(altura, largura, 200, 400, 
         () => progresso.atualizarPontos(++pontos))
 
         const passaro = new Passaro(altura)
 
         areaDoJogo.appendChild(progresso.elemento)
         areaDoJogo.appendChild(passaro.elemento)
 
         barreiras.pares.forEach((parDeBarreira) => areaDoJogo.appendChild(parDeBarreira.elemento))
 
         this.start = () => {
             // loop do jogo
             const temporizador = setInterval(() => {
                 barreiras.animar()
                 passaro.animar()
 
                 if(colidiu(passaro, barreiras)){
                     clearInterval(temporizador)
                 }
 
             }, 20)
         }
  }
 
  new FlappyBird().start()
