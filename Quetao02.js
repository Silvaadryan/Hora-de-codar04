// Array de planetas
const planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];

// Solicita ao usuário para digitar o nome de um planeta
const planetaUsuario = prompt("Digite o nome de um planeta:");

// Verifica se o planeta informado está na array
if (planetas.includes(planetaUsuario)) {
    document.write(`Sim, ${planetaUsuario} está na lista de planetas.`);
} else {
    document.write(`Não, ${planetaUsuario} não está na lista de planetas.`);
}
