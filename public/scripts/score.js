class Score {
    constructor() {
        this.score = 0
    }

    show() {
        textAlign(RIGHT)
        textSize(30)
        fill('#f8f9fa')
        text(parseInt(this.score), width - 30, 50)
    }

    addPoint() {
        this.score += 0.2
        point = parseInt(this.score)
        
        return point
    }
}