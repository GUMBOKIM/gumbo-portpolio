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

export interface SquareVertexInfo {
    leftX: number;
    rightX: number;
    topY: number;
    bottomY: number;
    topLeft: Coordinate;
    topRight: Coordinate;
    bottomLeft: Coordinate;
    bottomRight: Coordinate;
}

export class CanvasObject {
    draw() {
    };
}

class CanvasSquare extends CanvasObject {
    type: SquareType = 'FIXED';
    location: Location;
    size: Size;
    context: CanvasRenderingContext2D;

    constructor(location: Location, size: Size, context: CanvasRenderingContext2D) {
        super();
        this.location = {x: location.x - size.width / 2, y: location.y + size.height / 2};
        this.size = size;
        this.context = context;
    }

    locate() {
    };

    effectCollision() {
    };

    // 충돌 확인
    checkCollision(canvasSquares: CanvasSquare[]) {
        canvasSquares.forEach(canvasSquare => {
            const otherType = canvasSquare.type;
            let isCollision = false;
            const {topY: thisTopY, leftX: thisLeftX} = this.getVertexInfo();
            const {
                topY: canvasTopY,
                bottomY: canvasBottomY,
                rightX: canvasRightX,
                leftX: canvasLeftX
            } = canvasSquare.getVertexInfo();
            if (this.type === 'MOVEABLE' && otherType === 'FIXED') {
                if (this.isCollisionTop(canvasSquare)) {
                    this.correctLocation(thisLeftX, canvasBottomY);
                    this.collideTop();
                    canvasSquare.collideBottom();
                    isCollision = true;
                }
                if (this.isCollisionBottom(canvasSquare)) {
                    this.correctLocation(thisLeftX, canvasTopY - this.size.height);
                    this.collideBottom();
                    canvasSquare.collideTop();
                    isCollision = true;
                }
                // TODO: 왼쪽 오른쪽 충돌 부분 수정 필요 -> 비정상적으로 인식됨
                if (this.isCollisionRight(canvasSquare)) {
                    this.correctLocation(canvasLeftX - this.size.width, thisTopY);
                    this.collideRight();
                    canvasSquare.collideLeft();
                    isCollision = true;
                }
                if (this.isCollisionLeft(canvasSquare)) {
                    this.correctLocation(canvasRightX, thisTopY);
                    this.collideLeft();
                    canvasSquare.collideRight();
                    isCollision = true;
                }
            } else if (this.type === 'FIXED' && otherType === 'MOVEABLE') {
                canvasSquare.checkCollision([this]);
            } else if (this.type === 'MOVEABLE' && otherType === 'MOVEABLE') {
                // 언젠간 구현
            }
            if (isCollision) {
                this.effectCollision();
                canvasSquare.effectCollision();
            }
        })
    }

    // THIS TOP - OTHER BOTTOM
    isCollisionTop(canvasSquare: CanvasSquare): boolean {
        const {topY: thisTopY, bottomY: thisBottomY, rightX: thisRightX, leftX: thisLeftX} = this.getVertexInfo();
        const {
            topY: canvasTopY,
            bottomY: canvasBottomY,
            rightX: canvasRightX,
            leftX: canvasLeftX
        } = canvasSquare.getVertexInfo();
        return thisBottomY > canvasTopY && thisTopY < canvasBottomY && thisRightX > canvasLeftX && thisLeftX < canvasRightX;
    }

    // THIS BOTTOM - OTHER TOP
    isCollisionBottom(canvasSquare: CanvasSquare): boolean {
        const {topY: thisTopY, bottomY: thisBottomY, rightX: thisRightX, leftX: thisLeftX} = this.getVertexInfo();
        const {
            topY: canvasTopY,
            bottomY: canvasBottomY,
            rightX: canvasRightX,
            leftX: canvasLeftX
        } = canvasSquare.getVertexInfo();
        return thisTopY < canvasBottomY && thisBottomY > canvasTopY && thisBottomY > canvasTopY && thisRightX > canvasLeftX && thisLeftX < canvasRightX;
    }

    // THIS LEFT - OTHER RIGHT
    isCollisionLeft(canvasSquare: CanvasSquare): boolean {
        const {topY: thisTopY, bottomY: thisBottomY, rightX: thisRightX, leftX: thisLeftX} = this.getVertexInfo();
        const {
            topY: canvasTopY,
            bottomY: canvasBottomY,
            rightX: canvasRightX,
            leftX: canvasLeftX
        } = canvasSquare.getVertexInfo();
        return thisRightX > canvasLeftX && thisLeftX < canvasRightX && thisBottomY > canvasTopY && thisTopY < canvasBottomY;
    }

    // THIS RIGHT - OTHER LEFT
    isCollisionRight(canvasSquare: CanvasSquare): boolean {
        const {topY: thisTopY, bottomY: thisBottomY, rightX: thisRightX, leftX: thisLeftX} = this.getVertexInfo();
        const {
            topY: canvasTopY,
            bottomY: canvasBottomY,
            rightX: canvasRightX,
            leftX: canvasLeftX
        } = canvasSquare.getVertexInfo();
        return thisLeftX < canvasRightX && thisRightX > canvasLeftX && thisBottomY > canvasTopY && thisTopY < canvasBottomY;
    }

    collideTop() {
    };

    collideBottom() {
    };

    collideLeft() {
    };

    collideRight() {
    };

    getVertexInfo(): SquareVertexInfo {
        const leftX = this.location.x;
        const rightX = this.location.x + this.size.width;
        const topY = this.location.y;
        const bottomY = this.location.y + this.size.height;
        return {
            leftX, rightX, topY, bottomY,
            topLeft: {x: leftX, y: topY}, topRight: {x: rightX, y: topY},
            bottomLeft: {x: leftX, y: bottomY}, bottomRight: {x: rightX, y: bottomY}
        };
    }

    // 충돌 시, 위치 보정
    private correctLocation(x: number, y: number) {
        if (this.type === 'MOVEABLE') {
            this.location.x = x;
            this.location.y = y;
        }
    }
}

export default CanvasSquare;