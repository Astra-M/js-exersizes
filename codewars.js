// Правильное  решение состоит в том, чтобы возвращать сам объект из каждого вызова.

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// };

// ladder.up().up().down().showStep().down().showStep();

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// ladder.up().up().down().showStep().down().showStep();

// Создайте объект calculator (калькулятор) с тремя методами:
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
//     sum() (суммировать) возвращает сумму сохранённых значений.
//     mul() (умножить) перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   read() {
//     this.a = parseInt(prompt("Введите число 1"));
//     this.b = parseInt(prompt("Введите число 2"));
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());

// function delay(ms) {
//   return (promise = new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   }));
// }

// правильный синтаксис:
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => console.log("выполнилось через 3 секунды"));

// const pow = (x, n) => {
//   let result = x;
//   for (let count = 1; count < n; count++) {
//     result = result * x;
//     // console.log(result);
//   }
//   return result;
// };
// console.log(pow(2, 3));
// ТЕСТ 5
// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
// let room = {
//   number: 23
// };

//[[[[[]]]]] let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   /* ваш код */
// }));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

// Мое решение
// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return value == 'meetup' ? undefined : value;
//   })
// );

// правильное решение
// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key != "" && value == meetup ? undefined : value;
//   })
// );
// Здесь нам также нужно проверить key =="", чтобы исключить первый вызов, где значение value равно meetup.

// alert( JSON.stringify(meetup, function replacer(key, value) {
// alert(`${key}: ${value}`);
//   return (key == 'occupiedBy') ? undefined : value;
// }));

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };
// newUser = JSON.stringify(user);
// console.log(newUser);

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { title, width, height } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// const topSalary = (obj) => {
//   let max = [];
//   // const { John, Pete, Mary } = salaries;
//   for (let [name, salary] of Object.entries(obj)) {
//     // nums.push(user[1]);
// console.log(`${name}, ${salary}`);
//   }
//   // console.log(Object.entries(obj));

//   console.log(nums);
// };

// topSalary(salaries);

// let user = { name: "John", years: 30 };

// let { name, years: age, isAdmin = false } = user;
// // ваш код должен быть с левой стороны:
// // ... = user

// console.log(name);
// console.log(age); // 30
// console.log(isAdmin); // false

// const count = (obj) => Object.keys(obj).length;

// let user = {
//   name: "John",
//   age: 30,
// };
// console.log(' =>',  )
// console.log(count(user));

// const sumSalaries = (obj) => {
//   if (obj.length === 0) {
//     return 0;
//   } else {
//     let sum = 0;
//     for (let value of Object.values(obj)) {
//       sum += value;
//     }
//     return sum;
//   }
// };

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// console.log(sumSalaries(salaries)); // 650

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// console.log(keys); // name, more

// let map = new Map();
// map.set("name", "John");
// let keys = Object.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
// console.log(keys.push("more"));

// function aclean(arr) {
//   const arrLength = arr.map(function (item) {
//     return item.length;
//   });
// const arrByEqual = arrLength.map((item)=> {
//   if
// })
//   return ;

// }

// console.log(
//   aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"])
// ); // "nap,teachers,ear" или "PAN,cheaters,era"

// function unique(arr) {
//   let uniqueValues = new Set();
//   arr.forEach((element) => {
//     uniqueValues.add(element);
//   });
//   return uniqueValues;
// }
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// console.log(
//   unique([
//     "Hare",
//     "Krishna",
//     "Hare",
//     "Krishna",
//     "Krishna",
//     "Krishna",
//     "Hare",
//     "Hare",
//     ":-O",
//   ])
// ); // Hare,Krishna,:-O

// function isAValidMessage(message){
//   // Number('123,4') // NaN
//   const arrFromString = Array.from(message)
//   const newArr = arrFromString.map((item, index, arr) => {
//        return Number(item)
//   })
//   const filteredArr = newArr.map((item, index) => {
//     if (item === 'NaN') {
//       return index
//     }
//     return typeof item

//   })

//   console.log(newArr)
//   console.log(filteredArr)
//   // console.log(typeof Array.from(message)[0] )
// }
// isAValidMessage("3hey5hello2hi")

// In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.
// For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.
// Notes:
//     Messages are composed of only letters and digits
//     Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
//     Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
//     If the message is an empty string, you should return true

// function solution(str, ending){
//   return str.endsWith(ending)
// }
// console.log(solution('abc', 'bc'))
// console.log(solution('abc', 'bc'))
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'bc') // returns false

// function solution(str){
//   return Array.from(str).reverse().join('')
//   }
// console.log(solution('world'))

// const solution = str => str.split('').reverse().join('');
// const solution = s => [...s].reverse().join('')

// const solution (str) => Array.from(str).reverse()
// solution('world')
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
