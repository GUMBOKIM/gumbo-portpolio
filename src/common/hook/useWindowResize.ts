import debounce from "lodash/debounce";
import {useEffect, useState} from "react";

const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = debounce(() => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        }, 1000);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return windowSize;
};

export default useWindowResize;
