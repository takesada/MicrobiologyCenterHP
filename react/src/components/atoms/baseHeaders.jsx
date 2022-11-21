import styled from "styled-components";
import logo from "../../assets/imgs/NRIC.jpg";
import media from "styled-media-query";
import { useNavigate } from "react-router-dom";
import { ServicesDropDown } from "../organisms/sevicesDropDown";
import { IntroductionDropDown } from "../organisms/introductionDropDown";

export const BaseHeader = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <SHeader>
        <SImage src={logo} alt="Logo" onClick={props.onClickLogo} />
        <SDiv>
          <ServicesDropDown />
        </SDiv>
        <SLine />

        <SLine />
        <SDiv>
          <IntroductionDropDown />
        </SDiv>
        <SLine />

        <SDiv2>
          <SP onClick={() => navigate("/relatedInstiPage")}>関連機関・学会 </SP>
          <SLine />
        </SDiv2>

        <SDiv2>
          <Mailtag href="mailto:nric@nodai.ac.jp"> お問い合わせ</Mailtag>
        </SDiv2>
        <SLine />
        <SDiv2 onClick={props.onClickLanguage}>
          <SP>{props.language}</SP>
        </SDiv2>
      </SHeader>
    </>
  );
};

const SHeader = styled.header`
  width: 100%;
  height: 70px;
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
  background-color: #ffff;
  z-index: 100;
`;

const SImage = styled.img`
  width: 270px;
  height: 70px;
  &:hover {
    opacity: 0.6;
  }
`;

const SDiv = styled.div`
  width: 500px;
  height: 60px;
  padding-left: 38px;
  margin-top: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const SDiv2 = styled.div`
  width: 350px;
  height: 60px;
  margin-top: 25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  &:hover {
    color: #33cc99;
    cursor: pointer;
  }
`;

const SP = styled.p`
  height: 56px;
  margin-left: 38px;
  margin-right: 38px;
  white-space: nowrap;

  ${media.lessThan("1220px")`
  display: table-cell;
  vertical-align: middle;

  font-size: 16px;`}
`;

const SLine = styled.div`
  height: 100%;
  width: 1px;
  background-color: black;
`;

const Mailtag = styled.a`
  height: 56px;
  margin-left: 38px;
  margin-right: 38px;
  white-space: nowrap;
  color: black;
  text-decoration: none;
  &:hover {
    color: #33cc99;
    cursor: pointer;
  }

  ${media.lessThan("1220px")`
  display: table-cell;
  vertical-align: middle;
  color:black;
  text-decoration: none;
  font-size: 16px;
  `}
`;
