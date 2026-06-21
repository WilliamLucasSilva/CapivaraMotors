import { Animation } from "./render/Animation.js"

export class GameObject{
    /**
     * 
     * @param {[x:number, y:number]} coords - the object canvas coordenates
     * @param {import("./modules/render/SpriteSheet.js").SpriteSheet} spriteSheet - sprite sheet object
     */
    constructor(coords, spriteSheet){
        this.coords = coords
        this.spriteSheet = spriteSheet
        this.animation = {}
        this.currentSprite = [0, 0]
    }

    draw(ctx){
        this.spriteSheet.draw(ctx, this.coords, this.currentSprite)
    }

    /**
     * 
     * @param {import("./modules/render/Animation").Animation} animation 
     */
    addAnimation(animation){
        this.animations[animation.name] = animation
    }

    moveSprite(coords){
        this.currentSprite = coords
    }
}