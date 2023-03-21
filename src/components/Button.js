import styled from "styled-components";

export default function Button(props) {
  console.log(props);
  return (
    <ButtonStyled {...props}>
      <a href={props.target}>{props.label}</a>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.div`
  background: ${(props) => props.theme.primary};
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.primary};
  display: block;
  padding: 12px 32px;
  font-weight: 700;
  text-align: center;
  border-radius: 128px;
  line-height: 24px;

  a {
    color: ${(props) => props.theme.text};
    /* color: ${(props) => (props.secondary ? "blue" : "yellow")}; */
  }
`;
