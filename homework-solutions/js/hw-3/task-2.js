"use strict";
/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

// Вариант 1:
const n = 1;
const sum = n + Number("" + n + n) + Number("" + n + n + n);
console.log(sum)

// Вариант 2:
// const n = 1;
// const nn = String(n) + String(n);
// const nnn = String(n) + String(n) + String(n);
// const sum = n + Number(nn) + Number(nnn);
// console.log(sum);