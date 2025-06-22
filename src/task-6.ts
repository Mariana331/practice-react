// Задача 6
// const user = {
//   name: "Alice",
//   address: {
//     city: "Kyiv"
//   }
// };
// console.log(user.address?.city);

// Завдання:
// Створіть тип для user.
// Зробіть address необовязковим.
// Перевірте, що user.address?.city не викликає помилки.

interface User {
  name: string;
  address?: {
    city: string;
  };
}

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

console.log(user.address?.city);
