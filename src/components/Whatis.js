import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";

export default function Whatis(props) {
  return (
    <WhatisStyled {...props}>
      <div className="description">
        <h3>
          Datome combines blockchain technology, data management, and business
          process management.
        </h3>
        <p>
          This perfect mix of technologies is crucial to create a robust, secure
          and scalable Platform As A Service that you can easily configure in
          self provisioning. Datome lets you have a trustworthy database that
          can embed your processes and connect to your users, legacy
          applications and existing BPM or DM.
        </p>
      </div>
      <div className="positioning">
        <div className="image-container">
          <Image
            priority
            src="position.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="positioning chart"
          />
        </div>
      </div>
    </WhatisStyled>
  );
}

const WhatisStyled = styled.div`
  width: 100%;
  max-width: ${(props) => (props.padded ? props.theme.padded : "none")};
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 5em 0;

  .description {
    flex: 1;
    font-size: 1.5rem;

    h3 {
      font-size: 2.4rem;
      padding: 0.5em 0;
    }

    p {
      font-weight: 400;
      line-height: 1.5;
    }
  }

  .positioning {
    position: relative;
    flex: 1;
  }
`;
