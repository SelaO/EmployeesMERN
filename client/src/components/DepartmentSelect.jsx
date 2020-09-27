import React, { Component } from "react";

import styled from "styled-components";

const SelectStyled = styled.select.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

export const departments = [
  "",
  "Sales",
  "R&D",
  "Management",
  "Support",
  "Accounting",
];

export default class DepartmentSelect extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <SelectStyled value={value} onChange={onChange}>
        {departments.map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </SelectStyled>
    );
  }
}
