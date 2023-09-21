const randomNumber = Math.floor(Math.random() * 100) + 1; //gera um numero de 1 a 100

//variaveis
const caixa = document.getElementById("caixa"); 
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

let attempts = 0;
const maxAttempts = 5; // numero maximo de tentativas

botao.addEventListener("click", checkGuess); //botao de clique

function checkGuess() {
const userGuess = parseInt(caixa.value);
if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    mensagem.textContent = "insira um número entre 1 a 100"; 
    return; // se a caixa de texto estiver vazia aparece uma mensagem para voce inserir o numero
}

attempts++;

if (userGuess === randomNumber) {
    mensagem.textContent = `Parabéns! Você acertou a quantidade ${randomNumber} em ${attempts} tentativas`;
    document.getElementById('imagem1').src = 'caixaaberta.png';
    caixa.disabled = true;
    botao.disabled = true;//mensagem caso voce acete o numero
}  else if (attempts === maxAttempts) {
    mensagem.textContent = `Que pena! O limite de tentativas já foi atingido, o número correto era ${randomNumber}`;
    caixa.disabled = true;
    botao.disabled = true;//mensagem caso voce nao consiga atingir
}  else {
    const highOrLow = userGuess < randomNumber ? "maior" : "menor";
    mensagem.textContent = `Você já utilizou ${attempts} tentativas. Seu palpite deve ser ${highOrLow}, tente denovo`;
    //mensagem para as tentativas
}

caixa.value = "";
caixa.focus(); 
}


