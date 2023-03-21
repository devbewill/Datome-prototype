import styled from "styled-components";
import Button from "./Button";

export default function Navbar() {
  return (
    <NavbarStyled>
      <div className="container">
        <h1>Datome</h1>
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

  .container {
    margin: 0 auto;
    max-width: 1440px;
    height: 70px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  ul {
    list-style-type: none;

    li {
      display: inline-block;
      padding: 0 1em;
    }
  }

  .actions {
    display: flex;
    column-gap: 1em;
  }
`;
