import React, {useState} from "react";
import * as S from './MusicButton.style'
import AudioPlayer from "../../../optimization/AudioPlayer";

const MusicButton = () => {
    const [isPlay, setIsPlay] = useState(true);

    const handleClickButton = () => {
        if (isPlay) {
            setIsPlay(false);
            AudioPlayer.stop('overworld');
        } else {
            setIsPlay(true);
            AudioPlayer.play('overworld');
        }
    };

    return (
        <S.MusicButton isPlay={isPlay} onClick={handleClickButton}>
            {isPlay ? 'bgm off' : 'bgm on'}
        </S.MusicButton>
    )
}

export default React.memo(MusicButton);