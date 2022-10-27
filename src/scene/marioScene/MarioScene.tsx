import React from "react";
import * as S from "./MarioScene.style";
import PlayMario from "./playMario/PlayMario";

const MarioScene: React.FC = () => {
  return (
    <S.MarioSceneContainer>
      <PlayMario />
    </S.MarioSceneContainer>
  );
};

export default MarioScene;
