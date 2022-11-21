import { width } from "@mui/system";
import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

export const Button = (props) => {
  return (
    <BaseButton
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      responsivePaddingBottom={props.responsivePaddingBottom}
      responsiveWidth={props.responsiveWidth}
      responsiveHeight={props.responsiveHeight}
    >
      <SP
        fontSize={props.fontSize}
        lineHeight={props.lineHeight}
        padding={props.padding}
      >
        {props.content}
      </SP>
    </BaseButton>
  );
};

const BaseButton = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: auto;
  border-radius: 55px;
  border: 5px solid #abb8e8;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-bottom:18.52px;

    width: ${(props) => props.responsiveWidth};
    height: ${(props) => props.responsiveHeight};
    padding-bottom: ${(props) => props.responsivePaddingBottom};
    left: 67px;
    top: 109px;

    background: #FFFDFD;
    border: 5px solid #ABB8E8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 55px;
      `}
`;

const SP = styled.p`
  margin-top: auto;
  margin-bottom: auto;
  white-space: pre-wrap;
  padding: ${(props) => props.padding};

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  text-align: center;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    font-size: 14px;

    line-height: 19px;
  `}
`;
