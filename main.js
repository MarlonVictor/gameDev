let bgImage, characterImage, enemyImage
let background, gameSound, jumpSong, character, enemy

const arrayCharacter = [[0, 0],[220, 0],[440, 0],[660, 0],[0, 270],[220, 270],[440, 270],[660, 270],[0, 540],[220, 540],[440, 540],[660, 540],[0, 810],[220, 810],[440, 810],[660, 810]]

const arrayEnemy = [[0, 0],[104, 0],[208, 0],[312, 0],[0, 104],[104, 104],[208, 104],[312, 104],[0, 208],[104, 208],[208, 208],[312, 208],[0, 312],[104, 312],[208, 312],[312, 312],[0, 418],[104, 418],[208, 418],[312, 418],[0, 522],[104, 522],[208, 522],[312, 522],[0, 626],[104, 626],[208, 626],[312, 626]]


function preload() {
    bgImage = loadImage('./public/assets/images/floresta.png')
    characterImage = loadImage('./public/assets/images/correndo.png')
    enemyImage = loadImage('./public/assets/images/gotinha.png')
    gameSound = loadSound('./public/assets/sounds/trilha_jogo.mp3')
    jumpSong = loadSound('./public/assets/sounds/somPulo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(40)
    gameSound.loop()

    background = new Background(bgImage, 15)
    character  = new Character(arrayCharacter, characterImage, 50, 110, 135, 220, 270)
    enemy      = new Enemy(arrayEnemy, enemyImage, width - 52, 52, 52, 104, 104)
}

function keyPressed() {
    if(key === 'ArrowUp') {
        character.jump()
    }
}

function draw() {
    background.show()

    character.show()
    character.addGravity()

    enemy.show()
    enemy.move()

    // Game-over
    if(character.isColliding(enemy)) {
        noLoop()
        gameSound.stop()
    }
}