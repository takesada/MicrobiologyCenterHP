import styled from "styled-components";
import media from "styled-media-query";

export const DetailSentence = (props) => {
  return <SP>{props.sentence}</SP>;
};

const SP = styled.p`
  width: 400px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  white-space: pre-wrap;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin: 0 auto;
    width:177px;
    font-size: 12px;
  `}
`;
