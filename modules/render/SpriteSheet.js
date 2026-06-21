export class SpriteSheet{

    /**
     * 
     * @param {string} image -  image url
     * @param {[width:number, height:number]} canvasSize - size in canvas
     * @param {[wImage:number, hImage:number]} imageSize - image size
     * @param {[lines:number, rows:number]} imageRank - number of lines and rows
     * */
    constructor(image, canvasSize, [wImage, hImage], [lines, rows]){
        this.image = new Image()
        this.image.src = image
        
        this.size = canvasSize

        this.sprite = {
            size: [
                wImage / rows,
                hImage / lines,
            ]
        }

    }

    draw(ctx, [x, y], [xSprite, ySprite]){
        ctx.drawImage(
            this.image,
            xSprite * this.sprite.size[0], ySprite * this.sprite.size[1], // onde começa o corte
            this.sprite.size[0], this.sprite.size[1], //tamanho do sprite
            x, y, // coordenadas no canvas
            this.size[0], this.size[1] // tamanho no canvas
        )
    }
}
