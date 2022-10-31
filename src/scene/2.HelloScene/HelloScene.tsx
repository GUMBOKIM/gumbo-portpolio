import React from "react";
import SceneLayout from "../../common/components/sceneLayout/SceneLayout";
import * as S from "./HelloScene.style"
import PlayMario from "./PlayMario";

interface HelloSceneProps {
    moveNextScene: () => void;
}

const HelloScene = ({moveNextScene}: HelloSceneProps) => {
    return (
        <SceneLayout isSceneFullSize>
            <S.GreetingBox>
                Hi! I'm
                <br/>
                Developer Gumbo
            </S.GreetingBox>
            <S.DescriptionBox>
                To be Steady Developer
            </S.DescriptionBox>
            <S.ExplainBox>
                Hit the box,
                <br/>
                go to next screen
            </S.ExplainBox>
            <PlayMario moveNextScene={moveNextScene}/>
        </SceneLayout>
    );
};

export default React.memo(HelloScene);
