const Cat = require('./cat');
const Mouse = require('./mouse');

const tom = new Cat(10);
const jerry = new Mouse(4);

tom.eat(jerry);
tom.eat(jerry);
console.log(tom);