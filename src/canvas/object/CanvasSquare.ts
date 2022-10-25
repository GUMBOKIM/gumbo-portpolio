export interface Location {
    x: number;
    y: number;
}

export interface Size {
    width: number;
    height: number;
}

interface Coordinate {
    x: number;
    y: number;
}

export type SquareType = 'FIXED' | 'MOVEABLE'

export interface SquareVertex {
    topLeft: Coordinate;
    topRight: Coordinate;
    bottomLeft: Coordinate;
    bottomRight: Coordinate;
}

abstract class CanvasSquare {
    type: SquareType = 'FIXED';
    location: Location;
    size: Size;
    context: CanvasRenderingContext2D;

    protected constructor(location: Location, size: Size, context: CanvasRenderingContext2D) {
        this.location = location;
        this.size = size;
        this.context = context;
    }

    locate(){};
    draw(){};
    effectCollision(){};

    // 충돌 확인
    checkCollision(otherSquares: CanvasSquare[]) {
        otherSquares.forEach(otherSquare => {
            const otherType = otherSquare.type;
            let isCollision = false;
            if(this.type === 'MOVEABLE' && otherType === 'FIXED'){
                // THIS TOP - OTHER BOTTOM
                if(this.location.y <= otherSquare.location.y + otherSquare.size.height) {
                    this.correctCollisionTop(otherSquare.location.y + otherSquare.size.height);
                    isCollision = true;
                }
                // THIS BOTTOM - OTHER TOP
                else if(this.location.y + this.size.height > otherSquare.location.y) {
                    this.correctCollisionBottom(otherSquare.location.y - this.size.height);
                    isCollision = true;
                }
                // THIS RIGHT - OTHER BOTTOM
                else if(this.location.x + this.size.width > otherSquare.location.x) {
                    this.correctCollisionRight(otherSquare.location.x - this.size.width);
                    isCollision = true;
                }
                // THIS LEFT - OTHER RIGHT
                else if(this.location.x  < otherSquare.location.x + otherSquare.size.width) {
                    this.correctCollisionLeft(otherSquare.location.x + otherSquare.size.width);
                    isCollision = true;
                }
            }else if(this.type === 'FIXED' && otherType === 'MOVEABLE'){
                otherSquare.checkCollision([this]);
            }else if(this.type === 'MOVEABLE' && otherType === 'MOVEABLE'){
                // 언젠간 구현
            }
            if(isCollision) {
                this.effectCollision();
                otherSquare.effectCollision();
            }
        })
    }

    // 충돌 시, 위치 보정
    private correctCollisionTop(y: number) {
        if(this.type === 'MOVEABLE') {
            this.location.y = y;
        }
    }
    private correctCollisionBottom(y: number) {
        if(this.type === 'MOVEABLE'){
            this.location.y = y - this.size.height;
        }
    }
    private correctCollisionLeft(x: number){
        if(this.type === 'MOVEABLE'){
            this.location.x = x;
        }
    }
    private correctCollisionRight(x: number){
        if(this.type === 'MOVEABLE') {
            this.location.x = x - this.size.width;
        }
    }

    getVertex(): SquareVertex {
        return {
            topLeft: {x: this.location.x, y: this.location.y},
            topRight: {x: this.location.x + this.size.width, y: this.location.y},
            bottomRight: {x: this.location.x, y: this.location.y + this.size.height},
            bottomLeft: {x: this.location.x + this.size.width, y: this.location.y + this.size.height}
        };
    }
}

export default CanvasSquare;