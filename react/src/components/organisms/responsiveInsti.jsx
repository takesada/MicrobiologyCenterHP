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

export const ResponsiveInsti = () => {
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
  function onClickInforBIO() {
    window.open("https://www.infordio.co.jp/index.html", "_blank");
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
            width={"88px"}
            height={"39px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickJCM}>
          <LogosAndNames
            logo={logoJCM}
            name={"JCM"}
            alt={"JCM写真"}
            width={"88px"}
            height={"20px"}
          />
        </LogoDiv>
      </SDiv>
      <SDiv>
        <LogoDiv onClick={onClickNITE}>
          <LogosAndNames
            logo={logoNITE}
            name={"NITE"}
            alt={"NITE写真"}
            width={"88px"}
            height={"56px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickGBIF}>
          <LogosAndNames
            logo={logoGBIF}
            name={`Global Biodiversity Information Facility(GBIF)`}
            alt={"GBIF写真"}
            width={"83px"}
            height={"38px"}
          />
        </LogoDiv>
      </SDiv>
      <SDiv>
        <LogoDiv onClick={onClickWDCM}>
          <LogosAndNames
            logo={logoWDCM}
            name={`World Data Centre for Microorganisms(WDCM)`}
            alt={"WDCM写真"}
            width={"74px"}
            height={"22px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickWFCC}>
          <LogosAndNames
            logo={logoWFCC}
            name={`World Federation for Culture Collections(WFCC)`}
            alt={"WFCC写真"}
            width={"55px"}
            height={"43px"}
          />
        </LogoDiv>
      </SDiv>
      <SDiv>
        <LogoDiv onClick={onClickInforBIO}>
          <LogosAndNames
            logo={logoInforBIO}
            name={`InforBIO シリーズ`}
            alt={"inforBIO写真"}
            width={"88px"}
            height={"35px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickDDBJ}>
          <LogosAndNames
            logo={logoDDBJ}
            name={`DDBJ`}
            alt={"DDBJ写真"}
            width={"88px"}
            height={"63px"}
          />
        </LogoDiv>
      </SDiv>
    </>
  );
};

const SDiv = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: table;
  table-layout: fixed;
  text-align: center;
`;
const LogoDiv = styled.div`
  display: table-cell;
`;
