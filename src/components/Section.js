import styled from "styled-components";

export default function Section(props) {
  return <SectionStyled {...props}>{props.children}</SectionStyled>;
}

const SectionStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  &:first-child {
    padding-top: 80px;
  }
`;
