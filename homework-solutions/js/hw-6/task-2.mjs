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

let resultUnique = [];
let resultNull;

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const competitorPizzasLowerCased = competitorPizzas.join().toLowerCase().split(","); // перевожу пиццы конкурента в нижний регистр

for (let i = 0; i < myPizzasT1.length; i++) {
    if (!competitorPizzasLowerCased.includes(myPizzasT1[i].toLowerCase())) { // если моей пиццы нет у конкурента, 
      resultUnique.push(myPizzasT1[i]); // добавляю ее в новый массив resultUnique
    }
}

for (let i = 0; i < myPizzasT2.length; i++) {
  if (!competitorPizzasLowerCased.includes(myPizzasT2[i].toLowerCase())) { // если моей пиццы нет у конкурента, 
    resultUnique.push(myPizzasT2[i]); // добавляю ее в новый массив resultUnique
  }
}

if(resultUnique.length > 0) { // если массив resultUnique пуст, то вывожу null, в противном случае вывожу элементы массива
  resultNull = null;
}

export { resultNull, resultUnique };
