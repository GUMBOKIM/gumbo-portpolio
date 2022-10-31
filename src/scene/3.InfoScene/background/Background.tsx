import {Bubble, Ground, Seaweed} from "./Background.style";

const Background = () => {
    const bubbles = new Array(10).fill(null).map(_ => {
        const delay = Math.floor(Math.random() * 10);
        const left = Math.floor(Math.random() * 100);
        return <Bubble delay={delay} left={left}/>
    });


    return (
        <section>
            {bubbles}
            <Seaweed direction='LEFT'/>
            <Seaweed direction='RIGHT'/>
            <Ground/>
        </section>
    )

};


export default Background;