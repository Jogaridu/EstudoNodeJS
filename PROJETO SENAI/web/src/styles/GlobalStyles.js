import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --primary: #111;
    --secundary: rgb(25,25,25);
    --white: #D9D9D9;
    --gray: 7A7A7A;
    --red: #AA0000
}

* {
    margin: 0;
    padding: 0;
    outline: 0;
}

body {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-color: var(--primary)
}

input {
    color: var(--white);
    background-color: var(--secundary);
    font-size: 16px;
    border: 1px solid var(--white);
    padding: 10px;
    font-weight: bold;
    height: 30px;
    transition: 200ms;
}

input:hover,
button:hover {
    background-color: var(--red);
    transition: 200ms;
}

label {
    color: var(--white);
    letter-spacing: 2px;
    font-size: 20px;
}

button {
    padding: 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 18px;
    letter-spacing: 1px;
    color: var(--white);
    background-color: var(--primary);
    border: 1px solid var(--white);
    transition: 200ms;

    :active {
        color: var(--gray);
        border: 1px solid var(--gray);
        
    }
}
`;
