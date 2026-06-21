import { canvas, ctx } from "../../main.js";

export class Scene{
    constructor(objects = []){
        this.objects = objects;
    }

    add(object){
        this.objects.push(object)
    }

    update(deltaTime){
        for(const object of this.objects){
            object.update?.(deltaTime)
        }
    }

    render(ctx){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for(const object of this.objects){
            object.draw(ctx)
        }
    }
}

export const scene = new Scene()