const arrayCharacter = [[0, 0],[220, 0],[440, 0],[660, 0],[0, 270],[220, 270],[440, 270],[660, 270],[0, 540],[220, 540],[440, 540],[660, 540],[0, 810],[220, 810],[440, 810],[660, 810]]

const arrayEnemy = [[0, 0],[104, 0],[208, 0],[312, 0],[0, 104],[104, 104],[208, 104],[312, 104],[0, 208],[104, 208],[208, 208],[312, 208],[0, 312],[104, 312],[208, 312],[312, 312],[0, 418],[104, 418],[208, 418],[312, 418],[0, 522],[104, 522],[208, 522],[312, 522],[0, 626],[104, 626],[208, 626],[312, 626]]

const arrayTroll = [[0,0],[400,0],[800,0],[1200,0],[1600,0],[0,400],[400,400],[800,400],[1200, 400],[1600, 400],[0,800],[400, 800],[800, 800],[1200, 800],[1600, 800],[0, 1200],[400, 1200],[800, 1200],[1200, 1200],[1600, 1200], [0, 1600],[400, 1600],[800, 1600],[1200, 1600],[1600, 1600],[0, 2000],[400, 2000],[800, 2000]]

const arrayFlying = [[0,0],[200, 0],[400, 0],[0, 150],[200, 150],[400, 150],[0, 300],[200, 300],[400, 300],[0, 450],[200, 450],[400, 450],[0, 600],[200, 600],[400, 600],[0, 750]]

const allEnemies = []


function preload() {
    bgFixed = loadImage('./public/assets/images/background1.jpg')
    bgBack = loadImage('./public/assets/images/background2.png')
    bgImage = loadImage('./public/assets/images/background3.png')
    characterImage = loadImage('./public/assets/images/correndo.png')
    enemyImage = loadImage('./public/assets/images/gotinha.png')
    trollImage = loadImage('./public/assets/images/troll.png')
    flyingImage = loadImage('./public/assets/images/gotinha-voadora.png')
    gameSound = loadSound('./public/assets/sounds/trilha_jogo.mp3')
    jumpSong = loadSound('./public/assets/sounds/somPulo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(40)
    gameSound.loop()
    backgroundFixed = new BackgroundFixed(bgFixed, 0)
    backgroundBack  = new BackgroundBack(bgBack, 3)
    background      = new Background(bgImage, 15)
    score = new Score()
    character       = new Character(arrayCharacter, characterImage, 50, 30, 110, 135, 220, 270)
    const enemy     = new Enemy(arrayEnemy, enemyImage, width - 52, 30, 52, 52, 104, 104, 30, 900)
    const troll     = new Enemy(arrayTroll, trollImage, width, 0, 200, 200, 400, 400, 30, 1550)
    const flying    = new Enemy(arrayFlying, flyingImage, width - 52, 200, 100, 75, 200, 150, 35, 3000)

    allEnemies.push(enemy)
    allEnemies.push(troll)
    allEnemies.push(flying)
}

function keyPressed() {
    if(key === 'ArrowUp') {
        character.jump()
    }
}

function mouseClicked() {
    character.jump()
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