function Cat(){
    this.height = 0;
    this.stomach = [];
}

Cat.prototype.eat = function(bait){
    this.stomach.push(bait);
    this.height += bait.height;
    bait.die();
}

module.exports = Cat;