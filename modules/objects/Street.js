import { GameObject } from "../GameObject.js"
import { SpriteSheet } from "../render/SpriteSheet.js"
import { canvas } from "../../main.js"

class Street extends GameObject {
    constructor(coords, spriteSheet){
        super(coords, spriteSheet)
        this.speed = 5
    }

    move(){
        this.coords[0] -= this.speed
        if (this.coords[0] < -this.spriteSheet.size[0]) {
            this.coords[0] = canvas.width + 10

        }
    }
}

let spriteSheetStreet = new SpriteSheet(
    "./sprites/street.jpg",
    [778, 200],
    [225, 225],
    [2, 1],
)

export const street = [
    new Street(
        [0, 276], 
        spriteSheetStreet,
    ),
    new Street(
        [778, 276], 
        spriteSheetStreet,
    ),
]

street[1].moveSprite([0, 1])