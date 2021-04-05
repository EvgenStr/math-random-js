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
 * getRandomInt
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Создать функцию, которая принимает amout - количество создаваемых объектов,
// создает указанное кол-во объектов пользователей с полями email, age, isMale.
// Поле email заполняется последовательно в формате user${i}@gmail.com. i - счетчик цикла.
// Поле age заполняется рандомно от 12 до 50 лет. (Только целые числа).
// Поле isMale заполняется рандомно значениями true или false.

function User(email, age, isMale, name) {
  if (!new.target) return new User(...arguments);
  this.email = email;
  this.age = age;
  this.isMale = isMale;
  this.name = name;
}

const minAge = 12;
const maxAge = 50;
const maleNames = ["Jacob", "Michael", "Matthew", "Joshua", "Christopher", "Nicholas", "Andrew", "Joseph", "Daniel", "Tyler", "William", "Brandon", "Ryan"];
const femaleNames = ["Emily", "Hannah", "Madison", "Ashley", "Sarah", "Alexis", "Samantha", "Jessica", "Elizabeth", "Taylor", "Lauren", "Alyssa", "Kayla", "Abigail"];
const users = getUsers(15);
console.log(users, 'task 2 - ®users');

/**
 * getUsers
 * @param {number} amount 
 * @returns {array}
 */
function getUsers(amount = 1) {
  let count = +amount;
  let usersArray = [];
  if (isNaN(count) || count <= 0) return userArray;
  for (let i = 0; i < amount; i++) {
    usersArray[i] = getRandomUser(i);
  }
  return usersArray;
}

/**
 * getRandomUser
 * @param {number} i 
 * @returns {object} new User
 */
function getRandomUser(i) {
  let email = `user${i}@gmail.com`;
  let age = getRandomInt(minAge, maxAge);
  let isMale = Boolean(getRandomInt(0, 1));
  let name = getName(isMale);
  return new User(email, age, isMale, name);
}
/**
 * getName
 * @param {boolen} isMale 
 * @returns {string}
 */
function getName(isMale) {
  if (isMale) {
    return maleNames[getRandomInt(0, maleNames.length - 1)];
  }
  return femaleNames[getRandomInt(0, femaleNames.length - 1)];
  // return isMale ? maleNames[getRandomInt(0, maleNames.length - 1)] : femaleNames[getRandomInt(0, femaleNames.length - 1)];
};

// console.log(getRandomInt(100,200).toFixed(50));
