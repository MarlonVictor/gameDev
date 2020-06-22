class Character {
    constructor(image) {
        this.image = image
        this.array = [[0, 0], [220, 0], [440, 0], [660, 0], [0, 270], [220, 270], [440, 270], [660, 270], [0, 540], [220, 540], [440, 540], [660, 540],  [0, 810], [220, 810], [440, 810], [660, 810]]

        this.arratPoint = 0
    }

    show() {
        const characterPositionX = 70
        const characterPositionY = 150
        const characterSizeX = 220
        const characterSizeY = 270

        // Renderiza o personagem
        image(this.image, characterPositionX, height - characterPositionY, 110, 135, this.array[this.arratPoint][0], this.array[this.arratPoint][1], characterSizeX, characterSizeY)

        this.animete()
    }

    animete() {
        this.arratPoint++
 
        // Retorna para o primeiro personagem
        this.arratPoint >= this.array.length - 1 ? this.arratPoint = 0 : 0
    }
}