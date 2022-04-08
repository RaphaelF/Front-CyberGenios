import { createGlobalStyle } from "styled-components";
import { whiteColor } from "../mustang-design/core/UI/variables";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
* {
    box-sizing: border-box;
    font-family: 'Montserrat';
    margin: 0;
    padding: 0;
    text-decoration: none;
}
body{
    /* Fontes padrão do sistema */
    //font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', 
    //Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    font-family: 'Montserrat';  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${whiteColor};
  }
`;
