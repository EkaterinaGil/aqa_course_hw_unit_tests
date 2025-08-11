/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  };
  let wordModifyed = word.toLowerCase().trim();
  const wordLowerLetters = wordModifyed.split('');
  const wordBackwards = [];
  for (let i = wordLowerLetters.length - 1; i >= 0; i--) {
    wordBackwards.push(wordLowerLetters[i]);
  }
  const result = (wordLowerLetters.join('') === wordBackwards.join('')) ? true : false;
  return result;
}
//console.log(isPalindrom({}));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') {
    return [];
  };
  const wordsArray = sentence.split(' ');
  let maxLengthCounter = 0;
  let resultArray = [];
  for (let elem of wordsArray) {
    if (elem.length > maxLengthCounter) {
      maxLengthCounter = elem.length;
      resultArray = [elem];
    } else if (elem.length === maxLengthCounter && elem.length !== 0)
      resultArray.push(elem)
  }
  return resultArray;
}

//console.log(findLongestWords('one seven two three seven'));

export { isPalindrom, findLongestWords };
