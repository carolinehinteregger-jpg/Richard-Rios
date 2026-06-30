const senha = document.getElementById("senha");
const forca = document.getElementById("forca");

senha.addEventListener("input", verificarSenha);

function verificarSenha() {
    const valor = senha.value;
    let pontos = 0;

    const tamanho = valor.length >= 8;
    const maiuscula = /[A-Z]/.test(valor);
    const minuscula = /[a-z]/.test(valor);
    const numero = /[0-9]/.test(valor);
    const especial = /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/.test(valor);

    atualizar("c1", tamanho);
    atualizar("c2", maiuscula);
    atualizar("c3", minuscula);
    atualizar("c4", numero);
    atualizar("c5", especial);

    if (tamanho) pontos++;
    if (maiuscula) pontos++;
    if (minuscula) pontos++;
    if (numero) pontos++;
    if (especial) pontos++;

    forca.className = "";

    if (pontos <= 2) {
        forca.textContent = "Força da senha: Fraca";
        forca.classList.add("fraca");
    } else if (pontos <= 4) {
        forca.textContent = "Força da senha: Média";
        forca.classList.add("media");
    } else {
        forca.textContent = "Força da senha: Forte";
        forca.classList.add("forte");
    }
}

function atualizar(id, valido) {
    const item = document.getElementById(id);

    if (valido) {
        item.innerHTML = "✅ " + item.textContent.substring(2);
    } else {
        item.innerHTML = "❌ " + item.textContent.substring(2);
    }
}
