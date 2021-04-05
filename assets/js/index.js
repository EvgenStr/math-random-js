'use strict';
// Заполнить массив из 10 элементов случайными целыми числами от 100 до 200.
let arrayInt = [];
const minValue = 100;
const maxValue = 200;
const count = 10;

for (let i = 0; i < count; i++) {
  arrayInt[i] = getRandomInt(minValue, maxValue);
}

console.log(arrayInt, 'task 1');

/**
 * 
 * @param {number} min 
 * @param {number} max 
 */
function getRandomInt(min, max) {
  min = Math.ceil(+min);
  max = Math.floor(+max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Создать функцию, которая принимает amout - количество создаваемых объектов,
// создает указанное кол-во объектов пользователей с полями email, age, isMale.
// Поле email заполняется последовательно в формате user${i}@gmail.com. i - счетчик цикла.
// Поле age заполняется рандомно от 12 до 50 лет. (Только целые числа).
// Поле isMale заполняется рандомно значениями true или false.
/**
 * 
 * @param {number} amount 
 * @returns {array}
 */
function getUsers(amount = 1) {
  let count = +amount;
  let userArray = [0];
  // console.log(count);
  if (isNaN(count) || count <= 0) return userArray;
  for (let i = 0; i < amount; i++) {

  }

}