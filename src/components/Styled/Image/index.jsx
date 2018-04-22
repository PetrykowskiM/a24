// @flow
import styled from "styled-components";

type PropsType = {
  source: string
};

const Image = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("${(props: PropsType) => props.source}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
`;

export default Image;
