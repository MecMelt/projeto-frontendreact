import { createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle`
    :root{
        --soft-white: #f2f2f2;
        --green: #8bcf21;
        --yellow: #ffcb16;
        --dark: #383b40;
        --deep-blue: #011640;
        --deep-blue-secondary: #010f2b;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color:#E6E6FA;
        border-right: 1px solid white;
    }
    main{
        display:flex;
        justify-content: space-between;
        padding: 1rem;
        border: 1px solid white;
        height: 160vh;
    }
    h1{ font-family: 'Jolly Lodger', cursive; font-size: 5em; }
    h2{ font-family: 'Shrikhand', cursive; color: #8A2BE2; }
    p{ font-family: 'Shrikhand', cursive; color: #9370DB; }
    h4{ font-family: 'Shrikhand', cursive;  }
    footer{ border: 1px solid white; background-color: #8A2BE2; color: black;}
`