import React, {useEffect} from 'react';
import Preload from "./optimization/Preload";
import InfoScene from "./scene/3.InfoScene/InfoScene";

const App: React.FC = () => {

    useEffect(() => {

        Preload();
    }, [])

    return (
        <>
            <InfoScene/>
        </>
    );
}

export default App;
