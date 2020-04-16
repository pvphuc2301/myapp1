const Cat = require('./cat');
const Mouse = require('./mouse');

const tom = new Cat(10);
const jerry = new Mouse(4);

console.log(tom);
console.log(jerry);

tom.eat(jerry);
console.log(tom);
console.log(jerry);