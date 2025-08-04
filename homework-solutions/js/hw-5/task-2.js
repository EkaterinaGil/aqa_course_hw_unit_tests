/**
 * Создать строку с числами от 1 до 100.
 * Если число делится на 3 – добавить строку `"число - делится на 3"`.
 * Если число делится на 5 – добавить строку `"число - делится на 5"`.
 * Если число делится и на 3, и на 5 – добавить строку `"число - делится и на 3 и на 5"`.
 * Каждая следующая строчка начинается с новой строки.
 * Переменная `fizzBuzzResult` уже создана и содержит пустую строку.
 * Ожидаемый результат (фрагмент):
 * 1
 * 2
 * 3 - делится на 3
 * 4
 * 5 - делится на 5
 * ...
 * 15 - делится и на 3 и на 5
 * ...
 * 100 - делится на 5
 */
let fizzBuzzResult = '';

for (let i = 1; i <= 100; i++) {
    let strI = i + '';
    let sum = 0;
    for (let j = 0; j < strI.length; j++) {
        sum = sum + strI[j];
    }
    if ((sum % 3 === 0) && (strI.slice(-1) !== '5') && (strI.slice(-1) !== '0')) {
        fizzBuzzResult = fizzBuzzResult + `\n${i} - делится на 3`;
    } else if ((strI.slice(-1) === '5' || strI.slice(-1) === '0') && (sum % 3 !== 0)) {
        fizzBuzzResult = fizzBuzzResult + `\n${i} - делится на 5`;
    } else if ((strI.slice(-1) === '5' || strI.slice(-1) === '0') && (sum % 3 === 0)) {
        fizzBuzzResult = fizzBuzzResult + `\n${i} - делится и на 3 и на 5`;
    } else {
        fizzBuzzResult = fizzBuzzResult + `\n${i}`
    }
}
fizzBuzzResult = fizzBuzzResult.slice(1);
//console.log(fizzBuzzResult);

export { fizzBuzzResult };
