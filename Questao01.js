// Cria um array para armazenar os estudantes
const estudantes = [];

// Função para cadastrar um estudante
function cadastrarEstudante(nome, idade, curso) {
    const estudante = {
        nome: nome,
        idade: idade,
        curso: curso
    };
    estudantes.push(estudante);
}

// Função para exibir a lista de estudantes
function exibirListaEstudantes() {
    document.write("\nLista de Estudantes:");
    estudantes.forEach((estudante, index) => {
        document.write(`#${index + 1} Nome: ${estudante.nome}, Idade: ${estudante.idade}, Curso: ${estudante.curso}`);
    });
}

// Loop para cadastrar estudantes até que o usuário digite "PARE"
while (true) {
    // Solicita informações do estudante ao usuário
    const nome = prompt("Digite o nome do estudante (ou PARE para encerrar):");
    
    // Verifica se o usuário quer encerrar o cadastro
    if (nome.toUpperCase() === "PARE") {
        // Exibe a quantidade de estudantes cadastrados e a lista
        document.write(`\nTotal de estudantes cadastrados: ${estudantes.length}`);
        exibirListaEstudantes();
        break;  // Encerra o loop
    }

    const idade = prompt("Digite a idade do estudante:");
    const curso = prompt("Digite o curso do estudante:");

    // Cadastra o estudante
    cadastrarEstudante(nome, idade, curso);
}

