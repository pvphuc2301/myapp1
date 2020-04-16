function Mouse(){
    this.height = 0;
    this.stomuch = [];
    this.alive = true;
}

Mouse.prototype.eat = function(food){
    this.stomuch.push(food);
}

Mouse.prototype.die = function(){
    this.alive = false;
}

module.exports = Mouse;