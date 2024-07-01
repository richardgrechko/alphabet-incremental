let letterIndex = 0;
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let pointsDisplay = document.getElementById('points');

setInterval(() => {
        if (letterIndex < 25) {
        pointsDisplay.textContent = `Stats: ${alphabet[Math.floor(letterIndex)]}`;
    }
    if (letterIndex < (26**2)-1) {
        pointsDisplay.textContent = `Stats: ${alphabet[Math.floor(letterIndex/26)-1]}${alphabet[Math.floor(letterIndex) % 26]}`;
    }
    if (letterIndex < (26**3)-1) {
        pointsDisplay.textContent = `Stats: ${alphabet[Math.floor(letterIndex/(26**2))-1]}${alphabet[Math.floor(letterIndex/26) % 26]}${alphabet[Math.floor(letterIndex) % 26]}`;
    }
    if (letterIndex < (26**4)-1) {
        pointsDisplay.textContent = `Stats: ${alphabet[Math.floor(letterIndex/(26**3))-1]}${alphabet[Math.floor(letterIndex/(26**2)) % 26]}${alphabet[Math.floor(letterIndex/26) % 26]}${alphabet[Math.floor(letterIndex) % 26]}`;
    }
    if (letterIndex < (26**5)-1) {
        pointsDisplay.textContent = `Stats: ${alphabet[Math.floor(letterIndex/(26**Math.floor(letterIndex.log(26))))]}^${alphabet[Math.floor(letterIndex.log(26))]}`;
    }
}, 15);
setInterval(() => {
    letterIndex += lettersPerSecond / 60;
    let temp = letterIndex;
    let tempStats = '';
    for (let i = 0; i < 10; i++) {
        tempStats = alphabet[temp % 26] + tempStats;
        temp = Math.floor(temp / 26);
    }
    currentStats = tempStats;
    pointsDisplay.textContent = `Stats: ${currentStats}`;
}, 15);
