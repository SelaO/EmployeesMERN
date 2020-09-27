import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { TopBar, MainView } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'

const Root = styled.div`
display: grid;
height: 100%;
grid-template-rows: 1fr 9999fr;
`


function App() {
    return (
        <Root>
            <Router>
            <TopBar />
            <MainView />
        </Router>
        </Root>
    )
}

export default App
