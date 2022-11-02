import {CanvasObject} from "./CanvasSquare";

class Ground extends CanvasObject {
    x: number;
    y: number;
    context: CanvasRenderingContext2D;
    scale: number;
    image: HTMLImageElement;

    constructor(x: number, y: number, scale: number, context: CanvasRenderingContext2D) {
        super();
        this.x = x - (Math.floor(x / (16 * scale)) + 1.5) * 16 * scale;
        this.y = y + 1.5 * scale * 16;
        this.scale = scale;
        this.context = context;
        this.image = new Image();
        this.image.src = './scene/2/groundTile.png'
    }

    draw() {
        const width = this.context.canvas.width;
        const height = this.context.canvas.height;
        let nowX = this.x;
        let nowY = this.y;
        while (nowY <= height) {
            while (nowX <= width) {
                this.context.drawImage(this.image, 0, 0, 16, 16, nowX, nowY, 16 * this.scale, 16 * this.scale);
                nowX += 16 * this.scale;
            }
            nowX = this.x;
            nowY += 16 * this.scale;
        }
    }
}

export default Ground;