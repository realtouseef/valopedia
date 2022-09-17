import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

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

export const OuterWrapper = styled.div`
  margin: 40px 20px;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  place-content: center;
  gap: 1.25rem;

  @media (min-width: 768px) {
    margin: 40px auto;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1048px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const InsideWrapper = styled.a`
  max-width: 28rem;
  width: max-content;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  user-select: none;
  border: 0.5px black solid;
  border-radius: 1.5rem;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 6px 6px black;
    transform: translateX(-5px) translateY(-5px);
  }
`;
