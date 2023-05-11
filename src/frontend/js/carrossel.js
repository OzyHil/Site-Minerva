// alert("Olá")

/*OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

1- pegar o elemento HTML dos botões/imagens
2- identificar o click do usuario no botão
3- desmarcar o botão não selecionado(selecionado anteriormente)
4- marcar o botão clicado, como se estivesse selecionado
5- esconder a imagem de fundo anterior
6- fazer aparecer a imagem de fundo correspondente ao botão clicado*/


// 1- pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
console.log("esse arq ta indo")

// 2- identificar o click do usuario no botão
botoesCarrossel.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        console.log("bbbbbbbbbb");

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemDeFundo();

        mostrarImagemDeFundo(index);
    })
})

function mostrarImagemDeFundo(index) {
    imagens[index].classList.add("visivel");
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add("selecionado");
}

function esconderImagemDeFundo() {
    const imagemVisivel = document.querySelector(".visivel");
    imagemVisivel.classList.remove("visivel");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
    console.log("aaaaaaa")
}

