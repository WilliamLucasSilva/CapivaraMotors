import { capivara } from "./objects/Player.js"

export function applyEvents(){
    verificarTeclado()
}

export const keyboard = {
    up: false,
    down: false,
    left: false,
    right: false,
}

function verificarTeclado(){
    window.addEventListener("keydown", (e) => {

        if(e.code === "KeyW") keyboard.up = true
        if(e.code === "KeyS") keyboard.down = true
        if(e.code === "KeyA") keyboard.left = true
        if(e.code === "KeyD") keyboard.right = true
    })
    window.addEventListener("keyup", (e) => {

        if(e.code === "KeyW") keyboard.up = false
        if(e.code === "KeyS") keyboard.down = false
        if(e.code === "KeyA") keyboard.left = false
        if(e.code === "KeyD") keyboard.right = false
    })
}