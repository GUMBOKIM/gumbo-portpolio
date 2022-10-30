import React from "react";
import SceneLayout from "../../common/components/sceneLayout/SceneLayout";
import * as S from "./HelloScene.style"
import PlayMario from "./PlayMario";


const HelloScene: React.FC = () => {
    return (
        <SceneLayout isSceneFullSize>
            <S.GreetingBox>
                Hi! I'm
                <br/>
                Developer Gumbo
            </S.GreetingBox>
            <S.ExplainBox>
                Hit the box,
                <br/>
                <br/>
                go to next screen
            </S.ExplainBox>
            <PlayMario/>
        </SceneLayout>
    );
};

export default HelloScene;
