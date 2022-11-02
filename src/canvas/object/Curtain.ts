import {CanvasObject} from "./CanvasSquare";

class Curtain extends CanvasObject {
    x: number;
    context: CanvasRenderingContext2D;
    scale: number;
    image: HTMLImageElement;

    constructor(scale: number, context: CanvasRenderingContext2D) {
        super();
        this.x = 0
        this.scale = scale;
        this.context = context;
        this.image = new Image();
    }

    draw() {
        this.image.src = './scene/0/curtain.png'
        this.image.onload = () => {
            const height = this.context.canvas.height;
            const width = this.context.canvas.width;
            let nowX = this.x;
            while (nowX <= width) {
                this.context.drawImage(this.image, 0, 0, 16, 305, nowX, height - 305 * this.scale, 16 * this.scale, 305 * this.scale);
                nowX += 16 * this.scale;
            }
        };
    }
}

export default Curtain;