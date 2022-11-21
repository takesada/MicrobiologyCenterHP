import styled from "styled-components";
import media from "styled-media-query";

export const ApplyCards = (props) => {
  return (
    <SDiv onClick={props.onClick}>
      <Sp>{props.content}</Sp>
    </SDiv>
  );
};

const SDiv = styled.div`
  width: 322px;
  height: 193px;
  margin: auto;
  border-radius: 55px;
  border: 10px solid #abb8e8;
  &:hover {
    opacity: 0.5;
  }
  display: flex;
  justify-content: center;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    
    margin-bottom:18.52px;

    width: 186px;
    height: 111.48px;
    left: 67px;
    top: 109px;

    background: #FFFDFD;
    border: 10px solid #ABB8E8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 55px;
      `}
`;

const Sp = styled.p`
  margin-top: auto;
  margin-bottom: auto;
  white-space: pre-wrap;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 46px;
  text-align: center;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    
    font-size: 16px;

    line-height: 19px;
  `}
`;
