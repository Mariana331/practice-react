// Задача 10
// У вас є масив імен користувачів:
// const users = ["alice", "bob", "charlie"];
// Завдання:
// 1. Створіть типізовану функцію toUserObjects, яка приймає масив рядків (імен користувачів).
// 2. Усередині функції переберіть масив імен та для кожного імені створи обєкт з такими властивостями:
// id — порядковий номер (починаючи з 1),
// name — саме імя користувача (рядок з масиву).
// 3. Функція повинна повертати масив отриманих обєктів.
// 4. Переконайтеся, що результат функції має правильну типізацію, а TypeScript не видає помилок.
// Приклад виклику:

// toUserObjects(users);
// toUserObjects(users);
// // Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]

type UserObject = {
  id: number;
  name: string;
};

function toUserObjects(users: string[]): UserObject[] {
  return users.map((name, index) => ({
    id: index + 1,
    name: name,
  }));
}

const users: string[] = ["alice", "bob", "charlie"];
const result = toUserObjects(users);
console.log(result);
