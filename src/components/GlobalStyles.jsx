import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        
        div#root{
            width: 100vw;
            height: 100vh;
        }
    }

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    h1,h2,h3,h4{
        font-family: 'Glegoo', serif;
    }

    p{
        font-family: 'Raleway', sans-serif;
        font-weight: lighter;
    }
`

export default GlobalStyles
