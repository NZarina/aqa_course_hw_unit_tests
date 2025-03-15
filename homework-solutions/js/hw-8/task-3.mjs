/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const n = Math.max(...numbers); //  число n - максимальное число в массиве
  const sumTotal = (n * (n + 1))/2 //  сумма чисел от 1 до n
  const sumArray = numbers.reduce( // сумма всех чисел в массиве
    (result,number) => result + number,
    0
  );
  const missingNumber = sumTotal - sumArray; 
  if(missingNumber===0){ // условие для сценария, где пропущенное число находится в конце массива
    return n + 1
  } else
  return missingNumber;
}

const numbers = [5,2,7,3,8,1,6];
findMissingNumber(numbers);
 
export { findMissingNumber };
