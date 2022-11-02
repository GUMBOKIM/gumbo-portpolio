import styled from "styled-components";
import {RetroButton} from "../8BitComponent";

export const MusicButton = styled(RetroButton)<{ isPlay: boolean }>`
  z-index: 200;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  font-size: 0.8rem;
  height: 1.2rem;

  background-color: ${p => p.isPlay ? 'red' : 'blue'};

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 99;
`