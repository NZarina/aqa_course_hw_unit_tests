/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...newArray) {
  let combinedArray =  [];
  combinedArray = combinedArray.concat(...newArray);
  return combinedArray;
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  let text = sentence.toLowerCase().split(' '); // создание массива из строки и перевод в нижний регистр
  let capitalizedArray = [text[0]]; // кладем в массив первое слово
  for (let i = 1; i < text.length; i++) {
    if(text[i] !== "") {
      const word = text[i].charAt(0).toUpperCase() + text[i].slice(1); //перевод первой буквы слова в верхний регистр и добавление остальных букв слова
      capitalizedArray.push(word); // добавление результата в массив
    }
    }
  const underscoredString = capitalizedArray.join('_'); // перевод массива в строку с добавлением '_' м/у словами
  return underscoredString;
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n === 0) return 0; 
  if (n === 1) return 1; 
  let fibonacciSequence = [0, 1]; 
  for (let i = 2; i <= n; i++) {
      let f1 = fibonacciSequence.at(-2); // предпоследний элемент в массиве
      let f2 = fibonacciSequence.at(-1); // последний элемент в массиве
      let sumOfTwo = f1 + f2;
      fibonacciSequence.push(sumOfTwo); // добавление в массив
  }
  return fibonacciSequence.at(-1); // возврат последнего элемента массива
}

export { mergeArrays, fibonacci, devideBy };
