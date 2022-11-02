import * as S from "./SceneLayout.style"
import React, {ReactNode} from "react";
import {isMobile} from "react-device-detect";


interface LayoutProps {
    isSceneFullSize: boolean;
    isExistPrevButton?: boolean;
    isExistNextButton?: boolean;
    prevButtonEvent?: () => void;
    nextButtonEvent?: () => void;
    children?: ReactNode;
}


const SceneLayout = (props: LayoutProps) => {
    const {
        isSceneFullSize,
        isExistPrevButton,
        isExistNextButton,
        prevButtonEvent,
        nextButtonEvent,
        children
    } = props;

    const handlePrevButton = (e: React.PointerEvent<HTMLButtonElement>) => {
        if (prevButtonEvent) prevButtonEvent();
        e.currentTarget.disabled = true;
    }

    const handleNextButton = (e: React.PointerEvent<HTMLButtonElement>) => {
        if (nextButtonEvent) nextButtonEvent();
        e.currentTarget.disabled = true;
    }


    return (
        <S.SceneContainer isFullSize={isMobile || isSceneFullSize}>
            {children}
            {isExistPrevButton && <S.PrevButton onPointerUp={handlePrevButton}>{'<'}</S.PrevButton>}
            {isExistNextButton && <S.NextButton onPointerUp={handleNextButton}>{'>'}</S.NextButton>}
        </S.SceneContainer>
    )

}

export default SceneLayout;