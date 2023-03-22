import Image from "next/image";
import styled from "styled-components";

export default function Quote(props) {
  return (
    <QuoteStyled {...props}>
      <h1>
        Datome is the solution that enables ecosystems to{" "}
        <span className="colored">trust</span> data and the processes that
        manipulate it.
      </h1>
    </QuoteStyled>
  );
}

const QuoteStyled = styled.div`
  width: 100%;
  max-width: ${(props) => (props.padded ? props.theme.padded : "none")};
  padding: 5em;

  h1 {
    font-size: 4rem;
    line-height: 1.2;
    color: #fff;
  }
`;
