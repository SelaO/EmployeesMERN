import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-left: 30px;
    height: 50px;
    width: '100%';
    background-color: #001529;
    color: white;
    display: flex;
    align-items: center;
`

const ContainerText = styled.span.attrs({
    className: 'container-text',
})`
    font-size: 30px;
`

class TopBar extends Component {
    render() {
        return (
            <Container>
                <ContainerText>
                    Alice
                </ContainerText>
            </Container>
        )
    }
}

export default TopBar
