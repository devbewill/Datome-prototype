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
        <Button label="Free Trial" target=""></Button>
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

  .cta {
    cursor: pointer;

    a {
      background-color: #5cfe50;
      color: #000;
      box-shadow: inset 0 0 0 1px #5cfe50;
      display: block;
      background-image: none;
      padding: 12px 32px;
      font-weight: 700;
      text-align: center;
      border-radius: 128px;
      line-height: 24px;
    }
  }
`;
