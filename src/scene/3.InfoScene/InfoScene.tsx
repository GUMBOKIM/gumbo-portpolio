import React, {RefObject, useEffect, useRef} from "react";
import SceneLayout from "../../common/components/sceneLayout/SceneLayout";
import * as S from "./InfoScene.style";
import {isDesktop} from "react-device-detect";
import SceneInfos from "./InfoScene.data";
import debounce from "lodash/debounce";
import InfoMenu from "./menu/InfoMenu";

const InfoScene = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const marioRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    usePointerUpMenuItem(navRef, scrollRef);
    useNavMarioMove(marioRef, scrollRef);
    useSwipeWindow(scrollRef);
    useNavMenuMotion(scrollRef, navRef);

    return (
        <SceneLayout isSceneFullSize={false}>
            <S.InfoContainer>
                <InfoMenu marioRef={marioRef} navRef={navRef}/>
                <S.InfoSectionContainer ref={scrollRef}>
                    {SceneInfos.map(sceneInfo => sceneInfo.section)}
                </S.InfoSectionContainer>
            </S.InfoContainer>
        </SceneLayout>
    )
};

// 메뉴 아이템 클릭 or 터치 시, 스크롤 이동
const usePointerUpMenuItem = (navRef: RefObject<HTMLDivElement>, scrollRef: RefObject<HTMLDivElement>) => {
    useEffect(() => {
        const nav = navRef.current;
        const scroll = scrollRef.current;
        if (nav && scroll) {
            const pointerUpEvent = (e: Event) => {
                let target = e.target as HTMLElement;
                if (target.childElementCount === 0 && target.parentElement) {
                    target = target.parentElement;
                }
                nav.childNodes.forEach((element, index) => {
                    if (element === target) {
                        scroll.scrollTo({left: scroll.clientWidth * index, behavior: "smooth"});
                    }
                });
            }
            nav.addEventListener('pointerup', pointerUpEvent);
            return () => nav.removeEventListener('pointerup', pointerUpEvent);
        }
    }, [])
}

// 스크롤바 이동 => 마리오 이동
const useNavMarioMove = (marioRef: RefObject<HTMLDivElement>, scrollRef: RefObject<HTMLDivElement>) => {
    useEffect(() => {
        const mario = marioRef.current;
        const sectionContainer = scrollRef.current;
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

//
const useSwipeWindow = (scrollRef: RefObject<HTMLDivElement>) => {
    useEffect(() => {
        if (isDesktop) {
            const sectionContainer = scrollRef.current;
            if (sectionContainer) {
                let downX = 0;
                const pointerDownEvent = (e: PointerEvent) => {
                    downX = e.screenX;
                }
                const pointerUpEvent = (e: PointerEvent) => {
                    const upX = e.screenX;
                    const diff = downX - upX;
                    if (Math.abs(diff) >= 100) {
                        sectionContainer.scrollBy({left: diff, behavior: "smooth"});
                    }
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

// 네비게이션 메뉴 선택
const useNavMenuMotion = (scrollRef: RefObject<HTMLDivElement>, navRef: RefObject<HTMLDivElement>) => {
    useEffect(() => {
        const scroll = scrollRef.current;
        const navMenu = navRef.current;
        if (scroll && navMenu) {
            const menus = navMenu.children;
            const menuLength = menus.length;
            menus.item(0)?.classList.add('select');

            const scrollEvent = debounce((e: Event) => {
                const target = e.target as HTMLDivElement
                const {scrollLeft, scrollWidth} = target;
                const menuIndex = Math.floor((scrollLeft + scrollWidth * 0.2) / scrollWidth * menuLength);
                for (let i = 0; i < menuLength; i++) {
                    const menu = menus.item(i);
                    if (menu) {
                        if (menuIndex === i) {
                            menu.classList.remove('unselect');
                            menu.classList.add('select');
                        } else {
                            if (menu.classList.contains('select')) {
                                menu.classList.remove('select');
                                menu.classList.add('unselect');
                            }
                        }
                    }
                }
            }, 20)

            scroll.addEventListener('scroll', scrollEvent);
            return () => scroll.removeEventListener('scroll', scrollEvent);
        }
    }, [])
}


export default InfoScene;