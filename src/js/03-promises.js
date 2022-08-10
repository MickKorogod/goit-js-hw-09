import Notiflix from 'notiflix';
const delay = document.querySelector('[name="delay"]')
const step = document.querySelector('[name="step"]')
const amount = document.querySelector('[name="amount"]')
const formRef= document.querySelector('.form')
formRef.addEventListener('submit',submitForm)
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay});
    }
    else {
      reject({position, delay});
    }
  }, delay);
});
}
function submitForm(e) {
e.preventDefault()
  const inputValue = {
    delay: +delay.value,
    step: +step.value,
    amount: +amount.value
  }
  for (let i = 0; i < inputValue.amount; i += 1) {
    createPromise( i+1, inputValue.delay)
    .then(({position, delay}) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({position, delay}) => {
    Notiflix.Notify.failure(` ❌ Rejected promise ${position} in ${delay}ms`);
  });
    inputValue.delay += inputValue.step
  }
}