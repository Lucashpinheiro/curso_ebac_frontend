const form = document.getElementById('form-number');
const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagemErro = `O número B deve ser maior que o número A`;
    const mensagemSucesso = `Parabéns! <b>${numberA.value}</b> é menor que <b>${numberB.value}</b>, validação completa`;

    if(numberA.value >= numberB.value) {
        const containerMesagemSucesso = document.querySelector('.mensagem-sucesso').innerHTML = '';
        numberA.style.border = '1px solid #FF0000';
        const containerMensagemErro = document.querySelector('.mensagem-erro').innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }else {
        numberA.style.border = '';
        numberA.value = '';
        numberB.value = '';
        const containerMensagemErro = document.querySelector('.mensagem-erro').innerHTML = '';
        const containerMesagemSucesso = document.querySelector('.mensagem-sucesso').innerHTML = mensagemSucesso;
        containerMesagemSucesso.style.display = 'block';
        
    }
});