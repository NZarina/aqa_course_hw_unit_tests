"use strict";

// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

const url = "https://jsonplaceholder.typicode.com/todos";
async function createTodo(body) { 
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify(body), // преобразование объекта JS в JSON
      });
      
      if(response.status !== 201) {
        throw new Error(`ERROR!!! ${response.status} status code received.`);
      }
      
      const responseBodyObject = await response.json(); // преобразование JSON в объект JS

      for (const key in body) {
        if (body[key] !== responseBodyObject[key]) {
            throw new Error(`Request value does not match response value.`);
        }
    }
    
    return responseBodyObject;
      
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log("createToDo function finished.")
  }
}

const toDoTestBody = {
    userId: 777,
    title: "Send a test request",
    completed: true
  };


createTodo(toDoTestBody).then((result) => console.log(result));;


