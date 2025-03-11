/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  const numbersArray = String(number).split(""); // число преобразуем в строку и разбиваем на массив символов (цифр)
  let sum = 0;
  for (const element of numbersArray) {
    sum += Number(element);
  }
  if (sum <= 9) {
    return sum;
  } else {
    return digitalRoot(sum);
  }
}

export { digitalRoot };
