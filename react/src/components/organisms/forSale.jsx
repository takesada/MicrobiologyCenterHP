import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../atoms/button";
import media from "styled-media-query";

export const ForSale = () => {
  const navigate = useNavigate();
  const NRICOnlineCatalogue = `（NRIC株)\n菌株オンラインカタログから申し込み`;
  const Catalogue = "書類申し込み";
  const LacticAcidCatalogue =
    "（指定株）\n乳酸菌オンラインカタログから申し込み";
  function onClickTUAStrain() {
    window.open("http://ccnric.com/nric/SearchMicrobial.php", "_blank");
  }
  function onClickLactStrain() {
    window.open("http://ccnric.com/labdb/jsps/index.jsp", "_blank");
  }
  return (
    <>
      <SH1>申し込み方法</SH1>
      <ApplyCardsDiv>
        <Button
          content={NRICOnlineCatalogue}
          onClick={onClickTUAStrain}
          width={"322px"}
          height={"193px"}
          fontSize={"24px"}
          lineHeight={"46px"}
          responsiveWidth={"186px"}
          responsiveHeight={"112px"}
        />
        <Button
          content={Catalogue}
          onClick={() => navigate("/catalogueDoc")}
          width={"322px"}
          height={"193px"}
          fontSize={"24px"}
          lineHeight={"46px"}
          responsiveWidth={"186px"}
          responsiveHeight={"112px"}
        />
        <Button
          content={LacticAcidCatalogue}
          onClick={onClickLactStrain}
          width={"322px"}
          height={"193px"}
          fontSize={"24px"}
          lineHeight={"46px"}
          responsiveWidth={"186px"}
          responsiveHeight={"112px"}
        />
      </ApplyCardsDiv>
    </>
  );
};

const ApplyCardsDiv = styled.div`
  display: flex;
  margin-bottom: 35px;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    
    margin-left:auto;
    margin-right:auto;
    flex-flow:column;
  `}
`;

const SH1 = styled.h1`
  width: 254px;
  height: 48px;
  margin-top: 57px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 55px;
  display: flex;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;

  color: #000000;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 145px;
    height: 26px;
    margin-top:17px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:17px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;

    color: #000000;

      `}
`;
