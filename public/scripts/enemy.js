class Enemy extends Animation {
    constructor(array, image, positionX, widthX, heightY, sizeX, sizeY) {
        super(array, image, positionX, widthX, heightY, sizeX, sizeY)

        this.velocidade = 15
    }

    move() {
        this.positionX = this.positionX - this.velocidade

        if(this.positionX < -this.heightY) 
            this.positionX = width
    }
}