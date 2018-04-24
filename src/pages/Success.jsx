// @flow
import React, { Component } from "react";

import Container from "../components/Styled/Container";
import TopBar from "../components/TopBar";
import SuccessMessage from "../components/SuccessMessage";

class Success extends Component<{}> {
  render() {
    return (
      <Container>
        <TopBar dark />
        <SuccessMessage />
      </Container>
    );
  }
}

export default Success;
