// captura de elementos
const btn = document.querySelector('#btn');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const submitBtn = document.querySelector('#submit-btn');
const checkAgreement = document.querySelector('#agreement');
const desc = document.querySelector('#textarea');
const evaluationForm = document.querySelector('#evaluation-form');
const newForm = document.querySelector('#form-data');

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

const maxValue = 500;
const counter = document.querySelector('#counter');

desc.addEventListener('input', (e) => {
  const target = e.target.value;
  const inputLength = target.length;
  counter.innerHTML = maxValue - inputLength;
});

const capturaName = () => {
  const name = document.querySelector('#input-name');
  const lastName = document.querySelector('#input-lastname');
  const nameForm = document.createElement('p');
  nameForm.innerHTML = `Nome: ${name.value} ${lastName.value}`;

  newForm.appendChild(nameForm);
};

const capturaEmail = () => {
  const emailCaptured = document.querySelector('#input-email');
  const emailForm = document.createElement('p');
  emailForm.innerHTML = `Email: ${emailCaptured.value}`;

  newForm.appendChild(emailForm);
};

const capturaHouse = () => {
  let houseSelect = '';

  const housesCaptured = document.querySelectorAll('.houses');

  for (let index = 0; index < housesCaptured.length; index += 1) {
    if (housesCaptured[index].selected) {
      houseSelect = housesCaptured[index].innerHTML;
    }
  }

  const houseForm = document.createElement('p');
  houseForm.innerHTML = `Casa: ${houseSelect}`;

  newForm.appendChild(houseForm);
};

const capturaFamily = () => {
  let familySelect = '';

  const familyCaptured = document.querySelectorAll('.families');

  for (let index = 0; index < familyCaptured.length; index += 1) {
    if (familyCaptured[index].checked) {
      familySelect = familyCaptured[index].value;
    }
  }
  const familyForm = document.createElement('p');
  familyForm.innerHTML = `Família: ${familySelect}`;

  newForm.appendChild(familyForm);
};

const capturaSubjects = () => {
  const subjectSelect = [];

  const subjectCaptured = document.querySelectorAll('.subject');

  for (let index = 0; index < subjectCaptured.length; index += 1) {
    if (subjectCaptured[index].checked) {
      subjectSelect.push(subjectCaptured[index].value);
    }
  }
  const subjectForm = document.createElement('p');
  subjectForm.innerHTML = `Matérias: ${subjectSelect.join(', ')}`;

  newForm.appendChild(subjectForm);
};

const capturaRate = () => {
  let rateSelect = '';

  const rateCaptured = document.querySelectorAll('.rates');

  for (let index = 0; index < rateCaptured.length; index += 1) {
    if (rateCaptured[index].checked) {
      rateSelect = rateCaptured[index].value;
    }
  }
  const rateForm = document.createElement('p');
  rateForm.innerHTML = `Avaliação: ${rateSelect}`;

  newForm.appendChild(rateForm);
};

const capturaComment = () => {
  const commentCaptured = document.querySelector('#textarea');
  const commentForm = document.createElement('p');
  commentForm.innerHTML = `Observações: ${commentCaptured.value}`;

  newForm.appendChild(commentForm);
};

const hidePage = () => {
  evaluationForm.style.display = 'none';
  newForm.style.width = '675px';
  newForm.style.textAlign = 'left';
  newForm.style.marginLeft = '5%';
  newForm.style.marginTop = '115px';
  newForm.style.marginBottom = '115px';
  newForm.style.padding = '8px 20px';
};

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  hidePage();
  capturaName();
  capturaEmail();
  capturaHouse();
  capturaFamily();
  capturaSubjects();
  capturaRate();
  capturaComment();
});
