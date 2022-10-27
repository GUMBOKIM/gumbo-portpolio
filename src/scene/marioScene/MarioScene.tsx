import React, {useEffect} from "react";
import * as S from "./MarioScene.style";
import HideCurtain from "./hideCurtain/HideCurtain";

const MarioScene: React.FC = () => {
    useEffect(() => {
        imagePreload();
    }, [])

    return (
        <S.MarioSceneContainer>
            <HideCurtain/>
            {/*<PlayMario/>*/}
        </S.MarioSceneContainer>
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
        './mario/image/curtain.png',
        './mario/image/groundTile.png',
        './mario/image/cloud.png',
        './mario/image/block.png',
        './mario/image/mario.png',
    ])
}


export default MarioScene;
