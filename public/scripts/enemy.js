class Enemy extends Animation {
    constructor(array, image, positionX, variaçãoY, widthX, heightY, sizeX, sizeY, speed, delay) {
        super(array, image, positionX, variaçãoY, widthX, heightY, sizeX, sizeY)

        this.speed = speed
        this.delay = delay
        this.positionX = width + this.delay
    }

    move() {
        this.positionX = this.positionX - this.speed

        if(this.positionX < -this.heightY - this.delay) 
            this.positionX = width
    }
} 