class Character extends Animation {
    constructor(array, image, positionX, widthX, heightY, sizeX, sizeY) {
        super(array, image, positionX, widthX, heightY, sizeX, sizeY)

        this.yBase = height - this.heightY
        this.positionY = this.yBase
        this.gravity = 4
        this.jumpSpeed = 0
        this.qtdJump = 2
    }

    jump() {
        if(this.qtdJump > 0) {
            this.jumpSpeed = -30
            this.qtdJump--
            jumpSong.play()
        }
    }

    addGravity() {
        this.positionY = this.positionY + this.jumpSpeed
        this.jumpSpeed = this.jumpSpeed + this.gravity

        if(this.positionY > this.yBase) {
            this.positionY = this.yBase
            this.qtdJump = 2            
        }
    }

    isColliding(enemy) {
        const precision = .7
        const colliding = collideRectRect(
            this.positionX, 
            this.positionY, 
            this.widthX * precision, 
            this.heightY * precision, 
            enemy.positionX, 
            enemy.positionY, 
            enemy.widthX * precision, 
            enemy.heightY * precision
        )
        
        return colliding
    }
}