import styled from "styled-components";
import media from "styled-media-query";

export const LogosAndNames = (props) => {
  return (
    <SUl>
      <SDiv>
        <SImg
          src={props.logo}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </SDiv>
      <SP>{props.name}</SP>
    </SUl>
  );
};

const SDiv = styled.div`
  width: 270px;
  height: 132px;
  display: table;
  text-align: center;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 88px;
    height: 50px;
    display: table;
    text-align: center;
  `}
`;

const SUl = styled.ul`
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  position: relative;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    height: 91px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    position: relative;
    &:hover {
    opacity: 0.5;
    cursor:pointer;
  }
  `}
`;

const SImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: table-cell;
  vertical-align: middle;
  margin: 0 auto;
`;

const SP = styled.p`
  height: 90px;
  width: 261px;
  margin-top: 18.94px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  display: table-cell;
  text-align: center;
  color: #000000;
  white-space: pre-wrap;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    height: 36px;
    width: 105px;
    margin-top: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    display: table-cell;
    text-align: center;

    
    color: #000000;
    white-space: pre-wrap;
  `}
`;
