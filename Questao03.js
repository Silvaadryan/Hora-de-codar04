// Array de frutas
let listaDeCompras = ["Maçã", "Banana", "Morango", "Uva", "Abacaxi"];

// Função para exibir a lista de compras
function exibirListaDeCompras() {
    document.write("\nLista de Compras:");
    if (listaDeCompras.length === 0) {
        document.write("Lista de compras finalizada.");
    } else {
        listaDeCompras.forEach((fruta, index) => {
            console.log(`#${index + 1} ${fruta}`);
        });
    }
}

// Função para remover uma fruta da lista
function removerFruta(frutaRemover) {
    const index = listaDeCompras.indexOf(frutaRemover);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        document.write(`${frutaRemover} foi retirada da lista.`);
    } else {
        document.write(`${frutaRemover} indisponível no nosso mercado.`);
    }
}

// Loop para permitir ao usuário remover frutas até que a lista esteja vazia
while (listaDeCompras.length > 0) {
    exibirListaDeCompras();

    // Solicita ao usuário para digitar o nome de uma fruta a ser removida
    const frutaUsuario = prompt("Digite o nome de uma fruta para remover (ou digite PARE para finalizar):");

    // Verifica se o usuário deseja encerrar
    if (frutaUsuario.toUpperCase() === "PARE") {
        break;
    }

    // Remove a fruta da lista ou exibe uma mensagem se não estiver na lista
    removerFruta(frutaUsuario);
}

// Exibe a mensagem de lista finalizada
exibirListaDeCompras();
