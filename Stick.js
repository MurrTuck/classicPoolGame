function Stick(){
    this.position = {x: 0, y: 400};
}

Stick.prototype.update = function(){

    this.position = Mouse.position;

    if(Mouse.left.pressed){
        console.log("Left Button is pressed!")
    }
}

Stick.prototype.draw = function (){
    Canvas.drawImage(sprites.stick, this.position);
}