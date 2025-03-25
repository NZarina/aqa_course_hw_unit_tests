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
  if(typeof character.name === 'string' && typeof character.age === 'number'){
    characters.push(character)
  } else {
    throw new Error("ОШИБКА! Объект должен содержать параметр name с типом данных string и параметр age с типом данных number.");
  }
}

function getCharacter(name) {
  return characters.find((character) => character.name == name) || undefined;
}

function getCharactersByAge(minAge) {
  if (typeof minAge === 'number') {
    return characters.filter((character) => character.age >= minAge);
  } else {
    throw new Error("Введите минимальный возраст в формате number");
  }
}

function updateCharacter(name, newCharacter) {
  if (typeof name !== 'string') {
    console.log('Введите имя заменяемого персонажа в формате string')
  }  
  if (typeof newCharacter !== 'object') {
    console.log('Введите данные в формате object');
  };
  const { name: newName, age: newAge } = newCharacter;
  const characterToChange = getCharacter(name);
  if (characterToChange) {
      characterToChange.name = (newName && typeof newName === 'string' && newName) || characterToChange.name;
      characterToChange.age = (newAge && typeof newAge === 'number' && newAge) || characterToChange.age;
  } else {
    throw new Error("Персонаж не найден");
  };
}

function removeCharacter(name) {
  const index = characters.findIndex((character) => character.name === name);
  if(index >= 0) {
      characters.splice(index, 1);
  } else {
    throw new Error('Персонаж не найден');
  }
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
