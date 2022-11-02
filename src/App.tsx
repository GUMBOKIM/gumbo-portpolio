import React, {useState} from 'react';
import usePreload from "./optimization/Preload";
import HelloScene from "./scene/2.HelloScene/HelloScene";
import StartScene from "./scene/1.StartScene/StartScene";
import InfoScene from "./scene/3.InfoScene/InfoScene";
import CurtainScene from "./scene/0.CurtainScene/CurtainScene";
import MusicButton from "./common/components/musicButton/MusicButton";

const App: React.FC = () => {
    const [sceneNumber, setSceneNumber] = useState(0);
    const [isExistCurtain, setIsExistCurtain] = useState(false);
    usePreload();

    const nextScene = () => {
        setIsExistCurtain(true);
        setTimeout(() => setIsExistCurtain(false), 3000);
        setTimeout(() => setSceneNumber(now => now + 1), 1000);
    };

    let nowScene;
    switch (sceneNumber) {
        case 0:
            nowScene = <StartScene moveNextScene={nextScene}/>;
            break;
        case 1:
            nowScene = <HelloScene moveNextScene={nextScene}/>;
            break;
        case 2:
            nowScene = <InfoScene/>;
            break;
        default:
            nowScene = null;
    }

    return (
        <>
            {nowScene}
            <CurtainScene isExistCurtain={isExistCurtain}/>
            {sceneNumber !== 0 && <MusicButton/>}
        </>
    )
}

export default App;
