/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function countVowels(word) {
  let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  const symbols = word.split('');
  let vowelsCounter = symbols.reduce((acc, element) => {
    const isFound = vowelsArray.some(item => item === element);
    if (isFound) acc++;
    return acc;
  }, 0);
  return vowelsCounter;
};

function sortedByVowels(wordsArr) {
  let resultArr = [...wordsArr].sort((a, b) => countVowels(a) - countVowels(b));
  return resultArr;
}

export { sortedByVowels };
