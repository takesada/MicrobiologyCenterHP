import styled from "styled-components";
import media from "styled-media-query";
import redpetridish from "../../../assets/imgs/シャーレ　菌 1.png";

export const RedPetriDish = () => {
  return <SImage src={redpetridish} alt="赤い培地が入ったシャーレ" />;
};

const SImage = styled.img`
  width: 400px;
  height: 227.45px;
  // margin-left: auto;
  // margin-right: auto;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:177px;
    height:100px ;
    margin: 0 auto;
  `}
`;
