function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(40)
    gameSound.loop()
    backgroundFixed = new BackgroundFixed(bgFixed, 0)
    backgroundBack  = new BackgroundBack(bgBack, 3)
    background      = new Background(bgImage, 20)
    life            = new Life(config.config.max, config.config.initial)
    score           = new Score()
    character       = new Character(arrayCharacter, characterImage, 80, 90, 100, 156, 68, 106)
    const enemy     = new Enemy(arrayEnemy, enemyImage, width - 52, 100, 52, 52, 104, 104, 30, 5)
    const troll     = new Enemy(arrayTroll, trollImage, width, 90, 230, 200, 400, 400, 30, 2180)
    const flying    = new Enemy(arrayFlying, flyingImage, width - 52, 300, 100, 75, 62, 62, 50, 4090)

    allEnemies.push(enemy)
    allEnemies.push(troll)
    allEnemies.push(flying)
}

function keyPressed() {
    if(key === 'ArrowUp') {
        character.jump()
    }
}

function draw() {
    backgroundFixed.show()
    backgroundBack.show()
    background.show()

    character.show()
    character.addGravity()

    score.show()
    score.addPoint()
    
    life.show()
    
    allEnemies.forEach(enemy => {
        enemy.show()
        enemy.move()

        // Game-over
        if(character.isColliding(enemy)) {
            life.loseLife()
            
            if(life.lifes == 0) {
                noLoop()
                gameSound.stop()
                gameOverSong.play()
                document.getElementById('game-over').style.opacity = '1'
                const msg = document.getElementById('score')

                point > 40 ? msg.innerHTML = `Você conseguiu fugir por ${point} metros! ` : msg.innerHTML = `Você sobreviveu só ${point} metros kkkkk`
            }
        }
    })
}