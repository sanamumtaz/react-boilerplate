import styled, { keyframes } from 'styled-components'

const AppLogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const AppStyled = styled.div`
    text-align: center;

    .App-logo {
        height: 40vmin;
        pointer-events: none;
    }

    @media (prefers-reduced-motion: no-preference) {
        .App-logo {
            animation: ${AppLogoSpin} infinite 20s linear;
        }
    }
`

export const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: #ffffff;

    .App-link {
        color: #61dafb;
    }
`
