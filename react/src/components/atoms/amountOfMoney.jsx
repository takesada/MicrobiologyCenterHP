import styled from "styled-components";

export const AmountOfMoney = (props) => {
  return (
    <SDiv>
      <p>{props.list}</p>
    </SDiv>
  );
};

const SDiv = styled.div`
  margin-left: 0px;
  margin-right: auto;
  display: flex;
`;
