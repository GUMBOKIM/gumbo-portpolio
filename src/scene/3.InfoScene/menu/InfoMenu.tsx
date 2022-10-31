import * as S from "./InfoMenu.style";
import React from "react";
import InfoSceneData from "../InfoScene.data";

interface InfoMenuProps {
    marioRef: React.RefObject<HTMLDivElement>;
    navRef: React.RefObject<HTMLDivElement>;
}

const InfoMenu = ({marioRef, navRef}: InfoMenuProps) => {
    return (
        <S.MenuContainer>
            <S.SwimMario ref={marioRef}/>
            <S.MenuItemWrapper ref={navRef}>
                {InfoSceneData.map((scene, index) => (
                    <S.MenuItem key={scene.name}>
                        <S.Mushroom order={index}/>
                        <S.MenuItemName>
                            {scene.name}
                        </S.MenuItemName>
                    </S.MenuItem>
                ))}
            </S.MenuItemWrapper>
        </S.MenuContainer>
    )
}

export default InfoMenu;