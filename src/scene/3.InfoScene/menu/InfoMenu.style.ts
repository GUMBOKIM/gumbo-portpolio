import styled from "styled-components";

export const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 4.5rem;
  margin-bottom: 1rem;
`

export const MenuItemWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: end;
`

export const MenuIcon = styled.div<{ order: number }>`
  width: 2rem;
  aspect-ratio: 1 / 1;

  background-image: url('./scene/3/background/menuicon.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: ${p => -2 * (p.order % 5)}rem;
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

  &.unselect > ${MenuIcon} {
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

  &.select > ${MenuIcon} {
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


  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  animation: swimUpDown 1s infinite steps(5), swimMotion 1s infinite steps(5);

  &, &.right {
    background-image: url('./scene/3/menu/rightswim.png');
  }

  &.left {
    background-image: url('./scene/3/menu/leftswim.png');
  }

  z-index: 12;


  @keyframes swimMotion {
    from {
      background-position-x: 0rem;
    }

    to {
      background-position-x: -10rem;
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