document.getElementById('meuformulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        document.getElementById('meuformulario').reset();
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
