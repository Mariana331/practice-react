// Задача 2
// Опис: Є функція, яка приймає суму (число) та тип валюти.
// function convertCurrency({amount, currency}) {
//   console.log(`Converting ${amount} to ${currency}`);
// }

// Завдання:
// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.

type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrency {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrency): string {
  return `Converting ${amount} to ${currency}`;
}
