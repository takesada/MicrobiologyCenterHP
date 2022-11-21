import { Payer } from "../atoms/payer";
import { AmountOfMoney } from "../atoms/amountOfMoney";
import styled from "styled-components";
import media from "styled-media-query";

export const PriceTable = () => {
  return (
    <>
      <SDiv>
        <SH2>価格表</SH2>
      </SDiv>
      <WrapDiv>
        <SDiv>
          <Payer list="東京農業大学に所属する者    " />
          <SP>・・・・</SP>
          <AmountOfMoney list="大学の規定による" />
        </SDiv>
        <SDiv>
          <Payer list={`東京農業大学の\n併設高等学校に所属する者   `} />
          <SP>・・・・</SP>
          <AmountOfMoney list="大学の規定による" />
        </SDiv>
        <SDiv>
          <Payer
            list={`学校関係\n（東京農業大学系列を除く）\n公的研究機関に所属する者`}
          />
          <SP>・・・・</SP>
          <AmountOfMoney list="4000円" />
        </SDiv>
        <SDiv>
          <Payer list="民間企業に所属する者         " />
          <SP>・・・・</SP>
          <AmountOfMoney list="8000円" />
        </SDiv>

        <SDiv>
          <Payer list="国外への分譲（全てが対象）" />
          <SP>・・・・</SP>
          <AmountOfMoney list="10000円" />
        </SDiv>
      </WrapDiv>
    </>
  );
};

const WrapDiv = styled.div`
  margin-left: 20%;
  margin-right: auto;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    
    margin-left:auto;
    margin-right:auto;
    font-size: 14px;
  `}
`;

const SH2 = styled.h2`
  display: flex;
  margin-top: 105px;
  margin-bottom: 67px;
  margin-left: auto;
  margin-right: auto;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 58px;
`;

const SDiv = styled.div`
  display: flex;
  white-space: pre-wrap;
  margin-left: auto;
  margin-right: auto;

  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 58px;
`;

const SP=styled.p`
margin-left: 0px;
margin-right: 0px;
display: flex;`