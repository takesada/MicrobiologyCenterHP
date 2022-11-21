import styled from "styled-components";

export const Payer = (props) => {
  return (
    <SDiv>
      <SP>{props.list}</SP>
    </SDiv>
  );
};

const SP = styled.p`
  margin-left: 0%;
  white-space: pre-wrap;

`;

const SDiv = styled.div`
  float: left;
`;
