import styled from "styled-components";
import {Retro0StepBox} from "../../../../common/components/8BitComponent";

export const InfoSection = styled(Retro0StepBox)`
  position: sticky;
  left: 0;

  width: 100%;
  height: 100%;

  flex: 0 0 auto;
  scroll-snap-align: start;

`;

export const ScrollWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  // Chrome, Safari and Opera
  ::-webkit-scrollbar {
    display: none;
  }
`;