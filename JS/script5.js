// let creditCard = prompt("Введите номер карты");
// number = creditCard.replace(creditCard.slice(0, -4), "**********");
// alert("Номер карты" + number);

let cardNumber = prompt("Номер вашей карты");
let last4 = cardNumber.slice(-4);
let astynkySifra = cardNumber.slice(0, -4);
let zamena = astynkySifra
  .replace(astynkySifra, "*")
  .repeat(astynkySifra.length);
console.log(`Последние цифры вашей карты: ${zamena + last4}`);
