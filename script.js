function verificarSenha() {
    let senha = document.getElementById("senha").value;
    let resultado = document.getElementById("resultado");

    if (senha.length < 6) {
        resultado.textContent = "Senha fraca 😬";
        resultado.style.color = "red";
    } else if (senha.match(/[0-9]/) && senha.match(/[!@#$%]/)) {
        resultado.textContent = "Boa! Essa é segura 🔐";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Senha média. Adicione números e símbolos.";
        resultado.style.color = "orange";
    }
}

function clickMenu() {
    if (links.style.display == 'block')
        links.style.display = 'none'
    else (links.style.display = 'block');
}