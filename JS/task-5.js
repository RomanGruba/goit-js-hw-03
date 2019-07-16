// Задание 5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа. Возвращает массив значений определенного поля prop из каждого объекта в массиве.

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

//==========================================================================================================================

// function getAllPropValues(arr, prop) {
//   let propArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     let keys = Object.keys(arr[i]);
//     for (const key of keys) {
//       if (key === prop) {
//         propArr.push(arr[i][key]);
//       }
//     }
//   }
//   return propArr;
// }


function getAllPropValues(arr, prop) {
  const propArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    propArr.push(arr[i][prop]);
  }
  return propArr;
}

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []
