import {CanvasObject} from "./CanvasSquare";

class Ground extends CanvasObject {
    x: number;
    y: number;
    context: CanvasRenderingContext2D;
    scale: number;
    image: HTMLImageElement;

    constructor(x: number, y: number, scale: number, context: CanvasRenderingContext2D) {
        super();
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.context = context;
        this.image = new Image();
        this.image.src = './scene/2/cloud.png'
    }

    draw() {
        this.context.drawImage(this.image, 0, 0, 64, 32, this.x, this.y, 16 * this.scale * 4, 16 * this.scale * 2);
    }
}

export default Ground;