let numeroGerado = null;
let tentativasRestantes = 5;

function gerar() {
    numeroGerado = Math.floor(Math.random() * 101);
    tentativasRestantes = 5;


    document.getElementById("tentativas").textContent = "Tentativas restantes: 5";
    document.getElementById("dica").textContent = "";
    document.getElementById("mensagem").textContent = "";
    document.getElementById("btn-reiniciar").style.display = "none";
    document.getElementById("valor").value = "";
    document.getElementById("valor").disabled = false;

    console.log("Número gerado:", numeroGerado);
}

function chutar() {

    // verifica se o número foi gerado
    if (numeroGerado === null) {
        alert("Clique em 'Gerar número' primeiro!");
        return;
    }

    const chute = parseInt(document.getElementById("valor").value);

    if (isNaN(chute) || chute < 0 || chute > 100) {
        alert("Digite um número válido entre 0 e 100!");
        return;
    }

    if (chute === numeroGerado) {
        document.getElementById("mensagem").textContent = `🎉 Parabéns! Você acertou! O número era ${numeroGerado}!`;
        document.getElementById("dica").textContent = "";
        document.getElementById("btn-reiniciar").style.display = "block";
        document.getElementById("valor").disabled = true;
        return;
    }

    tentativasRestantes--;
    document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativasRestantes}`;

    if (tentativasRestantes === 0) {
        document.getElementById("mensagem").textContent = `Game over! O número era ${numeroGerado}.`;
        document.getElementById("dica").textContent = "";
        document.getElementById("btn-reiniciar").style.display = "block";
        document.getElementById("valor").disabled = true;
        return;
    }

    if (chute < numeroGerado) {
        document.getElementById("dica").textContent = `Tente um número MAIOR que ${chute}!`;
    } else {
        document.getElementById("dica").textContent = `Tente um número MENOR que ${chute}!`;
    }

    document.getElementById("valor").value = "";
}

function reiniciar() {
    numeroGerado = null;
    tentativasRestantes = 5;
    document.getElementById("tentativas").textContent = "Tentativas restantes: 5";
    document.getElementById("dica").textContent = "";
    document.getElementById("mensagem").textContent = "";
    document.getElementById("btn-reiniciar").style.display = "none";
    document.getElementById("valor").value = "";
    document.getElementById("valor").disabled = false;
}