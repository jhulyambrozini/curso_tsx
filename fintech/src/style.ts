import { createGlobalStyle } from "styled-components"

export const colors = {
    color1: '#463220',
    color2: '#66593c',
    color3: '#eceadd',
    color4: '#f7f8f5',
    color5: '#ffffff',
}

export const gaps = {
    gapDefault: '1.25rem',
    gapSmall: '0.625rem'
}

const GlobalStyle = createGlobalStyle`
    body{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        color: ${colors.color2};
        background-color: ${colors.color4};
    }

    .box {
        padding: ${gaps.gapDefault};
        border-radius: ${gaps.gapDefault};
        background-color: ${colors.color5};
    }

    .flex {
        display: flex;
        gap: ${gaps.gapDefault}
    }

    .flex > * {
        flex: 1;
    }

    .mb {
        margin-bottom: ${gaps.gapDefault};
    }

    .bg-1 {
        background-color: ${colors.color1};
    }

    .bg-2 {
        background-color: ${colors.color2};
    }

    .bg-3 {
        background-color: ${colors.color3};
    }

    .bg-4 {
        background-color: ${colors.color4};
    }

    .bg-5 {
        background-color: ${colors.color5};
    }

    .container {
        display: grid;
        padding: ${gaps.gapDefault};
        gap: ${gaps.gapDefault};
        grid-template-columns: 240px auto;
    }

    .resume {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .resume h2 {
        font-size: 1.5rem;
        margin-bottom: ${gaps.gapDefault};
        color: ${colors.color1};
    }

    button {
        font-family: sans-serif;
        font-size: 1rem;
        cursor: pointer;
    }

    h1, h2, h3 {
        font-weight: 600;
        margin: 0;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    @media (max-width: 1000px) {
        .resumo {
            flex-direction: column;
        }
    }

    @media (max-width: 700px) {
        html {
            --gap-s: 0.5rem;
            --gap: 0.75rem;
        }
        .container {
            grid-template-columns: 1fr;
        }
        .flex {
            flex-direction: column;
        }
        .sidenav ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .sidenav li a {
            font-size: 0.875rem;
        }
        .venda {
            grid-template-columns: 1fr;
        }
        .venda div:last-child {
            justify-self: start;
        }
}
`

export default GlobalStyle