import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
`

export const ProfileBorder = styled.div`
  position: absolute;
  top: -1rem;
  left: -1rem;
  width: 8rem;
  height: 8rem;
  box-shadow: 0.25rem 0 white, -0.25rem 0 white, 0 -0.25rem white, 0 0.25rem white, 0.5rem 0 white, -0.5rem 0 white, 0 -0.5rem white, 0 0.5rem white, 0 0 0 0.25rem white, 0.75rem 0 white, -0.75rem 0 white, 0 0.75rem white, 0 -0.75rem white, 0 -0.25rem 0 0.25rem white, 0 0.25rem 0 0.25rem white, 0.25rem 0 0 0.25rem white, -0.25rem 0 0 0.25rem white, 1rem 0 black, -1rem 0 black, 0 -1rem black, 0 1rem black, 0.5rem 0 0 0.25rem black, -0.5rem 0 0 0.25rem black, 0 0.5rem 0 0.25rem black, 0 -0.5rem 0 0.25rem black, 0 0 0 0.5rem black;
  margin: 1rem;
  z-index: 22;
`

export const ProfileImg = styled.img`
  position: absolute;
  top: -1.125rem;
  left: -1rem;
  width: 10rem;
  height: 10rem;

  animation: fadeIn 3s 2s steps(6) forwards;

  border-radius: 2rem;

  opacity: 0;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  z-index: 21;
`

export const ProfileDescription = styled.div`
`