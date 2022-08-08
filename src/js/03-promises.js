import Notiflix from 'notiflix';

const delay = document.querySelector('input [name = "delay"]')
const step = document.querySelector('input [name = "step"]')
const amount = document.querySelector('input [name = "amount"]')
const submitBtn = document.querySelector('button')

submitBtn.addEventListener('submit',submitForm)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }
    else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, 2000);
});
}

function submitForm() {
  
  const inputValue = {
    delay: delay.value,
    step: step.value,
    amount: amount.value
  }
  for (let i = 0; i < inputValue.amount; i += 1) {
    createPromise()
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    inputValue.delay + inputValue.step
  }
}

