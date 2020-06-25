function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(40)
    gameSound.loop()
    backgroundFixed = new BackgroundFixed(bgFixed, 0)
    backgroundBack  = new BackgroundBack(bgBack, 3)
    background      = new Background(bgImage, 20)
    score           = new Score()
    character       = new Character(arrayCharacter, characterImage, 80, 90, 100, 156, 68, 106)
    const enemy     = new Enemy(arrayEnemy, enemyImage, width - 52, 100, 52, 52, 104, 104, 30, 1)
    const troll     = new Enemy(arrayTroll, trollImage, width, 90, 230, 200, 400, 400, 30, 2180)
    const flying    = new Enemy(arrayFlying, flyingImage, width - 52, 300, 100, 75, 200, 150, 50, 3990)

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

    allEnemies.forEach(enemy => {
        enemy.show()
        enemy.move()

        // Game-over
        if(character.isColliding(enemy)) {
            noLoop()
            gameSound.stop()
            document.getElementById('game-over').style.opacity = '1'
            const msg = document.getElementById('score')

            point > 50 ? msg.innerHTML = `Você fez ${point} pontos! ` : msg.innerHTML = `Você fez só ${point} pontos kkkkk`
        }
    })
}