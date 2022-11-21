import styled from "styled-components";
import media from "styled-media-query";
import bifidobacterium from "../../../assets/imgs/ビフィズス菌.jpg";
export const BifidobacteriumImg = () => {
  return <SImg src={bifidobacterium} alt="ビフィズス菌の写真" />;
};

const SImg = styled.img`
  width: 300px;
  height: 295px;
  padding: 0 50px;
  // margin-left: auto;
  // margin-right: auto;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:177px;
    height:123.3px ;
    margin: 0 auto;
  `}
`;
