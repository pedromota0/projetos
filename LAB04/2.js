// Gerar o número aleatório entre 0 e 99
let randomNumber = Math.floor(Math.random() * 100);

// Função para verificar o palpite
function checkGuess() {
    let userGuess = document.getElementById("userGuess").value;
    let feedback = document.getElementById("feedback");

    // Verificar se o usuário acertou o número
    if (userGuess == randomNumber) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.style.color = "green";
        document.body.style.backgroundColor = "green"; // Mudar a cor do fundo para verde
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Errou! O número é maior.";
        feedback.style.color = "red";
        document.body.style.backgroundColor = "red"; // Mudar a cor do fundo para vermelho
    } else {
        feedback.textContent = "Errou! O número é menor.";
        feedback.style.color = "red";
        document.body.style.backgroundColor = "red"; // Mudar a cor do fundo para vermelho
    }
}
