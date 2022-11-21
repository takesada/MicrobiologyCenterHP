import styled from "styled-components";
import media from "styled-media-query";
import virusicon from "../../assets/imgs/virusIcon.jpg";

export const VirusIcon = () => {
  return <SImg src={virusicon} alt="ウイルスのアイコン" />;
};

const SImg = styled.img`
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
