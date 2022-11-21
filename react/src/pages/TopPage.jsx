import styled from "styled-components";
import { HeaderMargin } from "../components/atoms/headerMargin";
import ScrollToTopOnMount from "../components/atoms/scrollToTopOnMount";
import { TopPageContents } from "../components/molecules/topPageContents";
import { Header } from "../components/organisms/header";

export const TopPage = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <HeaderMargin />
      <SDiv>
        <TopPageContents />
      </SDiv>
    </>
  );
};

const SDiv = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
