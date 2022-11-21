import styled from "styled-components";
import media from "styled-media-query";
import NRIClogo from "../../../assets/imgs/NRIC.jpg";

export const NRICLogo = () => {
  return <SImage src={NRIClogo} alt="NRICのロゴ" />;
};

const SImage = styled.img`
  width: 382px;
  height: 143px;
  padding: 0 9px;
  // margin-left: auto;
  // margin-right: auto;
  // display: flex;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:177px;
    height:67px ;
    margin: 0 auto;
  `}
`;
