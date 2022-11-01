import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  margin: auto;
`

export const ProfileBorder = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;

  width: 8rem;
  height: 8rem;
  margin: 1rem;
  
  box-shadow: 0.25rem 0 white, -0.25rem 0 white, 0 -0.25rem white, 0 0.25rem white, 0.5rem 0 white, -0.5rem 0 white, 0 -0.5rem white, 0 0.5rem white, 0 0 0 0.25rem white, 0.75rem 0 white, -0.75rem 0 white, 0 0.75rem white, 0 -0.75rem white, 0 -0.25rem 0 0.25rem white, 0 0.25rem 0 0.25rem white, 0.25rem 0 0 0.25rem white, -0.25rem 0 0 0.25rem white, 1rem 0 black, -1rem 0 black, 0 -1rem black, 0 1rem black, 0.5rem 0 0 0.25rem black, -0.5rem 0 0 0.25rem black, 0 0.5rem 0 0.25rem black, 0 -0.5rem 0 0.25rem black, 0 0 0 0.5rem black;

  z-index: 22;
`

export const ProfileImg = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 10rem;
  height: 10rem;

  animation: fadeIn 3s 1.5s steps(6) forwards;

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

export const ProfileGreeting = styled.div`
`

export const ProfileDescription = styled.section`
  position: relative;
  max-width: 650px;

  ul {
    position: relative;
    display: block;
    max-width: 100%;
    font-size: 0.8rem;
    text-align: start;
  }

  li {
    width: 100%;
    display: block;
    word-break: keep-all;
    word-wrap: break-word;
    white-space: pre-wrap;
    list-style-position: inside;
    text-indent: -2em;
    margin-bottom: 1em;
  }

  li:before {
    content: "■";
    margin-right: 1em;
  }
`