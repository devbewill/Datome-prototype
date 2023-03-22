import Image from "next/image";
import styled from "styled-components";

export default function HowWorks(props) {
  return (
    <HowWorksStyled {...props}>
      <h1>How it works</h1>
      <div className="steps">
        <div>
          <h3>
            <span className="colored">1.</span> Create
          </h3>
          Create digital models Use our APIs to define an asset (e.g. a physical
          object, a ticket, a set of data) and then design the possible states
          it can pass though.
        </div>
        <div>
          <h3>
            <span className="colored">2.</span> Set
          </h3>
          Set rules, relations and privileges Define who has the right to change
          a state, write/read data and under what circumstances.
        </div>
        <div>
          <h3>
            <span className="colored">3.</span> Connect
          </h3>
          Connect legacy applications Use our APIs to connect your existing
          systems or any third party.
        </div>
        <div>
          <h3>
            <span className="colored">4.</span> Certify
          </h3>
          Certify each run Get your assets certified, tacked and automated
          effortlessly on your private blockchain. You can share a public page
          showing the history of each asset that run through the Datome process.
          The public page can be tailored with your own editorial content.
        </div>
      </div>
    </HowWorksStyled>
  );
}

const HowWorksStyled = styled.div`
  width: 100%;
  max-width: ${(props) => (props.padded ? props.theme.padded : "none")};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;

  h1 {
    padding: 100px 0;
  }

  .steps {
    display: flex;
    font-size: 1.5rem;
    font-weight: 400;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    column-gap: 5vw;
    row-gap: 5vw;

    div {
      min-width: 500px;
      border-top: 2px solid;
      padding: 1em;
      width: 45%;

      h3 {
        font-size: 2.4rem;
        padding: 0.5em 0;
      }
    }
  }
`;
