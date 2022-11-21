import { CatalogDoc } from "../components/organisms/catalogDoc";
import { CatalogSubmit } from "../components/organisms/catalogSubmit";
import { Header } from "../components/organisms/header";
import { CatalogAddress } from "../components/atoms/catalogAddress";
import styled from "styled-components";
import { HeaderMargin } from "../components/atoms/headerMargin";
import ScrollToTopOnMount from "../components/atoms/scrollToTopOnMount";

export const CatalogDocPage = () => {
  return (
    <SDiv>
      <ScrollToTopOnMount />
      <Header />
      <HeaderMargin />
      <DocumentApplication>書類申し込み</DocumentApplication>
      {/* <CatalogSentence /> */}
      <CatalogDoc />
      <CatalogSubmit />
      <CatalogAddress />
    </SDiv>
  );
};

const DocumentApplication = styled.h1`
  /* 書類申し込み */
  width: 263px;
  height: 52px;
  margin: 0 auto;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const SDiv = styled.div``;
