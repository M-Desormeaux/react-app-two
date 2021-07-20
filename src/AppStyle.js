import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body, html{
    width: 100%;  
    min-height: 100vh;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #0f044c;
  color: #eeeeee;
`;

export const AppCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  height: 100vh;
  padding: 1rem;
`;
