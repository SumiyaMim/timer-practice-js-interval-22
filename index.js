let timerInterval;
let timerValue = 0;
const timerDisplay = document.getElementById("timer");
let startButton = document.getElementById('start-timer');
let stopButton = document.getElementById('stop-timer');
let resetButton = document.getElementById('reset-timer');

// Disable the "Stop" and "Reset" buttons initially
stopButton.disabled = true;
resetButton.disabled = true;

function startTimer() {
    // Disable the "Start" button
    startButton.disabled = true;
    // Enable the "Stop" and "Reset" buttons
    stopButton.disabled = false; 
    resetButton.disabled = false;

    timerInterval = setInterval(() => {
        timerValue++;
        timerDisplay.textContent = timerValue;
    }, 1000);
}

function stopTimer() {
    // Enable the "Start" and "Reset" buttons, Disable the "Stop" button
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;

    clearInterval(timerInterval);
}

function resetTimer() {
    // Enable the "Start" button and disable the "Stop" and "Reset" buttons
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;

    // Clear the interval if it's active
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerValue = 0;
    timerDisplay.textContent = timerValue;
}

