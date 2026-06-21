import { GameObject } from "../GameObject.js"
import { SpriteSheet } from "../render/SpriteSheet.js"
import { keyboard } from "../eventos.js"

class PLayer extends GameObject{
    constructor(coords, spriteSheet){
        super(coords, spriteSheet)
        this.speed = 5
    }
    
    move(){

        if(keyboard.up){
            this.coords[1] -= this.speed
        }
        if(keyboard.down){
            this.coords[1] += this.speed
        }
        if(keyboard.left){
            this.coords[0] -= this.speed
        }
        if(keyboard.right){
            this.coords[0] += this.speed
        }


    }
}

export const capivara = new PLayer([400, 300],
    new SpriteSheet(
        "./sprites/capivara.png",
        [64, 64],
        [192, 256],
        [4, 3]
    )
)