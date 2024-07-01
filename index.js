let letterIndex = 0;
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let pointsDisplay = document.getElementById('points');

document.getElementById('button').addEventListener('click', () => {
        letterIndex++;
    if (letterIndex < 25) {
        pointsDisplay.textContent = `Stats: ${alphabet[letterIndex]}`;
    }
    if (letterIndex < (26**2)-1) {
        letterIndex++;
        pointsDisplay.textContent = `Stats: ${alphabet[Math.floor(letterIndex/26)]}${alphabet[letterIndex]}`;
    }
});
