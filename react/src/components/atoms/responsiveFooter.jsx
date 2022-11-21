import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export const ResponsiveFooter = () => {
  const navigate = useNavigate();

  const onClickHararu = () => {
    window.open("http://ccnric.com/AHSS/jsp/UserLogin.jsp", "_blank");
  };

  const onClickNews = () => {
    navigate("/latestNewsPage");
  };
  return (
    <SFooter>
      <FooterButton onClick={() => navigate("/relatedInstiPage")}>
        関連機関・学会{" "}
      </FooterButton>
      <Partition>|</Partition>
      <FooterButton onClick={onClickHararu}>ハラル判定システム</FooterButton>
      <Partition>|</Partition>
      <FooterButton onClick={onClickNews}> 最新情報</FooterButton>
    </SFooter>
  );
};
const FooterButton = styled.p`
  margin-left: auto;
  margin-right: auto;
  color: white;
  &:hover {
    color: #33cc99;
    cursor: pointer;
  }
`;
const SFooter = styled.footer`
  width: 100%;
  z-index: 100;
  background-color: #454974;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const Partition = styled.p`
  color: white;
`;
