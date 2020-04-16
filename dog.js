function Dog(height){
    this.height = height;
    this.stomuch = [];
    this.alive = true;
}

Dog.prototype.eat = function(food){
    this.stomuch.push(food);
    this.height += food.height;
    food.die();
}

module.exports = Dog;
