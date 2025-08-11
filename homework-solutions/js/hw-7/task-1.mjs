/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  let mergedArray = [];
  for (const array of arrays) {
    mergedArray = [...mergedArray, ...array]
  }
  return mergedArray
}
//console.log(mergeArrays([1, 'a']));

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  if (sentence === '') return sentence;
  const array = sentence.split(' ');
  const modifyedArray = [];
  for (let elem of array) {
    if (elem !== '') {
      elem = elem.toLowerCase().trim();
      elem = elem.charAt(0).toUpperCase() + elem.slice(1);
      modifyedArray.push(elem);
    }
  }
  modifyedArray[0] = modifyedArray[0].toLowerCase();
  const joinedString = modifyedArray.join('_');
  return joinedString;

}
//console.log(devideBy(''));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const arr = [0, 1];
  if (n < 2) {
    return arr[n];
  }
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

export { mergeArrays, fibonacci, devideBy };
