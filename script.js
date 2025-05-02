// Constantes
const digueDiv = document.querySelector(".digueDiv");
const oruamDiv = document.querySelector(".oruamDiv");

const cardigueDiv = document.querySelector(".cardigueDiv");

const btnLiqui = document.querySelector(".btnLiqui");

const audio1 = document.querySelector(".audio1");
const audio2 = document.querySelector(".audio2");

const body = document.querySelector("body");


var num1 = 0;
var num2 = 0;

digueDiv.style.opacity = num1;
oruamDiv.style.opacity = num2;

//Função de quando clicar no botão calabresa
function clicarCalabresa() {

  if (num1 < 1) {//Só vai ser executado se a opacidade da imagem for menor que 1


    const img = document.createElement('img');//Cria uma imagem toda vez que clica no botão
    img.setAttribute('src', 'calabresa.webp');//a imagem recebe o atributo 'src' como calabresa.webp

    const x = Math.random() * (body.clientWidth - 50); //largura do body
    const y = Math.random() * (body.clientHeight - 50); //altura do body


    //tamanho da imagem
    img.style.width = "50px";
    img.style.height = "50px";

    img.style.position = "absolute";

    img.style.zIndex =-1;//Para as imagens não ficarem sobre os elementos


    //posição da imagem
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;


    body.appendChild(img);//o body vai receber a imagem
    
    //aumenta a opacidade da imagem do Davi Brito a cada clique:
    num1 += 0.1;
    digueDiv.style.opacity = num1;

    verificar();//chama a funcão verificar toda vez que clica
  }

}

//Função de quando clicar no botão oruam
function clicarOruam() {
  if (num2 < 1) { //Só vai ser executado se a opacidade da imagem for menor que 1
    
    const imgAn = document.createElement('img');//Cria uma imagem toda vez que clica no botão
    imgAn.setAttribute('src', 'AN.png');//a imagem recebe o atributo 'src' como An.png
    
    //tamanho da imagem
    imgAn.style.width = "50px";
    imgAn.style.height = "50px";
    
    const x2 = Math.random() * (body.clientWidth - 50); //largura do body
    
    const y2 = Math.random() * (body.clientHeight - 50); //altura do body
    
    imgAn.style.position = "absolute";
    imgAn.style.zIndex = -1; //Para as imagens não ficarem sobre os elementos

    //posição da imagem
    imgAn.style.top = `${y2}px`;
    imgAn.style.left = `${x2}px`;
    
    body.appendChild(imgAn);//o body vai receber a imagem

    //aumenta a opacidade da imagem do Oruam a cada clique:
    num2 += 0.1;
    oruamDiv.style.opacity = num2;
  }
  verificar();//chama a funcão verificar toda vez que clica
}

//Função que verifica se as imagens já estão 100% a mostra
function verificar() {
  if (num1 >= 1 && num2 >= 1) {
    //Se as duas imagens estiverem com a opacidade = 1, vai aparecer o botão de liquidificador com efeito de fade:
    btnLiqui.classList.add('fade');
  }
}

//Função de quando clicar no botão Liquidificador
function clicarLiqui() {
  cardigueDiv.classList.add('fade');
}