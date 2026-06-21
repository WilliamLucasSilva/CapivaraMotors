export class Animation{
    constructor(frames, duration, loop = false){
        this.fra0mes = frames
        this.duration = duration
        this.loop = loop

        this.currentFrame = 0
        this.elapsed = 0
        
    }
}