/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique;
let resultNull;

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

function comparePizzas(arrayCompetitors, arrayMy) {
  const uniquePizzasList = [];
  const lowerArrayCompetitors = [];
  for (const elem of arrayCompetitors) {
    lowerArrayCompetitors.push(elem.toLowerCase())
  };
  for (const elemMy of arrayMy) {
    const lowerElemMy = elemMy.toLowerCase();
    if (!lowerArrayCompetitors.includes(lowerElemMy)) {
      uniquePizzasList.push(elemMy)
    }
  };
  if (uniquePizzasList.length === 0) {
    return resultNull = null;
  } else return resultUnique = uniquePizzasList;
};

const resultT1 = comparePizzas(competitorPizzas, myPizzasT1);

const resultT2 = comparePizzas(competitorPizzas, myPizzasT2);

//console.log(resultNull, resultUnique)

export { resultNull, resultUnique };
