import React from "react";
import Tick from "./Tick.jsx";
import Container from "../Styled/Container";
import Label from "../Styled/Text/Label";

const CenteredContainer = Container.extend`
  position: absolute;
  height: auto;
  z-index: 10;
  padding: 2rem;
  width: calc(100% - 4rem);

  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`;

const TickContainer = Container.extend`
  max-width: 400px;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
`;

export default class SuccessMessage extends React.Component {
  state = { ready: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: true });
    }, 500);
  }
  render() {
    return (
      <CenteredContainer>
        <TickContainer className={this.state.ready ? "drawn" : ""}>
          <Tick />
        </TickContainer>
        <br />
        <Label fontSize="xLarge" dark>
          Wir benachrichtigen dich Zeitnah per Email
        </Label>
      </CenteredContainer>
    );
  }
}
