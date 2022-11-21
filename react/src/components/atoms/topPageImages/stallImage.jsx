import styled from "styled-components";
import media from "styled-media-query";
import stallImage from "../../../assets/imgs/東南アジア　屋台.jpg";

export const StallImage = () => {
  return <SImage src={stallImage} alt="屋台の画像" />;
};

const SImage = styled.img`
  width: 337px;
  height: 252px;
  padding: 0 31.5px;
  // margin-left: auto;
  // margin-right: auto;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:177px;
    height:134px ;
    margin: 0 auto;
  `}
`;
