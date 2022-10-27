import React, {useCallback, useEffect, useState} from "react";
import * as S from "./MarioScene.style";
import PlayMario from "./PlayCanvas";
import CurtainCanvas, {CurtainStatus} from "./CurtainCanvas";

const MarioScene: React.FC = () => {
    const {curtainStatus, openCurtain, closeCurtain} = useCurtainControl();

    useEffect(() => {
        imagePreload();
    }, [])

    return (
        <S.TouchAreaContainer>
            <CurtainCanvas curtainStatus={curtainStatus} openCurtain={openCurtain}/>
            <PlayMario closeCurtain={closeCurtain}/>
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
        './mario/image/curtainCanvas.png',
        './mario/image/groundTile.png',
        './mario/image/cloud.png',
        './mario/image/block.png',
        './mario/image/mario.png',
    ])
}

const useCurtainControl = () => {
    const [curtainStatus, setCurtainStatus] = useState<CurtainStatus>('INIT');
    const openCurtain = useCallback(() => setCurtainStatus("UP"), []);
    const closeCurtain = useCallback(() => setCurtainStatus("DOWN"), []);
    return {curtainStatus, openCurtain, closeCurtain};
}

export default MarioScene;
