import {Bubble, Ground, Seaweed, Squid} from "./Background.style";

const Background = () => {
    const bubbles = new Array(10).fill(null).map((_, index) => {
        const delay = Math.floor(Math.random() * 10);
        const left = Math.floor(Math.random() * 100);
        return <Bubble key={index} delay={delay} left={left}/>
    });


    return (
        <section>
            {bubbles}
            <Seaweed direction='LEFT'/>
            <Seaweed direction='RIGHT'/>
            <Ground/>
            <Squid left={20} delay={0}/>
            <Squid left={80} delay={8}/>
        </section>
    )

};


export default Background;