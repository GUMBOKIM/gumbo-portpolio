import React, {useEffect} from 'react';
import CurtainScene from "./scene/0.CurtainScene/CurtainScene";
import Preload from "./optimization/ResourcePreload";
import StartScene from "./scene/1.StartScene/StartScene";
import HelloScene from "./scene/2.HelloScene/HelloScene";

const App: React.FC = () => {

    useEffect(() => {
        Preload();
    }, [])

    return (
        <>
            <CurtainScene/>
            <StartScene/>
            <HelloScene/>
        </>
    );
}

export default App;
