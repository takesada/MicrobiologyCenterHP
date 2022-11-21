import styled from "styled-components";
import nodailogo from "../../assets/imgs/農大サイエンスポート写真.png";
import logoJCM from "../../assets/imgs/JCMロゴ.jpg";
import logoNITE from "../../assets/imgs/NITEロゴ.png";
import logoGBIF from "../../assets/imgs/GBIFロゴ.jpg";
import logoWDCM from "../../assets/imgs/WDCMロゴ.png";
import logoWFCC from "../../assets/imgs/WFCCロゴ.png";
import logoInforBIO from "../../assets/imgs/inforBioロゴ.jpg";
import logoDDBJ from "../../assets/imgs/DDBJロゴ.jpg";
import { LogosAndNames } from "../atoms/logosAndNames";

export const Institution = () => {
  function onClickNodai() {
    window.open("https://www.nodai.ac.jp/", "_blank");
  }
  function onClickJCM() {
    window.open("https://jcm.brc.riken.jp/en/", "_blank");
  }
  function onClickNITE() {
    window.open("https://www.nite.go.jp/en/nbrc/", "_blank");
  }
  function onClickGBIF() {
    window.open("https://www.gbif.org/", "_blank");
  }
  function onClickWDCM() {
    window.open("https://www.wdcm.org/", "_blank");
  }
  function onClickWFCC() {
    window.open("https://wfcc.info/", "_blank");
  }
  function onClickDDBJ() {
    window.open("https://www.ddbj.nig.ac.jp/index-e.html", "_blank");
  }
  return (
    <>
      <SDiv>
        <LogoDiv onClick={onClickNodai}>
          <LogosAndNames
            logo={nodailogo}
            name={"東京農業大学"}
            alt={"農大写真"}
            width={"269.3px"}
            height={"131.3px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickJCM}>
          <LogosAndNames
            logo={logoJCM}
            name={"JCM"}
            alt={"JCM写真"}
            width={"217.47px"}
            height={"38.61px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickNITE}>
          <LogosAndNames
            logo={logoNITE}
            name={"NITE"}
            alt={"NITE写真"}
            width={"138.81px"}
            height={"90.89px"}
          />
        </LogoDiv>
      </SDiv>
      <SDiv>
        <LogoDiv onClick={onClickGBIF}>
          <LogosAndNames
            logo={logoGBIF}
            name={`Global Biodiversity Information Facility(GBIF)`}
            alt={"GBIF写真"}
            width={"278px"}
            height={"114px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickWDCM}>
          <LogosAndNames
            logo={logoWDCM}
            name={`World Data Centre for Microorganisms(WDCM)`}
            alt={"WDCM写真"}
            width={"271px"}
            height={"82px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickWFCC}>
          <LogosAndNames
            logo={logoWFCC}
            name={`World Federation for Culture Collections(WFCC)`}
            alt={"WFCC写真"}
            width={"153px"}
            height={"121px"}
          />
        </LogoDiv>
      </SDiv>
      <SDiv>
        <LogoDiv onClick={onClickDDBJ}>
          <LogosAndNames
            logo={logoDDBJ}
            name={`DDBJ`}
            alt={"DDBJ写真"}
            width={"221px"}
            height={"126px"}
          />
        </LogoDiv>
      </SDiv>
    </>
  );
};

const SDiv = styled.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: table;
  table-layout: fixed;
  text-align: center;
`;

const LogoDiv = styled.div`
  display: table-cell;
`;
