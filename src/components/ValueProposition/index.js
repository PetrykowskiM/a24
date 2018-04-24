// @flow
import React from "react";
import Container from "../Styled/Container";
import Label from "../Styled/Text/Label";
import Title from "../Styled/Text/Title";
import Button from "../Styled/Button";
import { media } from "../Styled/mediaStyles";
import { Link } from "react-router-dom";

const LeftContainer = Container.extend`
  position: absolute;
  height: auto;
  z-index: 10;
  padding: 2rem;
  width: auto;
  background: #aaaaaa40;

  top: 50%;
  transform: translateY(-50%);

  ${media.desktop`
    margin-left: 3rem;

  `};
`;

const MarginContainer = Container.extend`
  height: auto;
  width: auto;
  margin-bottom: 2.5em;
`;

export default class TopBar extends React.Component<{}> {
  render() {
    return (
      <LeftContainer>
        <MarginContainer>
          <Title fontSize={"medium"}>Gekündigt worden ohne Abfindung?</Title>
        </MarginContainer>
        <MarginContainer>
          <Label fontSize={"large"} block height={1.5}>
            Viele Kündigungen sind nicht rechtmäßig.
          </Label>
          <Label fontSize={"large"} block height={1.5}>
            Dann haben Arbeitnehmer Anspruch auf Abfindung.
          </Label>
        </MarginContainer>
        <Link to={{ pathname: "/check" }}>
          <Button>Anspruch kostenfrei prüfen</Button>
        </Link>
      </LeftContainer>
    );
  }
}
