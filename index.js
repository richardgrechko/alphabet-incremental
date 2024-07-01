let letterIndex = 0;
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let pointsDisplay = document.getElementById('points');

document.getElementById('button').addEventListener('click', () => {
        letterIndex++;
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
});
for (let i = 1; i <= 10; i++) {
    document.getElementById('upgradeButton'+i).addEventListener('click', () => {
        let cost = 26**i;
        if (letterIndex >= cost) {
            upgrades++;
            upgradesDisplay.textContent = `Upgrades: ${upgrades}`;
            lettersPerSecond += 10 ** (i - 1);
            letterIndex -= cost;
        } else {
            alert('Not enough stats to buy upgrade!');
        }
    });
}

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
