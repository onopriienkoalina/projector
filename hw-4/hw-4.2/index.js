
const btn = document.querySelector('button');
const body = document.querySelector('body');
const lastTurnOff = document.querySelector('#last-turn-off');

const off = 'Turn off';
const on = 'Turn on';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = LIGHT_MODE;

init();

function init() {
    let storedMode = localStorage.getItem('mode');
    if (!storedMode) {
        storedMode = DEFAULT_MODE;
        localStorage.setItem('mode', DEFAULT_MODE);
    }
    setMode(storedMode);
    dateText();
}

function setMode(mode = DEFAULT_MODE) {
    if (mode === DARK_MODE) {
        btn.textContent = on;
        document.body.classList.add(DARK_MODE);

    } else if (mode === LIGHT_MODE) {
        btn.textContent = off;
        document.body.classList.remove(DARK_MODE);
    }
}

btn.addEventListener('click', function () {
    let mode = localStorage.getItem('mode');
    if (mode) {
        let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
        setMode(newMode);
        localStorage.setItem('mode', newMode);
    }
    dateText();
});
function dateText(){
  const now = new Date();
  if (btn.textContent === 'Turn off') {
    const lastTurnOnTime = new Date(parseInt(localStorage.getItem('lastTurnOnTime')));
    lastTurnOff.textContent = 'Last turn on:' + formatDate(lastTurnOnTime);
    
    localStorage.setItem('lastTurnOffTime', now.getTime());
  }
  else{
    const lastTurnOffTime = new Date(parseInt(localStorage.getItem('lastTurnOffTime')));
    lastTurnOff.textContent = 'Last turn off:' + formatDate(lastTurnOffTime);

    localStorage.setItem('lastTurnOnTime', now.getTime());
  }
}
function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

btn.addEventListener('click', dateText);

