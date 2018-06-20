function GameWorld(){

    this.whiteBall = new Ball(new Vector2(413, 413));
    this.stick = new Stick(new Vector2(413, 413), this.whiteBall.shoot);
}

GameWorld.prototype.update = function(){

    this.stick.update();
    this.whiteBall.update();

}

GameWorld.prototype.draw = function (){

    Canvas.drawImage(sprites.background, {x:0, y:0});

        this.stick.draw()
        this.whiteBall.draw()
}