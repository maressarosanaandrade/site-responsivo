const curtida = {
    mensagem: "Obrigado pela curtida! Seu apoio faz a galeria florescer 🌸🌿💚",
    contador: 0
};

function curtirGaleria() {
    curtida.contador++;
    const texto = `${curtida.mensagem} (${curtida.contador} curtida${curtida.contador > 1 ? 's' : ''})`;
    document.getElementById("mensagem-curtida").innerText = texto;
}