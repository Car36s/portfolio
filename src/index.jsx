import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './App'
import * as serviceWorker from './serviceWorker'

const GlobalStyles = createGlobalStyle({
    body: {
        margin: 0,
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
    },

    code: {
        fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
    },
})

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
