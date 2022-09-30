import styled, { createGlobalStyle } from "styled-components";

type LiftedButtonType = { fs: number };

type OuterWrapperType = {
  smRepeat: number;
  mdRepeat: number;
  mdWidth: number;
  lgRepeat: number;
  lgWidth: number;
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

  :root {
    --border-color: rebeccapurple;
    --box-shadow-color: rebeccapurple;
  }

  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  
  body {
    font-family: "Montserrat", sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

// card layout w/ slightly raised animation

export const OuterWrapper = styled.div<OuterWrapperType>`
  margin: 40px 20px;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.smRepeat}, 1fr)`};
  place-items: center;
  place-content: center;
  gap: 1.25rem;

  @media (min-width: 768px) {
    margin: 40px auto;
    grid-template-columns: ${(props) =>
      `repeat(${props.mdRepeat}, ${props.mdWidth}fr) `};
  }

  @media (min-width: 1048px) {
    grid-template-columns: ${(props) =>
      `repeat(${props.lgRepeat}, ${props.lgWidth}fr) `};
  }
`;

export const InsideWrapper = styled.a`
  max-width: 28rem;
  width: max-content;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  user-select: none;
  border: 0.5px var(--border-color) solid;
  border-radius: 1.5rem;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 6px 6px var(--box-shadow-color);
    transform: translateX(-5px) translateY(-5px);
  }
`;

export const LiftedButton = styled.button<LiftedButtonType>`
  margin: 20px 0;
  padding: 10px 20px;
  font-size: ${(props) => `${props.fs}px`};
  border: 1px solid var(--border-color);
  cursor: pointer;
  border: 0.5px var(--border-color) solid;
  border-radius: 0.5rem;
  transition: all 200ms ease-in-out;
  background: none;

  &:hover {
    box-shadow: 6px 6px var(--box-shadow-color);
    transform: translateX(-5px) translateY(-5px);
  }
`;
