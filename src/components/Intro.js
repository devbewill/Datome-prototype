import Image from "next/image";
import styled from "styled-components";

export default function Intro(props) {
  return (
    <IntroStyled {...props}>
      <div className="introText">
        <h1>Embed trust in your data and processes</h1>
        <p>
          Bring intelligence into data and flows to get a more efficient and
          safe IT ecosystem. Leverage in self-provisioning the real benefits of
          the blockchain.
        </p>
      </div>
      <div className="introVisual">
        <div className="image-container">
          <Image
            priority
            src="positioning.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="positioning chart"
          />
        </div>
      </div>
    </IntroStyled>
  );
}

const IntroStyled = styled.div`
  color: #fff;
  background: #000;
  width: 100%;
  max-width: ${(props) => (props.padded ? props.theme.padded : "none")};
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;

  .introText {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 1.4rem;
      margin-top: 1em;
    }
  }
  .introVisual {
    flex: 2;

    .image-container {
      position: relative;
      width: 50%;
      height: 100%;
      margin-left: auto;
      margin-right: 10%;
    }
  }
`;
