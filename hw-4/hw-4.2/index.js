
const button = document.querySelector('button');
const body = document.querySelector('body');
const lastTurnOff = document.querySelector('#last-turn-off');

// Змінна, яка зберігатиме час останнього вимкнення кнопки
let lastTurnOffTime = {
    isOn: true,
    lastChangeTime: null
  };

button.addEventListener('click', function() {
  if (button.textContent === 'Turn off') {
    button.textContent = 'Turn on';
    body.style.backgroundColor = '#000000';
    lastTurnOffTime = new Date();
    lastTurnOff.textContent = 'Last turn off: ' + formatDate(lastTurnOffTime);
    body.style.color = '#fff';
    localStorage.time = formatDate(lastTurnOffTime);
    localStorage.setItem('lastTurnOffTime', Date.now()); 
  } else {
    button.textContent = 'Turn off';
    body.style.backgroundColor = '#fff';
    lastTurnOffTime = new Date();
    lastTurnOff.textContent = 'Last turn on: ' + formatDate(lastTurnOffTime);
    body.style.color = '#000000';
    localStorage.time = formatDate(lastTurnOffTime);
    localStorage.setItem('lastTurnOffTime', Date.now()); 
  }
});

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}


