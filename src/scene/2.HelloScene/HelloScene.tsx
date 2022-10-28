import React, {useEffect} from "react";
import * as S from "./MarioScene.style";
import PlayMario from "./PlayCanvas";

const HelloScene: React.FC = () => {

    useEffect(() => {
        imagePreload();
    }, [])

    return (
        <S.TouchAreaContainer>
            <PlayMario/>
        </S.TouchAreaContainer>
    );
};

const imagePreload = () => {
    const imageSequentialLoad = (imageArray: string[]) => {
        const preload = (imageArray: string[], index: number | undefined = 0) => {
            if (imageArray && imageArray.length > index) {
                const img = new Image();
                img.onload = () => {
                    preload(imageArray, index + 1);
                }
                img.src = imageArray[index];
            }
        }
        preload(imageArray);
    }
    imageSequentialLoad([
        './scene/2/curtainCanvas.png',
        './scene/2/groundTile.png',
        './scene/2/cloud.png',
        './scene/2/block.png',
        './scene/2/mario.png',
    ])
}

export default HelloScene;
