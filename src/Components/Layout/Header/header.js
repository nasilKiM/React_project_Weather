import styled from "styled-components";

const DefaultHeader = () => {
  return <HeaderWrapper>How's the weather?</HeaderWrapper>;
};

export default DefaultHeader;

const HeaderWrapper = styled.h2`
  font-size: 50px;
  font-weight: bolder;
  color: #ffff;
  background-color: black;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
