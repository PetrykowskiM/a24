// @flow
import styled from "styled-components";

type PropsType = {
  fontSize: "small" | "medium" | "large",
  dark: boolean
};

const fontSizes = {
  small: "30px",
  medium: "36px",
  large: "42px"
};

const Title = styled.span`
  color: ${(props: PropsType) => (props.dark ? "#5a5a5a" : "white")};
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  letter-spacing: 2px;
  font-size: ${(props: PropsType) =>
    fontSizes[props.fontSize] || fontSizes["small"]};
`;

export default Title;
