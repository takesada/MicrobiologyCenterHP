import styled from "styled-components";
import media from "styled-media-query";
import nodaiimage from "../../../assets/imgs/nodai-image.jpg";

export const NodaiImage = () => {
  return (
    <>
      <SImage src={nodaiimage} alt="NodaiImage" />
    </>
  );
};

const SImage = styled.img`
  width: 318px;
  height: 225px;
  padding: 0 41px;


  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:177px;
    height:125px ;
    margin: 0 auto;
  `}
`;
