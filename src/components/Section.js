import styled from "styled-components";

export default function Section(props) {
  return <SectionStyled {...props}>{props.children}</SectionStyled>;
}

const SectionStyled = styled.section`
  width: 100%;
  max-width: ${(props) => (props.padded ? props.theme.padded : "none")};
  min-height: 60vh;
  margin: 0 auto;
  background: red;

  &:first-child {
    padding-top: 80px;
  }
`;
