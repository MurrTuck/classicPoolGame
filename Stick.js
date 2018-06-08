function Stick(){
    this.postion = {x: 0, y: 400};
}

Stick.prototype.update = function(){

//testing this section.
    this.postion.x++;

}

Stick.prototype.draw = function (){
    Canvas.drawImage(sprites.stick, this.postion);
}