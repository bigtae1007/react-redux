import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
*,*::before, *::after{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Jua', sans-serif;
}
a{
  text-decoration: none;
}

:root{
    --black : #333333;
    --white: #ffffff;
    --grey : #dddddd;
    --green : #00B98D;
    --red :#F85151; 
    --blue : #0085FF;
  }
`;
export default GlobalStyle;
