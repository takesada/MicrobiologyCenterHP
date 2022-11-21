import styled from "styled-components";
import forSaleApply from "../../assets/imgs/分譲申込書.jpg";
import BSLConsent from "../../assets/imgs/BSL同意書.jpg";

export const CatalogSubmit = () => {
  return (
    <SDiv>
      <Proposal>提出書類</Proposal>
      <CatalogImages>
        <CatalogImageItem src={forSaleApply} alt="分譲申込書" />
        <CatalogImageItem src={BSLConsent} alt="BSL同意書" />
      </CatalogImages>
    </SDiv>
  );
};



const CatalogImages = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  display: table;
`;

const CatalogImageItem = styled.img`
  width: 146px;
  height: 188.73px;
  padding: 24px;
`;

const Proposal = styled.p`
  margin: 0 auto;
  /* 提出書類 */

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  align-items: center;
  text-align: center;
`;

const SDiv = styled.div`
  // margin-top: auto;
  // margin: 0 auto;
`;