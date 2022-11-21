import styled from "styled-components";
import biseibutukeitoulogo from "../../assets/imgs/日本微生物系統ロゴ.jpg";
import nihonnnougeilogo from "../../assets/imgs/日本農芸ロゴ.jpg";
import nihonnseibutulogo from "../../assets/imgs/日本生物工学ロゴ.jpg";
import nihonnbunnsilogo from "../../assets/imgs/日本分子生物ロゴ.jpg";
import biseibutusigenn from "../../assets/imgs/日本微生物.jpg";
import nyuusannkinngakkailogo from "../../assets/imgs/日本乳酸菌ロゴ.jpg";
import genomebiseibutulogo from "../../assets/imgs/日本ゲノム微生物学会ロゴ.jpg";
import vitamingakkailogo from "../../assets/imgs/日本ビタミン学会ロゴ.jpg";
import eiyoushokuryoulogo from "../../assets/imgs/日本栄養・食糧ロゴ.jpg";
import shokuhinnbiseibutulogo from "../../assets/imgs/日本食品微生物ロゴ.jpg";
import nihonnshokuhinneiseilogo from "../../assets/imgs/日本食品衛生ロゴ.jpg";
import shokuhinnhozoulogo from "../../assets/imgs/日本食品保蔵科ロゴ.jpg";
import ASMlogo from "../../assets/imgs/ASMロゴ.jpg";
import IUMSlogo from "../../assets/imgs/IUMSロゴ.jpg";
import { LogosAndNames } from "../atoms/logosAndNames";

export const Academic = () => {
  function onClickJSBBA() {
    window.open("https://www.jsbba.or.jp/", "_blank");
  }
  function onClickSBJ() {
    window.open("https://www.sbj.or.jp/", "_blank");
  }
  function onClickMBSJ() {
    window.open("https://www.mbsj.jp/", "_blank");
  }
  function onClickJSMRS() {
    window.open("https://www.jsmrs.jp/ja/", "_blank");
  }
  function onClickJSLAB() {
    window.open("http://jslab.jp/", "_blank");
  }
  function onClickTaxonomy() {
    window.open(
      "http://nodaiweb.university.jp/nric/jsms1980/index.html",
      "_blank"
    );
  }
  function onClickSGMJ() {
    window.open("https://www.sgmj.org/", "_blank");
  }
  function onClickVitamin() {
    window.open("https://www.vitamin-society.jp/", "_blank");
  }
  function onClickJSNFS() {
    window.open("https://www.jsnfs.or.jp/", "_blank");
  }
  function onClickJSFM() {
    window.open("http://www.jsfm.jp/", "_blank");
  }
  function onClickJSFHS() {
    window.open("http://shokuhineisei.or.jp/", "_blank");
  }
  function onClickJAFPS() {
    window.open("https://jafps.smoosy.atlas.jp/ja", "_blank");
  }
  function onClickASM() {
    window.open("https://asm.org/", "_blank");
  }
  function onClickIUMS() {
    window.open("https://www.iums.org/", "_blank");
  }
  return (
    <div>
      <SDiv>
        <LogoDiv onClick={onClickJSBBA}>
          <LogosAndNames
            logo={nihonnnougeilogo}
            name={"日本農芸化学会"}
            alt={"日本農芸化学会のロゴ"}
            width={"266px"}
            height={"58px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickSBJ}>
          <LogosAndNames
            logo={nihonnseibutulogo}
            name={"日本生物工学会"}
            alt={"日本生物工学会のロゴ"}
            width={"253px"}
            height={"80px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickMBSJ}>
          <LogosAndNames
            logo={nihonnbunnsilogo}
            name={"日本分子生物学会"}
            alt={"日本分子生物学会のロゴ"}
            width={"268px"}
            height={"57px"}
          />
        </LogoDiv>
      </SDiv>
      <SDiv>
        <LogoDiv onClick={onClickJSMRS}>
          <LogosAndNames
            logo={biseibutusigenn}
            name={"日本微生物資源学会"}
            alt={"日本微生物資源学会のロゴ"}
            width={"212px"}
            height={"136px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickJSLAB}>
          <LogosAndNames
            logo={nyuusannkinngakkailogo}
            name={"日本乳酸菌学会"}
            alt={"日本乳酸菌学会ロゴ"}
            width={"144px"}
            height={"160px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickTaxonomy}>
          <LogosAndNames
            logo={biseibutukeitoulogo}
            name={"日本微生物系統分類研究会"}
            alt={"日本微生物系統分類研究会のロゴ"}
            width={"279px"}
            height={"66px"}
          />
        </LogoDiv>
      </SDiv>
      <SDiv>
        <LogoDiv onClick={onClickSGMJ}>
          <LogosAndNames
            logo={genomebiseibutulogo}
            name={"日本ゲノム微生物学会"}
            alt={"日本ゲノム微生物学会のロゴ"}
            width={"212px"}
            height={"136px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickVitamin}>
          <LogosAndNames
            logo={vitamingakkailogo}
            name={"日本ビタミン学会"}
            alt={"日本ビタミン学会ロゴ"}
            width={"204px"}
            height={"135px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickJSNFS}>
          <LogosAndNames
            logo={eiyoushokuryoulogo}
            name={"日本栄養・食糧学会"}
            alt={"日本栄養・食糧学会ロゴ"}
            width={"161px"}
            height={"137px"}
          />
        </LogoDiv>
      </SDiv>
      <SDiv>
        <LogoDiv onClick={onClickJSFM}>
          <LogosAndNames
            logo={shokuhinnbiseibutulogo}
            name={"日本食品微生物学会"}
            alt={"日本食品微生物学会ロゴ"}
            width={"130px"}
            height={"136px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickJSFHS}>
          <LogosAndNames
            logo={nihonnshokuhinneiseilogo}
            name={"日本食品衛生学会"}
            alt={"日本食品衛生学会ロゴ"}
            width={"306px"}
            height={"52px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickJAFPS}>
          <LogosAndNames
            logo={shokuhinnhozoulogo}
            name={"日本食品保蔵科学会"}
            alt={"日本食品保蔵科学会のロゴ"}
            width={"180px"}
            height={"59px"}
          />
        </LogoDiv>
      </SDiv>
      <SDiv>
        <LogoDiv onClick={onClickASM}>
          <LogosAndNames
            logo={ASMlogo}
            name={"American Society for Microbiology(ASM)"}
            alt={"American Society for Microbiology(ASM)のロゴ"}
            width={"206px"}
            height={"104.37px"}
          />
        </LogoDiv>
        <LogoDiv onClick={onClickIUMS}>
          <LogosAndNames
            logo={IUMSlogo}
            name={"International Union of Microbiological Societies(IUMS)"}
            alt={"International Union of Microbiological Societies(IUMS)のロゴ"}
            width={"122px"}
            height={"126px"}
          />
        </LogoDiv>
      </SDiv>
    </div>
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
