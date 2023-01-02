import { createGlobalStyle } from "styled-components";
import bg from "../img/bg.png"

const GlobalStyle = createGlobalStyle`

    html {
    scroll-behavior: smooth;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        background-image: url(${bg});
        min-height: 100vh;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1, h2, h3, input[type="submit"] {
        font-family: 'Barlow', sans-serif;
    }

    span {
        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    p, a, button, input, select {
        font-family: 'Montserrat', sans-serif;
    }

    /* font-family: 'Barlow', sans-serif;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-family: 'Montserrat', sans-serif; */

`;

export default GlobalStyle;
