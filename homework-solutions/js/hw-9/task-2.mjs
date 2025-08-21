/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  // Ваш код
};

function getCharacter(name) {
  if (!name || typeof name !== "string") {
    throw new Error("Невалидное имя, должна быть строка")
  };
  return characters.find((elem) => elem.name === name)
}

function getCharactersByAge(minAge) {
  if (!minAge || typeof minAge !== "number") {
    throw new Error("Невалидный возраст, должно быть число")
  };
  return characters.filter((elem) => elem.age >= minAge)
}

function updateCharacter(name, newCharacter) {
  if (!name || typeof name !== "string") {
    throw new Error("Невалидное имя, должна быть строка")
  };
  if (!newCharacter.name || typeof newCharacter.name !== "string") {
    throw new Error("Невалидное имя, должна быть строка")
  };
  if (!newCharacter.age || typeof newCharacter.age !== "number") {
    throw new Error("Невалидный возраст, должно быть число")
  };
  const index = characters.findIndex((elem) => elem.name === name);
  if (index === -1) {
    throw new Error(`Персонаж с именем ${name} не найден`);
  };
  characters[index].name = newCharacter.name;
  characters[index].age = newCharacter.age;
}

function removeCharacter(name) {
  if (!name || typeof name !== "string") {
    throw new Error("Невалидное имя, должна быть строка")
  };
  const index = characters.findIndex((elem) => elem.name === name);
  if (index === -1) {
    throw new Error(`Персонаж с именем ${name} не найден`);
  };
  characters.splice(index, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
