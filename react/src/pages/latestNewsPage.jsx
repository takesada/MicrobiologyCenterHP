import styled from "styled-components";
import { HeaderMargin } from "../components/atoms/headerMargin";
import ScrollToTopOnMount from "../components/atoms/scrollToTopOnMount";
import { Header } from "../components/organisms/header";
import { NewsContents } from "../components/organisms/newsContents";

export const LatestNewsPage = () => {
  return (
    <div>
      <ScrollToTopOnMount />
      <Header />
      <HeaderMargin />
      <Sh1>最新情報</Sh1>
      <NewsContents />
    </div>
  );
};

const Sh1 = styled.h1`
  width: 144px;
  height: 44px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */

  display: flex;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  text-align: center;

  color: #000000;
`;
