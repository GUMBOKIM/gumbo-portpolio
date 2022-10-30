import styled from "styled-components";
import {Retro0StepBox} from "../../common/components/8BitComponent";

export const InfoContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const MarioNavContainer = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  margin-bottom: 0.5rem;
  background-color: blue;
`

export const SwimMario = styled.div`
  position: absolute;
  top: 50%;

  height: 2rem;
  aspect-ratio: 1 / 1;


  background-image: url('./scene/2/mario.png');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  &, &.right {
    animation: swimUpDown 1s infinite steps(5), rightSwim 1s infinite steps(5);
  }

  &.left {
    animation: leftSwim 1s infinite steps(5), swimUpDown 1s linear infinite !important;
  }


  @keyframes leftSwim {
    from {
      background-position-x: -2rem;
    }

    to {
      background-position-x: -12rem;
    }
  };

  @keyframes rightSwim {
    from {
      background-position-x: -49rem;
    }
    to {
      background-position-x: -59rem;
    }
  };

  @keyframes swimUpDown {
    0% {
      transform: translateY(-50%);
    }
    25% {
      transform: translateY(-40%);
    }
    50% {
      transform: translateY(-50%);
    }
    75% {
      transform: translateY(-60%);
    }
    100% {
      transform: translateY(-50%);
    }
  };
`;


export const InfoSectionContainer = styled.div`
  width: 100%;
  height: calc(100% - 4.5rem);

  display: flex;
  flex-shrink: 0;

  overflow-x: auto;
  scroll-snap-type: x mandatory;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  // Chrome, Safari and Opera
  ::-webkit-scrollbar {
    display: none;
  }
`

export const InfoSection = styled(Retro0StepBox)`
  position: sticky;
  left: 0;

  width: 100%;
  height: 100%;

  flex: 0 0 auto;
  scroll-snap-align: start;

  font-family: "DungGeunMo";
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  // Chrome, Safari and Opera
  ::-webkit-scrollbar {
    display: none;
  }
`