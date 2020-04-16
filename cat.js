function Cat(height){
    this.height = height;
    this.stomach = [];
    this.alive = true;
}

Cat.prototype.eat = function(bait){
    this.stomach.push(bait);
    this.height += bait.height;
    bait.die();
}

Cat.prototype.die = function(){
    this.alive = false;
}

module.exports = Cat;