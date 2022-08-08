const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body')
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
  return  body.style.background = (`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }, 1000);  
  startBtn.disabled = true
  stopBtn.disabled = false
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false
  stopBtn.disabled = true
}); 