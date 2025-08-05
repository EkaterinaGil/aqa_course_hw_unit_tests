/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

let vowelsCount = 0;
let consonantsCount = 0;

for (let i = 0; i < word.length; i++) {
    let wordLower = word.toLowerCase();
    if (wordLower[i] === 'a' || wordLower[i] === 'e' || wordLower[i] === 'i' || wordLower[i] === 'o' || wordLower[i] === 'u') {
        vowelsCount++;
    } else if (/^[a-z]$/.test(wordLower[i])) {
        consonantsCount++;
    };
}

vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;

export { vowelsAndConsonantsResult };
