import { applyEvents } from "./modules/eventos.js";
import { capivara } from "./modules/objects/Player.js";
import { scene } from "./modules/render/render.js";
import { street } from "./modules/objects/Street.js";

export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");


function gameSetup(){
    applyEvents()
    scene.add(street[0])
    scene.add(street[1])
    scene.add(capivara)

    gameLoop()
}

let lastTime = 0
function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp

    scene.update(deltaTime)
    scene.render(ctx)
    
    street[0].move()
    street[1].move()
    capivara.move()

    requestAnimationFrame(gameLoop);
}

document.addEventListener("moveCima", () => {

})

gameSetup();