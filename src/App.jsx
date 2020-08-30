import React from 'react'
import styled from 'styled-components'

import LogoSVG from './static/logo.svg'

const Container = styled.div({
    textAlign: 'center',
})

const Logo = styled.img({
    height: '40vmin',
    pointerEvents: 'none',
    animation: `App-logo-spin infinite 20s linear`,

    '@keyframes App-logo-spin': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(360deg)',
        },
    },
})

const Header = styled.header({
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
})

const Link = styled.a({ color: '#61dafb' })

const App = () => (
    <Container>
        <Header>
            <Logo alt="logo" src={LogoSVG} />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
                Learn React
            </Link>
        </Header>
    </Container>
)

export default App
