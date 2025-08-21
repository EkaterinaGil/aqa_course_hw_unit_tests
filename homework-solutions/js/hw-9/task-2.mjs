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
  if (!character.name || typeof character.name !== "string") {
    throw new Error("Невалидное имя, должна быть строка")
  };
  if (!character.age || typeof character.age !== "number") {
    throw new Error("Невалидный возраст, должно быть число")
  };
  characters.push({ name: character.name, age: character.age });
};
addCharacter({ name: 'Екатерина', age: 39 });
console.log(characters);

function getCharacter(name) {
  // Ваш код
}

function getCharactersByAge(minAge) {
  // Ваш код
}

function updateCharacter(name, newCharacter) {
  // Ваш код
}

function removeCharacter(name) {
  // Ваш код
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
