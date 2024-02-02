const form = document.getElementById('form-inscricao');
let linhas = '';
const nome = [];
const celular = [];
const email = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atulizaTabela();
});

function adicionaLinha(){

    const inputNomeInscricao = document.getElementById('nome-inscricao');
    const inputCelularInscricao = document.getElementById('celular-inscricao');
    const inputEmailInscricao = document.getElementById('email-inscricao');

    nome.push(inputNomeInscricao.value);
    celular.push(inputCelularInscricao.value);
    email.push(inputEmailInscricao.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeInscricao.value}</td>`;
    linha += `<td>${inputCelularInscricao.value}</td>`;
    linha += `<td>${inputEmailInscricao.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeInscricao.value = '';
    inputCelularInscricao.value = '';
    inputEmailInscricao.value = '';

}

function atulizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
