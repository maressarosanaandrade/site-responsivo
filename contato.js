document.getElementById("btn-voltar").addEventListener("click", function () {
    window.location.href="index.html";
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const msgSucesso = document.createElement('div');
    msgSucesso.classList.add('mensagem-sucesso');
    msgSucesso.textContent = 'Mensagem enviada com sucesso! Obrigado por entrar em contato.';

    document.body.appendChild(msgSucesso);

    setTimeout(() => {
        msgSucesso.remove();
    }, 3000);
    this.reset();
});