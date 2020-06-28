class Life {
    constructor(max, initial) {
        this.max = max
        this.initial = initial
        this.lifes = this.initial

        this.width = 50
        this.heigth = 50
    }

    show() {
        for(let i = 0; i < this.lifes; i++) {
            const margin = i * 10
            const position = 20 * (i + 1)
            image(heart, position + margin, 20, this.width, this.heigth)
        }
    }

    addLife() {
        if(this.lifes == 2) 
            this.lifes = 3
        else(this.lifes == 1)
            this.lifes = 2
    }

    loseLife() {
        this.lifes--
        hitSong.play()
        character.stayInvisible()
    }
}