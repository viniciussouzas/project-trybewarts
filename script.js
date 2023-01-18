// captura de elementos
const btn = document.querySelector('#btn');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const submitBtn = document.querySelector('#submit-btn');
const checkAgreement = document.querySelector('#agreement');
const desc = document.querySelector('#textarea');

btn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkAgreement.addEventListener('click', () => {
  if (checkAgreement.checked === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

desc.addEventListener('keypress', (e) => {
  const maxChars = 500;
  const inputLength = desc.value.length;
  console.log(maxChars);
  if (inputLength >= maxChars) {
    e.preventDefault();
  }
});
