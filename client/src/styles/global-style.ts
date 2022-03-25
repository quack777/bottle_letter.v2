import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  a{
    color: inherit;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {     
      color: inherit;
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
