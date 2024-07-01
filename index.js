let letterIndex = 0;
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let pointsDisplay = document.getElementById('points');

document.getElementById('button').addEventListener('click', () => {
        letterIndex++;
    if (letterIndex < (26**5)-1) {
        letterIndex++;
        pointsDisplay.textContent = `Stats: ${alphabet[Math.floor(letterIndex/26)]}^${alphabet[Math.floor(letterIndex.log(26))]}`;
    }
    if (letterIndex < (26**4)-1) {
        letterIndex++;
        pointsDisplay.textContent = `Stats: ${alphabet[Math.floor(letterIndex/(26**3))-1]}${alphabet[Math.floor(letterIndex/(26**2)) % 26]}${alphabet[Math.floor(letterIndex/26) % 26]}${alphabet[Math.floor(letterIndex) % 26]}`;
    }
    if (letterIndex < (26**3)-1) {
        letterIndex++;
        pointsDisplay.textContent = `Stats: ${alphabet[Math.floor(letterIndex/(26**2))-1]}${alphabet[Math.floor(letterIndex/26) % 26]}${alphabet[Math.floor(letterIndex) % 26]}`;
    }
    if (letterIndex < (26**2)-1) {
        letterIndex++;
        pointsDisplay.textContent = `Stats: ${alphabet[Math.floor(letterIndex/26)-1]}${alphabet[Math.floor(letterIndex) % 26]}`;
    }
    if (letterIndex < 25) {
        pointsDisplay.textContent = `Stats: ${alphabet[Math.floor(letterIndex)]}`;
    }
});
