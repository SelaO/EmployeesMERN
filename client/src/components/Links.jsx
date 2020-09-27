import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``



// TODO: add icons
// add drop down
class Links extends Component {
    render() {
        return (
            <React.Fragment>
                    
                    <List>
                        <Item>
                            <Link to="/employees/list" className="nav-link">
                                Employees list
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/employees/create" className="nav-link">
                                Add Employee
                            </Link>
                        </Item>
                        <Item>
                            Org tree
                        </Item>
                    </List>
            </React.Fragment>
        )
    }
}

export default Links
