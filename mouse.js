function Mouse(height){
    this.height = height;
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