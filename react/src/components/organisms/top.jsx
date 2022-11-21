import { useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { BaseHeader } from "../atoms/baseHeaders";
import { Nodai } from "../atoms/nodai";
import { ResponsiveHeader } from "../atoms/responsiveHeader";
import { TopPageContents } from "../molecules/topPageContents";

export const Top = () => {
  const isMedium = useMediaQuery("(min-width:768px)", { noSsr: true });
  return (
    <div>
      {isMedium ? <ResponsiveHeader /> : <BaseHeader />}
      <Nodai />
      <VerticleLineDiv>
        <TopPageContents />
      </VerticleLineDiv>
    </div>
  );
};

const VerticleLineDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 3497px;
  width: 5px;
  background-color: blue;
  position: relative;
`;
