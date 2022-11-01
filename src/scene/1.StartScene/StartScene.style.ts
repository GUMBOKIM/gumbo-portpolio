import styled from "styled-components";
import {RetroButton} from "../../common/components/8BitComponent";

export const StartButton = styled(RetroButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 6rem;
  height: 2rem;

  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;