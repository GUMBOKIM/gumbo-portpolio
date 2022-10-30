import React, {ReactNode, useEffect, useRef} from "react";
import SceneLayout from "../../common/components/sceneLayout/SceneLayout";
import * as S from "./InfoScene.style";
import debounce from "lodash/debounce";
import InfoSection from "./info/InfoSection";

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
    const sectionContainerRef = useRef<HTMLDivElement>(null);

    return (
        <SceneLayout isSceneFullSize={false}>
            <S.InfoContainer>
                <S.MarioNavContainer>
                    ASDASDASD
                </S.MarioNavContainer>
                <S.InfoSectionContainer ref={sectionContainerRef}
                                        onScroll={e => {
                                            debounce(() => console.log(Math.floor(e.currentTarget.scrollLeft / e.currentTarget.scrollWidth * 7)), 100);
                                        }}>
                    {SceneInfo}
                </S.InfoSectionContainer>
            </S.InfoContainer>
        </SceneLayout>
    )
};

const useInteractiveEvent = (moveNext: () => void, movePrev: () => void) => {
    useEffect(() => {
        let location = {x: 0, y: 0};
        const pointerDownEvent = (e: PointerEvent) => {
            location = {x: e.clientX, y: e.clientY};
        }

        const pointerUpEvent = (e: PointerEvent) => {
            const {x: beforeX, y: beforeY} = location;
            const {screenX: nowX, screenY: nowY} = e;

            const diffX = beforeX - nowX;
            const diffY = beforeY - nowY;


            if (Math.abs(diffX) > Math.abs(diffY)) {
                // 수평 이동
                diffX > 0 ? moveNext() : movePrev();
            } else {
                // 수직 이동
                diffY > 0 ? moveNext() : movePrev();
            }
        }

        const wheelEvent = debounce((e: WheelEvent) => {
            e.deltaY > 0 ? moveNext() : movePrev();
        }, 100);

        window.addEventListener('pointerdown', pointerDownEvent);
        window.addEventListener('pointerup', pointerUpEvent);
        window.addEventListener('wheel', wheelEvent);

        return () => {
            window.removeEventListener('pointerdown', pointerDownEvent);
            window.removeEventListener('pointerup', pointerUpEvent);
            window.removeEventListener('wheel', wheelEvent);
        }

    }, [])
}


export default InfoScene;