import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Links from "./Links";

import { EmployeesList, EmployeesInsert } from "../pages";
import DepartmentSelect from "./DepartmentSelect";

const SideBar = styled.div`
  background-color: #001529;
  color: white;
`;

const MainViewDiv = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 10fr;
  height: 100%;
`;

const DepartmentSelectStyled = styled(DepartmentSelect)`
  width: 100px;
`
const DeptWrapper = styled.span`
    display: flex;
    align-items: center;
`

export default class MainView extends Component {
  constructor(params) {
    super(params)

    this.state = {
      department: "",
    };
  }

  handleDepartmentChange = async (event) => {
    this.setState({ department: event.target.value });
  };

  render() {
    const { department } = this.state;
    return (
      <MainViewDiv>
        <SideBar>
          <DeptWrapper>
          Dept:
          <DepartmentSelectStyled
            value={department}
            onChange={this.handleDepartmentChange}
          />
          </DeptWrapper>
          
          <Links></Links>
        </SideBar>
        <Switch>
          <Route
            path="/employees/list"
            exact
            render={(routeProps) => (
              <EmployeesList {...routeProps} {...{ department }} />
            )}
          />
          <Route path="/employees/create" exact component={EmployeesInsert} />
        </Switch>
      </MainViewDiv>
    );
  }
}
