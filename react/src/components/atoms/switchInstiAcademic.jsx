import styled from "styled-components";
import media from "styled-media-query";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

export const SwitchInstiAcademic = () => {
  const navigate = useNavigate();
  const onClickInsti = () => {
    navigate("/relatedInstiPage");
  };
  const onClickAcademic = () => {
    navigate("/relatedAcademicPage");
  };
  return (
    <>
      <SDiv>
        <Button
          content={"関連機関・サービス"}
          onClick={onClickInsti}
          width={"200px"}
          fontSize={"20px"}
          lineHeight={"20px"}
          padding={"10px"}
          responsivePaddingBottom={"10px"}
          responsiveWidth={"160px"}
          responsiveHeight={"24px"}
        />
        <Button
          content={"関連学会"}
          onClick={onClickAcademic}
          width={"200px"}
          fontSize={"20px"}
          lineHeight={"20px"}
          padding={"10px"}
          responsivePaddingBottom={"10px"}
          responsiveWidth={"160px"}
          responsiveHeight={"24px"}
        />
        {/* <InstiButton onClick={() => navigate("/relatedInstiPage")}>
          <SP>関連機関・サービス</SP>
        </InstiButton>
        <AcademicButton onClick={() => navigate("/relatedAcademicPage")}>
          <SP>関連学会</SP>
        </AcademicButton> */}
      </SDiv>
    </>
  );
};
const InstiButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  color: #333;
  background-color: #454974;
  border-radius: 50vh;
  box-shadow: 5px 5px 0px 0 rgb(60, 194, 235);
  &:hover {
    opacity: 0.5;
  }
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 166px;
    height: 26.41px;
    margin-left: auto;
    margin-right: auto;
  `};
`;

const AcademicButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  color: #333;
  background-color: #454974;
  border-radius: 50vh;
  box-shadow: 5px 5px 0px 0 rgb(60, 194, 235);
  &:hover {
    opacity: 0.5;
  }
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 88px;
    height: 26.41px;
    /* margin-top:30px; */
    margin-left: auto;
    margin-right: auto;
  `};
`;

const SP = styled.p`
  margin-left: auto;
  margin-right: auto;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f2f2f2;
  &:hover {
    color: #33cc99;
    cursor: pointer;
    /* border-bottom: 2px solid #d3d3d3; */
  }
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin:0 auto;
    &:hover {
      color:#33cc99;
      cursor: pointer;
    }

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    
    color: #f2f2f2;

  `}
`;

const SDiv = styled.div`
  margin-top: 38px;
  display: flex;
  justify-content: center;
`;
