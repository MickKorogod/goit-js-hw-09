import Notiflix from 'notiflix';

const delay = document.querySelector('input [name = "delay"]')
const step = document.querySelector('input [name = "step"]')
const amount = document.querySelector('input [name = "amount"]')
const submitBtn = document.querySelector('button')

submitBtn.addEventListener('submit',submitForm)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`); 
  }
  else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  
  }
}

function submitForm () {
  const inputValue = {
    delay: delay.value,
    step: step.value,
    amount: amount.value
  }

  for (let i = 0; i < inputValue[amount.value]; i += 1) {
    createPromise()
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      delay + inputValue[step.value]
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    delay + inputValue[step.value]
  });
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });