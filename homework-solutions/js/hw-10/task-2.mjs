/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

function countOccurrences(arr) {
  const countedNumbersObject = {};
  for (let element of arr) {
    if (countedNumbersObject[element] === undefined) { // если объект не содержит ключ, равный элементу массива
      countedNumbersObject[element] = 1; // добавим в объект пару "элемент массива : 1"
    } else { // если такой ключ уже есть, увеличиваем его значение на единицу 
      countedNumbersObject[element]++;
    }
  } 
  return countedNumbersObject; 
}

export { countOccurrences };
