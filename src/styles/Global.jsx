import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
    box-sizing: border-box;
    color: white;
    }

    html {
    font-size: 16px;
    }

    body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    background-color: black;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 1;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    figure,
    blockquote,
    dl,
    dd,label {
    padding: 0;
    margin: 0;
    color: white;
    }
    
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: auto;
`;

export const Heading1 = styled.h1`
  font-family: "Single Day", cursive;
  color: #72db73;
  font-size: 4rem;
  line-height: 110%;
`;

export const Para = styled.p`
  font-size: 1.5rem;
  color: white;
  line-height: 140%;
`;

export const Input = styled.input`
  background-color: #292929;
  border: none;
  min-height: 4rem;
  border-radius: 4px;
  font-size: 1.25rem;
  padding-left: 1.25rem;
  color: white;
`

export const Button = styled.button`
  background-color: #148A08;
  border: none;
  border-radius: 38px;
  padding: 1rem 2.25rem;
  color: white;
  text-transform: capitalize;
  font-size: 1.5rem;
  cursor: pointer;
  display: block;
`

