// @flow
import React from "react";
import Container from "../Styled/Container";
import Label from "../Styled/Text/Label";
import { Link } from "react-router-dom";

type PropsType = {
  dark?: boolean
};

const TopContainer = Container.extend`
  position: absolute;
  top: 0;
  height: auto;
  z-index: 10;
  padding: 1rem;
  width: calc(100% - 2rem);
  background: ${(props: PropsType) => (props.dark ? "#4079d6e0" : "none")};
`;

type TopBarPropsType = {
  dark?: boolean
};

export default class TopBar extends React.Component<TopBarPropsType, {}> {
  render() {
    return (
      <TopContainer dark={this.props.dark}>
        <Link to={{ pathname: "/" }}>
          <Label fontSize={"large"}>DeineAbfindung.de</Label>
        </Link>
      </TopContainer>
    );
  }
}
