class Background {
    constructor(image, speed) {
        this.image = image 
        this.speed = speed
        this.bg1 = 0
        this.bg2 = width
    }

    show() {
        image(this.image, this.bg1, 0, width, height)
        image(this.image, this.bg2, 0, width, height)

        this.move()
    }

    move() {
        this.bg1 -= this.speed
        this.bg2 -= this.speed

        // Retorna para o cenário anterior
        this.bg1 < -width ? this.bg1 = width : 0
        this.bg2 < -width ? this.bg2 = width : 0
    }
}

class BackgroundFixed extends Background {
    constructor(image, speed) {
        super(image, speed)
    }
}

class BackgroundBack extends Background {
    constructor(image, speed) {
        super(image, speed)
    }
}