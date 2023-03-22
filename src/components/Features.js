import styled from "styled-components";

export default function Features(props) {
  return (
    <FeaturesStyled {...props}>
      <h3>ASK YOURSELF IF</h3>
      <div className="example">
        <p>
          Different applications writing on the same database, are such
          applications always adopting coherent rules?
        </p>
        <p>How painful is it writing a business logic in different places?</p>
        <p>
          Do you have full control on the context when such data should be
          validated?
        </p>
        <p>
          Can you defend against third-party claims challenging the proper
          execution of a process ?
        </p>
        <p>
          Do you have a full and trustworthy tracking from the very start to the
          very end of a process?
        </p>

        <p>
          Who and when took actions along the way? Can you really trust such a
          tracking?
        </p>
      </div>
    </FeaturesStyled>
  );
}

const FeaturesStyled = styled.div`
  width: 100%;
  max-width: ${(props) => (props.padded ? props.theme.padded : "none")};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 400;

  h3 {
    font-size: 1.5rem;
    font-weight: 900;
    padding: 0.5em 0;
  }

  .example {
    display: flex;
    font-weight: 600;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 3em;
    margin: 3em 0;

    p {
      padding-bottom: 1em;
      max-width: 30%;
      padding: 1em;
      border-top: 2px solid #000;
      border-right: 2px solid #000;
    }
  }
`;
