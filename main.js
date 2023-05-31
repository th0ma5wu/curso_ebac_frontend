const form = document.getElementById('form-numeros')
const primeiroNumero = document.getElementById('numeroA')
const segundoNumero = document.getElementById('numeroB')
let validadeForm = false;

function comparaNumeros(numeroA, numeroB) {
    return parseInt(numeroB) > parseInt(numeroA);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const primeiroNumero = document.getElementById('numeroA');
    const segundoNumero = document.getElementById('numeroB')
    const mensagemSucesso = `Parabéns! O número B: <b>${segundoNumero.value}</b> é maior que o número A: <b>${primeiroNumero.value}</b>`;

    if(validadeForm) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        primeiroNumero.value = '';
        segundoNumero.value = '';
    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.style.display = 'block';
    }
});

segundoNumero.addEventListener('keyup', function(e) {
    validadeForm = comparaNumeros(primeiroNumero.value, e.target.value);

    if(!validadeForm) {
        segundoNumero.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        segundoNumero.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});