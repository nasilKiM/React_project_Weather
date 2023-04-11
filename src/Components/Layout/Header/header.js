import styled from "styled-components";

const DefaultHeader = () => {
  return <Title>How's the weather?</Title>;
};

export default DefaultHeader;

const Title = styled.h2`
  font-size: 50px;
  font-weight: bolder;
  color: #ffff;
  background-color: black;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
