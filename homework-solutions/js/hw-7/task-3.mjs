/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  const numStr = String(number);
  const nums = numStr.split('');
  let numSum = 0;

  for (const elem of nums) {
    numSum += Number(elem);
  };

  return numSum > 9 
    ? digitalRoot(numSum)
    : numSum;
 
}
//console.log(digitalRoot(987654321))

export { digitalRoot };
