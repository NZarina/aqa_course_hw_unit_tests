/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

const wordUpperCased = word.toUpperCase();

const consonantsRU = "БВГДЖЗЙКЛМНПРСТФХЦЧШЩ"; // все согласные русского алфавита
const vowelsRU = "АЕЁИОУЫЭЮЯ"; // все гласные русского алфавита
const consonantsEN = "BCDFGHJKLMNPQRSTVWXYZ"; // все согласные английского алфавита
const vowelsEN = "AEIOU"; // все гласные английского алфавита
let numberOfConsonants = 0; // счетчик для согласных
let numberOfvowels = 0; // счетчик для гласных
for (let i = 0; i < wordUpperCased.length; i ++) {
    if (consonantsRU.includes(wordUpperCased[i]) || consonantsEN.includes(wordUpperCased[i])) { 
        numberOfConsonants += 1;
    } else if (vowelsRU.includes(wordUpperCased[i]) || vowelsEN.includes(wordUpperCased[i])) { 
        numberOfvowels += 1;
    } 
}

vowelsAndConsonantsResult = `${word} contains ${numberOfvowels} vowels and ${numberOfConsonants} consonants`

export { vowelsAndConsonantsResult };
