class Animation {
    constructor(array, image, positionX, variaçãoY, widthX, heightY, sizeX, sizeY) {
        this.array = array
        this.image = image
        this.widthX = widthX
        this.heightY = heightY 
        this.variaçãoY = variaçãoY
        this.positionX = positionX
        this.positionY = height - this.heightY - this.variaçãoY
        this.sizeX = sizeX
        this.sizeY = sizeY

        this.arratPoint = 0
    }

    show() {
        // Renderiza o personagem
        image(this.image, this.positionX, this.positionY, this.widthX, this.heightY, this.array[this.arratPoint][0], this.array[this.arratPoint][1], this.sizeX, this.sizeY)

        this.animate()
    }

    animate() {
        this.arratPoint++
 
        // Retorna para o primeiro personagem
        if(this.arratPoint >= this.array.length - 1)
            this.arratPoint = 0
    }
}