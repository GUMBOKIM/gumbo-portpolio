import React, {ReactNode, RefObject, useEffect, useRef} from "react";
import SceneLayout from "../../common/components/sceneLayout/SceneLayout";
import * as S from "./InfoScene.style";
import InfoSection from "./info/InfoSection";
import {isDesktop} from "react-device-detect";

const SceneInfo: ReactNode[] = [
    <InfoSection sectionName="1">
        1
    </InfoSection>,
    <InfoSection sectionName="2">
        2
    </InfoSection>,
    <InfoSection sectionName="3">
        3
    </InfoSection>,
    <InfoSection sectionName="4">
        4
    </InfoSection>,
    <InfoSection sectionName="5">
        5
    </InfoSection>,
    <InfoSection sectionName="6">
        6
    </InfoSection>,
    <InfoSection sectionName="7">
        7
    </InfoSection>,
];


const InfoScene = () => {

    const marioRef = useRef<HTMLDivElement>(null);
    const sectionContainerRef = useRef<HTMLDivElement>(null);
    useNavMarioMove(marioRef, sectionContainerRef);
    useSwipeWindow(sectionContainerRef);

    return (
        <SceneLayout isSceneFullSize={false}>
            <S.InfoContainer>
                <S.MarioNavContainer>
                    <S.SwimMario ref={marioRef}/>
                </S.MarioNavContainer>
                <S.InfoSectionContainer ref={sectionContainerRef}>
                    {SceneInfo}
                </S.InfoSectionContainer>
            </S.InfoContainer>
        </SceneLayout>
    )
};

const useNavMarioMove = (marioRef: RefObject<HTMLDivElement>, sectionContainerRef: RefObject<HTMLDivElement>) => {
    useEffect(() => {
        const mario = marioRef.current;
        const sectionContainer = sectionContainerRef.current;
        if (sectionContainer && mario) {
            let beforeScrollLeft = 0;
            const marioSize = mario.clientWidth;
            const scrollEvent = (e: Event) => {
                const {scrollLeft, scrollWidth, clientWidth} = e.target as HTMLDivElement;
                // 마리오 이동
                const locationPercent = Math.floor((scrollLeft / (scrollWidth - clientWidth)) * 100) / 100;
                mario.style.left = `${(clientWidth - marioSize) * locationPercent}px`
                // 마리오 방향
                // 오른쪽
                if (beforeScrollLeft - scrollLeft < 0) {
                    mario.classList.remove('left');
                    mario.classList.add('right');
                    // 왼쪽
                } else {
                    mario.classList.remove('right');
                    mario.classList.add('left');
                }
                beforeScrollLeft = scrollLeft;

            };
            sectionContainer.addEventListener('scroll', scrollEvent);
            return () => sectionContainer.removeEventListener('scroll', scrollEvent);
        }
    }, [])
}

const useSwipeWindow = (sectionContainerRef: RefObject<HTMLDivElement>) => {
    useEffect(() => {
        if (isDesktop) {
            const sectionContainer = sectionContainerRef.current;
            if (sectionContainer) {
                let downX = 0;
                const pointerDownEvent = (e: PointerEvent) => {
                    downX = e.screenX;
                }
                const pointerUpEvent = (e: PointerEvent) => {
                    const upX = e.screenX;
                    sectionContainer.scrollBy({left: downX - upX, behavior: "smooth"});
                }
                window.addEventListener('pointerdown', pointerDownEvent);
                window.addEventListener('pointerup', pointerUpEvent);
                return () => {
                    window.removeEventListener('pointerdown', pointerDownEvent);
                    window.removeEventListener('pointerup', pointerUpEvent);
                }

            }
        }
    })
}


export default InfoScene;