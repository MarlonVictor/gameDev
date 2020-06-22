let bgImage, characterImage, background, gameSound, character

function preload() {
    bgImage = loadImage('./public/assets/images/floresta.png')
    characterImage = loadImage('./public/assets/images/correndo.png')
    gameSound = loadSound('./public/assets/sounds/trilha_jogo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(40)
    gameSound.loop()

    background = new Background(bgImage, 15)
    character = new Character(characterImage)
}

function draw() {
    background.show()
    character.show()
}