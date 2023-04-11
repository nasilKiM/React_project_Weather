import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        @font-face {
		font-family: 'Montserrat';
		src: url('/Assets/Montserrat.ttf');
	    }
        font-family: 'Montserrat';
    }
    body{
       
        font-family: 'Montserrat';
    }
`;
export default GlobalStyles;
