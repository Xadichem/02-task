let cardNumber = prompt("Номер вашей карты");
let last4 = cardNumber.slice(-4);
let creditCard = cardNumber.slice(0, -4);
let number = creditCard.replace(creditCard, "*").repeat(creditCard.length);
alert(`Последние цифры вашей карты: ${number + last4}`);
