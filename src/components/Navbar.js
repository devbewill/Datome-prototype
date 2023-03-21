import styled from "styled-components";
import Button from "./Button";

export default function Navbar() {
  return (
    <NavbarStyled>
      <div className="container">
        <h1 className="logo">Datome</h1>
        <ul>
          <li>Platform</li>
          <li>Industries</li>
          <li>Faq</li>
          <li>About</li>
        </ul>
        <div className="actions">
          <Button label="Free Trial" target="#"></Button>
          <Button label="Contact us" target="#" secondary></Button>
        </div>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  position: fixed;
  background: #000;
  color: #fff;
  width: 100vw;
  z-index: 999;

  .container {
    margin: 0 auto;
    max-width: 1440px;
    height: 80px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .logo {
    font-size: 2em;
  }

  ul {
    list-style-type: none;

    li {
      cursor: pointer;
      font-weight: 500;
      display: inline-block;
      padding: 0 1em;

      &:hover {
        color: ${(props) => props.theme.primary};
      }
    }
  }

  .actions {
    display: flex;
    column-gap: 1em;
  }
`;
