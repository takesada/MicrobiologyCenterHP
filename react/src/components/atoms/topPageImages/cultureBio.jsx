import styled from "styled-components";
import media from "styled-media-query";
import culturebio from "../../../assets/imgs/培養微生物.jpg";
export const CultureBio = () => {
  return <SImg src={culturebio} alt="培養微生物の写真" />;
};

const SImg = styled.img`
  width: 400px;
  height: 310px;
  // margin-left: auto;
  // margin-right: auto;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:177px;
    height:137.45px ;
    margin: 0 auto;
  `}
`;
