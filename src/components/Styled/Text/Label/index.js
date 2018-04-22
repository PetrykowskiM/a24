// @flow
import styled from "styled-components";

type PropsType = {
  fontSize: "small" | "medium" | "large" | "xLarge",
  block: boolean,
  height: number,
  dark: boolean
};

const fontSizes = {
  small: "12px",
  medium: "18px",
  large: "24px",
  xLarge: "30px"
};

const Label = styled.span`
  color: ${(props: PropsType) => (props.dark ? "#5a5a5a" : "white")};
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  letter-spacing: 1px;
  line-height: ${(props: PropsType) => `${props.height || 1}em`};
  display: ${(props: PropsType) => (props.block ? "block" : "initial")};
  font-size: ${(props: PropsType) =>
    fontSizes[props.fontSize] || fontSizes["small"]};
`;

export default Label;
