import React, { Component } from 'react'
import api from '../api'

import {DepartmentSelect} from '../components'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`


const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class EmployeesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            department: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeDepartment = async event => {
        this.setState({ department: event.target.value });
    }

    handleAddEmployee = async () => {
        const { name, department } = this.state

        const d = new Date()
        const date = `${d.getDay()}/${d.getMonth() + 1}/${d.getFullYear()}`

        const payload = { name, department, hiredate: date }

        await api.insertEmployee(payload).then(res => {
            alert("success")
            this.setState({
                name: '',
                department: '',
            })
        })
    }

    render() {
        const { name, department } = this.state

        return (
            <Wrapper>
                <Title>Create Employee</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Department: </Label>
                <DepartmentSelect value={department} onChange={this.handleChangeDepartment} />

                <Button onClick={this.handleAddEmployee}>Add Employee</Button>
            </Wrapper>
        )
    }
}

export default EmployeesInsert;
