"use strict";

// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds(callback) {
    setTimeout(() => {
        callback();
    }, 2000)
}

delayTwoSeconds(() => {
  console.log('Прошло 2 секунды с момента вызова функции');
});


// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then 
// и выведите результат его резолва в консоль
const resolvedPromise = new Promise((resolve) => {
    resolve(1);
});
resolvedPromise.then((result) => console.log(result));


// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его реджекта в консоль
const rejectedPromise = new Promise((reject) => {
    reject("Promise failed");
});
rejectedPromise.catch((result) => console.log(result));


// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(num){
    return new Promise((resolve) => {
        resolve(num)
    });
}
promiseNumber(777).then((result) => console.log(result));


// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты
// и последовательно выведите в консоль результаты работы каждого промиса через .then 
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((resolvedResult) => 
    resolvedResult.forEach((element) => console.log(element)),
);


// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => 
    results.forEach((element) => console.log(element)),
);


// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function promiseAllFunction() {
    try {
      const result = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
      result.forEach(promiseResult => console.log(promiseResult));
    } catch (err) {
      console.error(err);
    } finally {
      console.log("promiseAllFunction finished");
    }
  }
  
promiseAllFunction();


async function promiseAllSettledFunction() { 
  try {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((element) => console.log(element));
  } catch (err) {
    console.error(err);
  } finally {
    console.log("promiseAllSettledFunction finished");
  }
}

promiseAllSettledFunction();
