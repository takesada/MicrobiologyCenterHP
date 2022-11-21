import React from "react";
import styled from "styled-components";
import logo from "../../assets/imgs/NRIC.jpg";
import { HeaderDropDown } from "../organisms/headerDropDown";

export const ResponsiveHeader = (props) => {
  return (
    <>
      <SHeader>
        <SImage src={logo} alt="Logo" onClick={props.onClickLogo} />

        <HeaderDropDown />
      </SHeader>
    </>
  );
};

const SHeader = styled.header`
  width: 100%;
  height: 49px;
  margin-top: 0px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: 0px;
  margin-right: auto;
  display: flex;
  justify-content: center;
  background-color: #454974;
  z-index: 100;
`;

const SImage = styled.img`
  width: 127px;
  height: 33.57px;
  margin-top: 5px;
  &:hover {
    opacity: 0.6;
  }
`;
