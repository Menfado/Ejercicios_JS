let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000}

globalBasePrice = 2500;
car1.finalPrice = car1.base + globalBasePrice;
car2.finalPrice = car2.base + globalBasePrice;
console.log (car1.finalPrice + car2.finalPrice);
