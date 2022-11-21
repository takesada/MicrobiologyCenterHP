import styled from "styled-components";
import { BifidobacteriumImg } from "../atoms/topPageImages/bifidobacteriumImg";
import { CheeseIcon } from "../atoms/cheeseIcon";
import { CultureBio } from "../atoms/topPageImages/cultureBio";
import { Hat } from "../atoms/hat";
import { MicroScope } from "../atoms/microScope";
import { MisoIcon } from "../atoms/misoIcon";
import { NodaiImage } from "../atoms/topPageImages/nodaiImage";
import { NRICLogo } from "../atoms/topPageImages/NRICLogo";
import { PetriDish } from "../atoms/petriDish";
import { RedPetriDish } from "../atoms/topPageImages/redPetriImg";
import { StallImage } from "../atoms/topPageImages/stallImage";
import { VirusIcon } from "../atoms/virusIcon";
import { VirusImg } from "../atoms/topPageImages/virusImg";
import media from "styled-media-query";
import { DetailSentence } from "../atoms/detailSentence";

export const TopPageContents = () => {
  const NodaiDetail = `1891年の創設以来動植物全てに関わる総合科学を扱う大学です。現在、生命、食料、環境、健康、エネルギー、地域創成に挑む6学部23学科の緑と生命を科学する大学として社会に貢献する人材を送りだしています。`;
  const NRICDetail = `東京農業大学微生物リソースセンター（前身、菌株保存室）は、学内で研究された微生物株を中心に収集と保存する専門機関として1960年に設置されました。`;
  const AboutBacteria = `さらに本センターは主として日本の、そして東南アジア各国（1990年頃以前）の伝統発酵食品に生息する微生物、特に乳酸菌の収集・保存を専門に行っています。`;
  const LacticAcidBacteria = `これらの地域の伝統発酵食品は植 物質が原材料であり、 それらを 生息場所とする乳酸菌［＝植物性 乳酸菌（plant origin lactic acidbacteria）］を5,000株以上を 収集・保存しております。`;
  const AboutCenter = ` 本センターは植物性乳酸菌を専門に扱う世界で最大の研究機関でもあります。本センターは乳酸菌の他発酵食品や醸造食品に関係 する酵母やカビ、 食品変敗や汚染に関わる微生物も多数保存しております。`;
  const AboutCatalogue = `菌株カタログ第４版（2008年）では、1,379株を公開株として載せております.今回公開した1,492株の内訳は、細菌1,020株、カビ130株、酵母342株であります。また保存株の内、552株が乳酸菌であり、本センターまたは本学関係者の分離した東京農業大学オリジナルの乳酸菌株が331株を公開しております。`;
  const AboutPrivateStrain = `非公開株となっている4,500株以上の植物性乳酸菌は国内に限り、条件を整えた上研究用に提供して、乳酸菌研究の発展に役立ててもらっております。本センターで保存する微生物株が皆様の研究や開発に少しでもお役つことを願っております。`;
  return (
    <WrapDiv>
      <SDiv>
        <NodaiImage />
        <VerticleLineDiv></VerticleLineDiv>
        <DetailSentence sentence={NodaiDetail} />
      </SDiv>

      <IconDiv>
        <Hat />
      </IconDiv>

      <SDiv>
        <DetailSentence sentence={NRICDetail} />
        <VerticleLineDiv></VerticleLineDiv>
        <NRICLogo />
      </SDiv>

      <IconDiv>
        <MicroScope />
      </IconDiv>

      <SDiv>
        <StallImage />
        <VerticleLineDiv></VerticleLineDiv>
        <DetailSentence sentence={AboutBacteria} />
      </SDiv>

      <IconDiv>
        <PetriDish />
      </IconDiv>

      <SDiv>
        <DetailSentence sentence={LacticAcidBacteria} />
        <VerticleLineDiv></VerticleLineDiv>
        <RedPetriDish />
      </SDiv>

      <IconDiv>
        <CheeseIcon />
      </IconDiv>

      <SDiv>
        <CultureBio />
        <VerticleLineDiv></VerticleLineDiv>
        <DetailSentence sentence={AboutCenter} />
      </SDiv>

      <IconDiv>
        <MisoIcon />
      </IconDiv>

      <SDiv>
        <DetailSentence sentence={AboutCatalogue} />
        <VerticleLineDiv></VerticleLineDiv>
        <VirusImg />
      </SDiv>

      <IconDiv>
        <VirusIcon />
      </IconDiv>

      <SDiv>
        <BifidobacteriumImg />
        <VerticleLineDiv></VerticleLineDiv>
        <DetailSentence sentence={AboutPrivateStrain} />
      </SDiv>
    </WrapDiv>
  );
};

const WrapDiv = styled.div``;

const SDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    flex-flow:column;
    
  `};
`;

const IconDiv = styled.div`
  display: flex;
`;

const VerticleLineDiv = styled.div`
  width: 5px;
  background-color: #244886;
  margin: 0 5%;

  ${media.lessThan("1000px")`
    width:0;
    `}
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:0 ;
  `}
`;
