const digueDiv = document.querySelector(".digueDiv");
const oruamDiv = document.querySelector(".oruamDiv");

const cardigueDiv = document.querySelector(".cardigueDiv");

const btnLiqui = document.querySelector(".btnLiqui");

const body = document.querySelector("body");

var num1 = 0;
var num2 = 0;

digueDiv.style.opacity = num1;
oruamDiv.style.opacity = num2;

function clicarCalabresa() {

  if (num1 < 1) {


    const img = document.createElement('img');
    const x = Math.random() * (body.clientWidth - 50); //largura do body

    const y = Math.random() * (body.clientHeight - 50); //altura do body

    img.setAttribute('src', 'calabresa.webp');

    //tamanho da imagem
    img.style.width = "50px";
    img.style.height = "50px";

    img.style.position = "absolute";

    img.style.zIndex =-1;//Para as imagens não ficarem sobre os elementos


    //posição da imagem
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;


    body.appendChild(img);
    num1 += 0.1;
    digueDiv.style.opacity = num1;

    verificar();
  }

}

function clicarOruam() {
  if (num2 < 1) {
    num2 += 0.1;
    oruamDiv.style.opacity = num2;

    const imgAn = document.createElement('img');
    imgAn.setAttribute('src', 'AN.png');

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

    body.appendChild(imgAn);
  }
  verificar();
}


function verificar() {
  if (num1 >= 1 && num2 >= 1) {
    btnLiqui.classList.add('fade');
  }
}
function clicarLiqui() {

  cardigueDiv.classList.add('fade');

}