import styled from "styled-components";
import media from "styled-media-query";
import misoicon from "../../assets/imgs/misoIcon.jpg";

export const MisoIcon = () => {
  return <SImg src={misoicon} alt="味噌のアイコン" />;
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
