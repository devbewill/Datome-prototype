import Image from "next/image";
import styled from "styled-components";
import screenPic from "../../public/wf.jpg";

export default function Visual(props) {
  return (
    <VisualStyled {...props}>
      <h1>Set everything you need</h1>

      <div className="image-container">
        <Image
          src={screenPic}
          alt="screen"
          style={{
            width: "100%",
            height: "auto",
            marginLeft: "-5px",
            marginTop: "-10px",
          }}
        />
      </div>
    </VisualStyled>
  );
}

const VisualStyled = styled.div`
  width: 100%;
  max-width: ${(props) => (props.padded ? props.theme.padded : "none")};
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  h1 {
    padding: 100px 0;
  }
  .image-container {
    width: 60%;
    position: relative;
    margin: 1em auto;
    background: ${(props) => props.theme.primary};
  }
`;
