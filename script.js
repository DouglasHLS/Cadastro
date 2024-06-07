function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagem = document.getElementById('mensagem');

    if (senha !== confirmarSenha) {
        mensagem.textContent = 'As senhas não coincidem.';
        return false;
    }

    // Aqui você pode adicionar mais validações, como verificar o formato do email,
    // validar a força da senha, etc.

    mensagem.textContent = 'Cadastro realizado com sucesso!';
    mensagem.style.color = 'green';
    return true;
}
