const tela = document.querySelector(".tudo");
const formulario = document.querySelector(".bloco-form");
const flogin = document.querySelector(".formulario-login");
const fcad = document.querySelector(".formulario-cadastro");
var styles = window.getComputedStyle(formulario);
const SignIn = document.querySelector(".botaoSI");

var clicks = 0;

function mostrarTela() { 
    clicks++;
    console.log("tela " + clicks);     
    if(clicks == 3){
        formulario.style.visibility = "hidden";
        tela.style.webkitFilter = "blur(0px)";
        console.log("tela " + clicks);
        clicks = 0;       
    }
}

function mostrarForm () {
        formulario.style.visibility = "visible";
        tela.style.webkitFilter = "blur(5px)";
        clicks++;
        console.log("botao "+clicks);
};
