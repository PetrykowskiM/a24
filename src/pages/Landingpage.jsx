// @flow
import React, { Component } from "react";

import Image from "../components/Styled/Image";
import Container from "../components/Styled/Container";
import TopBar from "../components/TopBar";
import ValueProposition from "../components/ValueProposition";
import backgroundImage from "../assets/images/background_1.jpg";

class Landingpage extends Component {
  render() {
    return (
      <Container>
        <TopBar />
        <ValueProposition />
        <Image source={backgroundImage} />
        <Container fillColor={"#3f3f3f9c"} position={"absolute"} top={"0"} />
      </Container>
    );
  }
}

export default Landingpage;
