const BALL_ORIGIN = new Vector2(25, 25);

function Ball(position){
    this.position = position;
}

Ball.prototype.update = function () {

}

Ball.prototype.draw = function() {
    Canvas.drawImage(sprites.whiteBall, this.position, BALL_ORIGIN);
}

Ball.prototype.shoot = function(power, rotation){

    console.log("Shoot")
}
