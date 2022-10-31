import React from "react";
import audioPlayer from "../../optimization/AudioPlayer";
import SceneLayout from "../../common/components/sceneLayout/SceneLayout";
import * as S from "./StartScene.style"

interface StartSceneProps {
    moveNextScene: () => void;
}

const StartScene = ({moveNextScene}: StartSceneProps) => {
    const handleClickStart = (e: React.PointerEvent<HTMLButtonElement>) => {
        moveNextScene();
        audioPlayer.play('overworld');
        e.currentTarget.disabled = true;
    }

    return (
        <SceneLayout isSceneFullSize>
            <S.StartButton onPointerUp={handleClickStart}>Start</S.StartButton>
        </SceneLayout>
    )
}

export default React.memo(StartScene);