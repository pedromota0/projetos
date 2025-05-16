let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber); // Apenas para testes, remova em produção

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guess').value);
  const message = document.getElementById('message');

  if (isNaN(userGuess)) {
    message.textContent = 'Por favor, insira um número válido.';
    message.style.backgroundColor = 'red';
  } else if (userGuess < randomNumber) {
    message.textContent = 'Tente um número maior.';
    message.style.backgroundColor = 'red';
  } else if (userGuess > randomNumber) {
    message.textContent = 'Tente um número menor.';
    message.style.backgroundColor = 'red';
  } else {
    message.textContent = 'Parabéns! Você acertou!';
    message.style.backgroundColor = 'green';
    // Gerar um novo número aleatório para a próxima rodada
    randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber); // Apenas para testes, remova em produção
  }
}
