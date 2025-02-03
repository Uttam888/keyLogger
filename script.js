const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', () => {
    document.addEventListener('keydown',handleDown);
    document.addEventListener('keyup',handleUp);
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    document.removeEventListener('keydown',handleDown);
    document.removeEventListener('keyup',handleUp);
    logDiv.textContent = '';
    stateDiv.textContent = '';
    startButton.disabled = false;
    stopButton.disabled = true;
})

function handleDown(e) {
    logDiv.textContent = `Key ${e.key} pressed down`;
    stateDiv.textContent = 'Key is down';
}

function handleUp(e) {
    logDiv.textContent = `Key ${e.key} pressed Up`;
    stateDiv.textContent = 'Key is Up';
}