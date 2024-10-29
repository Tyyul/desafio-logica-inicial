// Coletar entrada do usuário usando prompt
let nomeHeroi = prompt("Informe o nome do Herói:");
let nivelHeroi = parseInt(prompt("Informe o XP do Herói:")); // Converte a entrada para um número

if (nivelHeroi > 0 && nivelHeroi <= 1000) {
    console.log("O Herói: " + nomeHeroi + ", Nível: Ferro");
} else if (nivelHeroi >= 1001 && nivelHeroi <= 2000) {
    console.log("O Herói: " + nomeHeroi + ", Nível: Bronze");
} else if (nivelHeroi >= 2001 && nivelHeroi <= 5000) {
    console.log("O Herói: " + nomeHeroi + ", Nível: Prata");
} else if (nivelHeroi >= 5001 && nivelHeroi <= 7000) {
    console.log("O Herói: " + nomeHeroi + ", Nível: Ouro");
} else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
    console.log("O Herói: " + nomeHeroi + ", Nível: Platina");
} else if (nivelHeroi >= 8001 && nivelHeroi <= 9000) {
    console.log("O Herói: " + nomeHeroi + ", Nível: Ascendente");
} else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
    console.log("O Herói: " + nomeHeroi + ", Nível: Imortal");
} else if (nivelHeroi > 10000) {
    console.log("O Herói: " + nomeHeroi + ", Nível: Radiante");
} else {
    console.log("XP inválido.");
}


