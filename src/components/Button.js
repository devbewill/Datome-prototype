import styled from "styled-components";

export default function Button(props) {
  return (
    <ButtonStyled {...props}>
      {<a href={props.target}>{props.label}</a>}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.div`
  background: ${(props) =>
    props.secondary ? "transparent" : props.theme.primary};

  color: ${(props) =>
    props.secondary ? props.theme.white : props.theme.black};
  border: 1px solid
    ${(props) => (props.secondary ? props.theme.white : props.theme.primary)};
  padding: 12px 32px;
  font-weight: 400;
  text-align: center;
  border-radius: 50px;
  transition: all 0.2s linear;

  &:hover {
    background: ${(props) =>
      props.secondary ? "transparent" : props.theme.white};
    border-color: ${(props) =>
      props.secondary ? props.theme.primary : "inherit"};
  }
`;
