// function logValue(value: unknown) {
//   console.log(value);
//   return value;
// }

// let a = "hello";

// const result = logValue(a);

// function logValue(value: number | string) {
//   console.log(value);
//   return value;
// }

// function logValue<T>(value: T): T {
//   console.log(value);
//   return value;
// }

// let a = "hello";

// const result = logValue(a);

// const arr: string[];

// const arr: Array<string | number> = [1, 2, 3, "4"];

// const p = new Promise<string>((res, rej) => res("Hello"));

// interface ITodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const todoUrl = "https://jsonplaceholder.typicode.com/todos";

// async function getData<T>(url: string): Promise<T> {
//   const response = await fetch(url);
//   return response.json() as T;
// }

// async function getTodos() {
//   const todoUrl = "https://jsonplaceholder.typicode.com/todos";
//   return await getData<ITodo>(todoUrl);
// }

// interface ITodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// function logValue<T>(value: T): T {
//   console.log(value);
//   return value;
// }

// const todo: ITodo = {
//   userId: 1,
//   id: 1,
//   title: "title",
//   completed: false,
// };

// logValue(todo);

// function forEach<T>(array: T[], callback: (element: T, index: number, array: T[]) => void): void {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// }

// forEach([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)], (el) => el.then((data) => console.log(data)));
// forEach([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)], async (el) => await el);
// forEach(["1", "2", "3"], (el) => el);

//TODO: Interface<T>

// interface IResponse<T> {
//   status: number;
//   body: T;
//   header: { [key: string]: string };
// }

// interface ITodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// interface IUser {
//   firstName: string;
//   lastName: string;
// }

// const todoResponse: IResponse<ITodo> = {
//   status: 200,
//   body: {
//     completed: false,
//     id: 1,
//     userId: 1,
//     title: "sda",
//   },
//   header: {},
// };

// const userResponse: IResponse<IUser> = {
//   status: 201,
//   body: {
//     firstName: "Nikita",
//     lastName: "Volkov",
//   },
//   header: {},
// };

// interface IUser {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// interface IAdmin {
//   domens: string[];
//   username: string;
//   permissions: string[];
//   age: number;
// }

// function checkAge<T extends { age: number }>(user: T) {
//   return user.age >= 18;
// }

// checkAge({
//   firstName: "Nikita",
//   lastName: "Volkov",
//   homeworks: [1, 2, 3, 4, 5, 7, 6],
//   age: 19,
// });

/*

Создайте дженерик функцию mergeObjects, которая принимает два объекта и возвращает новый объект, 
содержащий свойства обоих объектов. Для каждого из объектов сделать сужение дженерик типа до объекта. 
Результирующий тип должен быть объединением двух входных дженерик типов

*/

// function mergeObjects<T extends object, U extends object>(object1: T, object2: U): T & U {
//   return { ...object1, ...object2 };
// }

// const obj1 = { name: "Alice" };
// const obj2 = { age: 30 };
// const mergedObj = mergeObjects(obj1, obj2);
// console.log(mergedObj.name);

// function mergeObjects(obj1: object, obj2: object): object {
//   return { ...obj1, ...obj2 };
// }

//TODO: Keyof
// interface IUser {
//   name: string;
//   age: number;
// }

// type UserKeys = keyof IUser; // 'name' | 'age' | 'salary'

// // let key: UserKeys = "";
// // const arr: IUser[] = [
// //   { name: "Tatiana", age: 25 },
// //   { name: "Volodymir", age: 21 },
// // ];

// const arr = [
//   { name: "Tatiana", age: 25 },
//   { name: "Volodymir", age: 21 },
//   { name: "Volodymir", age: 21, phone: 12345656 },
// ];

// function getValuesByKey<T>(arr: T[], key: keyof T) {
//   return arr.map((el) => el[key]);
// }

// console.log(getValuesByKey(arr, "phone")); //['Tatiana', 'Volodymir']

//TODO: typeof

// function getStrOnNum(num: number) {
//   return num > 10 ? num : `Oops :D`;
// }

// const n = getStrOnNum(8);

// let result: typeof n;

// interface IUser {
//   name: string;
//   age: number;
//   salary: number;
//   isAdmin: boolean;
// }

// const user: IUser = { name: "Tatiana", age: 25, salary: 2000 };

// type UserType = typeof user;

// type UserKeys = keyof typeof user;

// // type UserValues = (typeof user)[UserKeys];
// type UserValues = (typeof user)[keyof typeof user];
// const STATUSES = {
//   OK: 200,
//   created: 201,
//   deleted: 204,
// } as const;

// type Statuses = typeof STATUSES;
// type StatusesValues = Statuses[keyof Statuses];

// function verifyResponse(status: StatusesValues) {}

// type ObjectValues<T extends object> = T[keyof T];

// interface IUser {
//   name: string;
//   age: number;
//   salary: number;
//   isAdmin: boolean;
// }

// interface IPartialUser {
//   name?: string;
//   age?: number;
//   salary?: number;
//   isAdmin?: boolean;
// }

// type UserValues = ObjectValues<IUser>;

//TODO: Utility Types

//TODO: Partial

// function getUserPart(user: Partial<IUser>) {}

// //TODO: Required
// interface IPartialUser {
//   name?: string;
//   age?: number;
//   salary?: number;
//   isAdmin?: boolean;
// }

// function getFullUser(user: Required<IPartialUser>) {
//   user;
// }

// //TODO: Readonly

// type ReadonlyUser = Readonly<IUser>;

// //TODO: Record

// // type CustomObject = {
// //   [key: string]: string | number;
// // };

// type CustomObject = Record<string, string | number>;

//TODO: Pick
interface IUser {
  name: string;
  age: number;
  salary: number;
  isAdmin: boolean;
}

// function getAdminData(partOfUser: Pick<IUser, "age" | "name">) {
//   //
// }

getAdminData({ age: 19, name: "Nikita" });

//TODO: Omit

function getAdminData(partOfUser: Omit<IUser, "salary" | "isAdmin">) {
  //
}
