const nome = document.getElementById("pnome");
const sobrenome = document.getElementById("unome");
const linguagem = document.getElementById("javascript");
const linguagem2 = document.getElementById("java");
const linguagem3 = document.getElementById("python");
const botao = document.getElementById("enviar");
const experiencia = document.getElementById("experiencia");
const projeto = document.getElementById("projeto");
const resumo = document.getElementById("resumo");

botao.addEventListener("click", function (event) {
    event.preventDefault();
    const linguagemSelecionada = document.querySelector('input[name="linguagem"]:checked');
    const tecnologiasSelecionadas = Array.from(document.querySelectorAll('input[name="tecnologias"]:checked')).map(el => el.value);

    if (!linguagemSelecionada) {
        alert("Selecione uma linguagem de programação.");
        return;
    }

    if (!experiencia.value || !projeto.value) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    const nomeCompleto = `${nome.value} ${sobrenome.value}`;
    const linguagemEscolhida = linguagemSelecionada.value;

    resumo.innerHTML = `
        <h3>Resumo:</h3>
        <p><strong>Nome:</strong> ${nomeCompleto}</p>
        <p><strong>Linguagem favorita:</strong> ${linguagemEscolhida}</p>
        <p><strong>Tempo de experiência:</strong> ${experiencia.value} anos</p>
        <p><strong>Tecnologias:</strong> ${tecnologiasSelecionadas.join(", ") || "Nenhuma selecionada"}</p>
        <p><strong>Projeto:</strong> ${projeto.value}</p>
    `;

    document.querySelector("formulario").reset();
   
});