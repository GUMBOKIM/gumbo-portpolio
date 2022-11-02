import styled, {css} from "styled-components";

export const Bubble = styled.div<{ left: number; delay: number; }>`
  position: fixed;
  bottom: -1rem;
  left: ${p => `${p.left}%`};

  width: 1rem;
  height: 1rem;

  background-image: url("./scene/3/background/bubble.png");
  background-repeat: no-repeat;
  background-size: cover;

  animation: bubbleUp 10s ${p => `${p.delay}s`} linear infinite forwards;


  @keyframes bubbleUp {
    0% {
      transform: translate3d(0, 0, 0);
    }
    25% {
      transform: translate3d(-5rem, -25vh, 0);
    }
    50% {
      transform: translate3d(0rem, -50vh, 0);
    }
    75% {
      transform: translate3d(5rem, -75vh, 0);
    }
    100% {
      transform: translate3d(0rem, -110vh, 0);
    }
  };
`

export const Seaweed = styled.div<{ direction: 'LEFT' | 'RIGHT' }>`
  position: fixed;
  ${p => {
    if (p.direction === 'LEFT') {
        return css`
        left: 10vw;
        top: 40%;
      `
    } else {
        return css`
        right: 10vw;
        top: 30%;
      `
    }
}};

  width: 4rem;
  height: 16rem;

  background-image: url("./scene/3/background/seaweed.png");
  background-repeat: no-repeat;
  background-size: cover;
`

export const Ground = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 3.9rem;

  background-image: url("./scene/3/background/seaweed.png");
  background-size: 4rem 16rem;
  background-position-y: -12.1rem;
  background-repeat: repeat;

  z-index: 1;
`


export const Squid = styled.div<{ left: number, delay: number }>`
  position: fixed;
  bottom: 0rem;
  left: ${p => `${p.left}%`};
  height: 4rem;
  aspect-ratio: 1 / 1;

  background-image: url('./scene/3/background/squid.png');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  animation: swimMotion 1.5s infinite steps(2), move 12s ${p => `${p.delay}s`} infinite linear;

  @keyframes swimMotion {
    from {
      background-position-x: 0rem;
    }
    to {
      background-position-x: -8rem;
    }
  };

  @keyframes move {
    0% {
      transform: translate3d(0, 0, 0);
    }
    25% {
      transform: translate3d(10rem, -25vh, 0);
    }
    50% {
      transform: translate3d(0rem, -50vh, 0);

    }
    75% {
      transform: translate3d(-10rem, -75vh, 0);
    }
    100% {
      transform: translate3d(0rem, -100vh, 0);
    }
  }
`;