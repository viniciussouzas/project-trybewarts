// captura de elementos
const btn = document.querySelector('#btn');
const password = document.querySelector('#password');
const email = document.querySelector('#email');

btn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
