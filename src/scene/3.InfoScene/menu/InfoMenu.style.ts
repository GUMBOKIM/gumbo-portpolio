import styled from "styled-components";

export const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  margin-bottom: 1rem;
`

export const MenuItemWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: end;
`

export const Mushroom = styled.div<{ order: number }>`
  height: 1.5rem;
  aspect-ratio: 1 / 1;

  background-image: url('./scene/3/mushroom.png');
  //background-image: url('./scene/3/object.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: ${p => -1.5 * (p.order % 5 + 1)}rem;
  overflow: hidden;

  z-index: 11;
`

export const MenuItemName = styled.div`
  font-size: 0.5rem;
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  &.unselect > ${Mushroom} {
    animation: down 0.2s linear forwards;

    @keyframes down {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    };
  }

  &.select > ${Mushroom} {
    animation: up 0.2s linear forwards;

    @keyframes up {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(-100%);
      }
    };
  }

  &.select > ${MenuItemName} {
    animation: fontColorChange 1s linear infinite;

    @keyframes fontColorChange {
      0% {
        color: yellow;
      }
      50% {
        color: white;
      }
      100% {
        color: gold;
      }
    };
  }
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

  z-index: 12;


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
      transform: translateY(-100%);
    }
    25% {
      transform: translateY(-95%);
    }
    50% {
      transform: translateY(-100%);
    }
    75% {
      transform: translateY(-105%);
    }
    100% {
      transform: translateY(-100%);
    }
  };
`;