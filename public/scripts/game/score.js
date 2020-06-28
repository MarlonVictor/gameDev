class Score {
    constructor() {
        this.score = 0
    }

    show() {
        textFont(primaryFont)
        textAlign(RIGHT)
        textSize(30)
        fill('#f8f9fa')
        text(parseInt(this.score) + ' m', width - 30, 50)
    }

    addPoint() {
        this.score += 0.1
        point = parseInt(this.score)
        
        if(point == 50 || point == 100 || point == 150) {
            life.addLife()
        }
        return point
    }
}