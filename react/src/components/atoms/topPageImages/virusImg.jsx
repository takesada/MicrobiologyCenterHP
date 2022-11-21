import styled from "styled-components";
import media from "styled-media-query";
import virusimg from "../../../assets/imgs/ウイルス.jpg";

export const VirusImg = () => {
  return <SImage src={virusimg} alt="redpetridishimg" />;
};
const SImage = styled.img`
  width: 394px;
  height: 292px;
  // margin-left: auto;
  // margin-right: auto;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:177px;
    height:131.25px ;
    margin: 0 auto;
  `}
`;
