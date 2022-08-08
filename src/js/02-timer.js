
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const currentDate = new Date()
const btnStart = document.querySelector('button[data-start]')
const dataDay = document.querySelector('[data-days]')
const dataHours = document.querySelector('[data-hours]')
const dataMinutes = document.querySelector('[data-minutes]')
const dataSeconds = document.querySelector ('[data-seconds]')
const flatPick = document.querySelector('input[type ="text"]')

btnStart.disabled = true
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < currentDate) {
          window.alert("Please choose a date in the future")
          return
      };
      const choiceDate = selectedDates[0].getTime()
      btnStart.removeAttribute('disabled')
      function Countdown() {
        const intervalId = setInterval(() => {
        
        const deadline = choiceDate - Date.now();
        console.log(deadline)
        if (deadline <= 0) {
        clearInterval(intervalId)
        return
        }
        convertMs(deadline);
    }, 1000)
   console.log(intervalId) 
}
      btnStart.addEventListener('click', Countdown) 
  },
};
flatpickr(flatPick, options) 



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero( Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero (Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero ( Math.floor((((ms % day) % hour) % minute) / second));

    dataDay.textContent = days;
    dataHours.textContent = hours;
    dataMinutes.textContent = minutes;
    dataSeconds.textContent = seconds;
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
     return String(value).padStart(2,'0')
 }