import Image from "next/image";
import styled from "styled-components";

export default function theContext(props) {
  return (
    <ContextStyled {...props}>
      <div className="boxed">
        <h1>The context</h1>
        <div className="description">
          <h3>
            The reliability on your data and processes is a critical issue.
          </h3>
          <p>
            The door is often left open to potential errors, manipulations and
            procedural anomalies. <br></br>A challengeable reliability, or an
            actual wrong processing, may lead to incorrect decision-making, loss
            of margins or even third party claims. <br></br>
            <br></br>With usual methods, ensuring trust in your data and
            processes by all stakeholders is either not possible or complex and
            expensive.
          </p>
        </div>
      </div>
    </ContextStyled>
  );
}

const ContextStyled = styled.div`
  width: 100%;
  max-width: ${(props) => (props.padded ? props.theme.padded : "none")};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 400;

  .boxed {
    display: flex;
    margin: 2em 0;
    padding: 2em;
  }

  h1 {
    padding: 100px 0;
    flex: 1;
  }

  .description {
    flex: 1;
  }

  h3 {
    font-size: 2.4rem;
    padding: 0.5em 0;
  }

  .example {
    display: flex;
    font-weight: 600;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 1em;

    p {
      padding-bottom: 1em;
      max-width: 30%;
    }
  }
`;
