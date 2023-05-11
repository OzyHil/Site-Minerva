const tela = document.querySelector(".tudo");
const formulario = document.querySelector(".bloco-form");
const formC = document.querySelector(".formC");
const formL = document.querySelector(".formL");

function mostrarFormL() {
    formulario.style.visibility = "visible";
    tela.style.webkitFilter = "blur(5px)";
    formL.style.visibility = "visible";
    formC.style.visibility = "hidden";
};

function mostrarFormCad() {
    formulario.style.visibility = "visible";
    tela.style.webkitFilter = "blur(5px)";
    formL.style.visibility = "hidden";
    formC.style.visibility = "visible";
};

function mostrarFormC() {
    formL.style.visibility = "hidden";
    formC.style.visibility = "visible";
};

formulario.addEventListener('click', function(e){
    if (this.className == e.target.className) {
        formulario.style.visibility = "hidden"; 
        tela.style.webkitFilter = "blur(0px)";
        formC.style.visibility = "hidden";
        formL.style.visibility = "hidden";
    }
    // console.log(this.className); 
    // console.log(e.target.className);
    // console.log(e.currentTarget.className);
  })