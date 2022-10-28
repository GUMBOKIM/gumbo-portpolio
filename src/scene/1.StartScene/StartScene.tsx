import SceneLayout from "../../common/components/SceneLayout";
import styled from "styled-components";
import {RetroButton} from "../../common/components/8BitComponent";
import React from "react";

const StartButton = styled(RetroButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 0.8rem;
  width: 6em;
  height: 2em;

  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StartScene = () => {
    const handleClickStart = (e: React.PointerEvent<HTMLButtonElement>) => e.currentTarget.disabled = true;

    return (
        <SceneLayout isSceneFullSize>
            <StartButton onPointerUp={handleClickStart}>Start</StartButton>
        </SceneLayout>
    )
}

export default StartScene;