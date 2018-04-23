// @flow
import styled from "styled-components";

type PropsType = {
  disabled: boolean
};

const Button = styled.div`
  border-radius: 4px;
  color: white;
  background-color: ${(props: PropsType) =>
    props.disabled ? "#717171" : "#4079d6af"};
  padding: 1em;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  font-size: 18px;
  letter-spacing: 1px;
  box-shadow: 2px 2px 5px #243b61;

  ${(props: PropsType) =>
    props.disabled
      ? ""
      : `&:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 1px 1px 3px #243b61;
  }
  `};
`;

export default Button;
