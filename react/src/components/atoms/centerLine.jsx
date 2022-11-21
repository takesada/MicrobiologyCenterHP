import styled from "styled-components";
import centerLine from "../../assets/imgs/Line.jpg";

export const CenterLine = () => {
  return (
    <>
      <SImage src={centerLine} alt="CenterLine" />
    </>
  );
};

const SImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  z-index: -1;
`;
