// 1) Создать функцию isWorkingAgePerson, которая будет проверять, трудоспособного ли человек возраста (от 16 до 65). Функция принимает в качестве параметра возраст человека и возвращает значение булевского типа.
// Ожидаемый вывод:
// isWorkingAgePerson(20); // true
// isWorkingAgePerson(4); // false
// isWorkingAgePerson(88); // false

const personAge = 70;
function isWorkingAgePerson(personAge) {
  return personAge >= 16 && personAge <= 65;
}
console.log(isWorkingAgePerson(personAge));

// 1) *Функция, которая запрашивает число и проверяет, простое ли оно (простое число делиться без остатка на себя и на единицу).

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log("2", isPrime(2));
console.log("3", isPrime(3));
console.log("4", isPrime(4));
console.log("5", isPrime(5));
console.log("6", isPrime(6));
console.log("7", isPrime(7));

// 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе нацело:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

function checkMultiplicity(x, y) {
  if (x % y === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("25 делится на 5 без остатка", checkMultiplicity(25, 5));
console.log("15 делится на 3 без остатка", checkMultiplicity(15, 3));
console.log("15 делится на 5 без остатка", checkMultiplicity(15, 5));
console.log("15 не делится на 4 без остатка", checkMultiplicity(15, 4));

// 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true, если треугольник возможен, и false, если нет.

/**
 * Проверка возможности существования треугольника
 *
 * @param {number} a - первая сторона
 * @param {number} b - вторая сторона
 * @param {number} c - третья сторона
 * @returns {boolean}
 */

function checkTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}

console.log("Треугольник существует!", checkTriangle(10, 11, 9)); // true
console.log("Треугольник не существует!", checkTriangle(12, 13, 26)); // false
console.log("Треугольник существует!", checkTriangle(10, 15, 20)); // true

// 4) Написать функции расчета площадей (или поверхности) следующих фигур/тел: треугольника, прямоугольника (или конуса, параллелепипеда) в зависимости от переданных размеров фигур. Функция должна возвращать вычисленное значение.

/**
 * Вычисляем площадь треугольника
 *
 * @param {number} a - длина основания
 * @param {number} h - высота треугольника
 * @returns {number}
 */
const triangleArea = function (a, h) {
  return (a * h) / 2;
};

console.log(triangleArea(15, 10), "см2");

/**
 * Вычисляем площадь прямоугольника
 *
 * @param {number} a - сторона прямоугольника
 * @param {number} b - сторона прямоугольника
 * @returns {number}
 */
const rectangleArea = function (a, b) {
  return a * b;
};

console.log(rectangleArea(10, 15), "см2");
