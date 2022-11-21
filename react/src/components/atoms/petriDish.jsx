import styled from "styled-components";
import media from "styled-media-query";
import petridish from "../../assets/imgs/petridish.png";

export const PetriDish = () => {
  return <SImage src={petridish} alt="petridishicon" />;
};
const SImage = styled.img`
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:45.25px;
    height:45.25px ;
  `}
`;
