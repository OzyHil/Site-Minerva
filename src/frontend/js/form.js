const tela = document.querySelector(".tudo");
const formulario = document.querySelector(".bloco-form");
var clicks = 0;

// Era pra fazer sair do formulario e voltar a tela principal, mas o bloco-form ocupa toda a tela e nao deixa clicar no que ta em baixo
function mostrarTela() {
    clicks++;
    console.log("tela, clicks: " + clicks);
    if (clicks == 3) {
        formulario.style.visibility = "hidden";
        tela.style.webkitFilter = "blur(0px)";
        console.log("tela " + clicks);
        clicks = 0;
    }
}

function mostrarForm() {
    formulario.style.visibility = "visible";
    tela.style.webkitFilter = "blur(5px)";
    clicks++;
    console.log("botao,cliks:" + clicks);
};

const formC = document.querySelector(".formC");
const formL = document.querySelector(".formL");
function mostrarFormC() {
    formL.style.visibility = "hidden";
    formC.style.visibility = "visible";
};