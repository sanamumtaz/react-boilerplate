import logo from './logo.svg'
import { AppHeader, AppStyled } from './style'

function App() {
    return (
        <AppStyled className="App">
            <AppHeader className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </AppHeader>
        </AppStyled>
    )
}

export default App
