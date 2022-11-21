import styled from "styled-components";
import forSaleProcedure from "../../assets/imgs/分譲申し込み手続き.jpg";
import microbialUtilization from "../../assets/imgs/微生物株の利用について.jpg";

import microbialConsent from "../../assets/imgs/微生物利用に関わる同意書.jpg";
import ampoule from "../../assets/imgs/アンプル開封.jpg";
export const CatalogDoc = () => {
  return (
    <SDiv>

      <ConfirmationDocuments>確認書類</ConfirmationDocuments>

      <CatalogImages>
        <CatalogImageItem>
          <CatalogImageContents
            src={forSaleProcedure}
            alt="分譲申し込み手続き書の写真"
          />
        </CatalogImageItem>

        <CatalogImageItem>
          <CatalogImageContents
            src={microbialUtilization}
            alt="微生物株の利用についての写真"
          />
        </CatalogImageItem>

        <CatalogImageItem>
          <CatalogImageContents
            src={microbialConsent}
            alt="微生物株利用に関わる同意書の写真"
          />
        </CatalogImageItem>

        <CatalogImageItem>
          <CatalogImageContents
            src={ampoule}
            alt="アンプルの開封と微生物の復元方法の説明書の写真"
          />
        </CatalogImageItem>
      </CatalogImages>

    </SDiv>
  );
};

const CatalogImages = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CatalogImageItem = styled.div`
padding: 24px
`;

const CatalogImageContents = styled.img`
  width: 146px;
  height: 188.73px;
  // margin-top: 48px;
  // margin-left: 22px;
`;

const SDiv = styled.div`

  // margin-top: auto;
  // margin: 0 auto;
 `;

const ConfirmationDocuments = styled.p`
  /* 確認書類 */
  width: 173px;
  height: 40px;
  margin: 0 auto;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  align-items: center;
  text-align: center;

  color: #000000;
`;
