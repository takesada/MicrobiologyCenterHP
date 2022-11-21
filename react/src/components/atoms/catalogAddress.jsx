import styled from "styled-components";
import nodaiAddress from "../../assets/imgs/リソースセンター情報.jpg";

export const CatalogAddress = () => {
  return (
    <SDiv>
      <Sp>
        NRICで保管している菌株はカタログまたはNRICオンラインカタログでご確認ください。
        分譲申込書に必要事項を記入の上、
        <br />
        下記の申込書送付先へご送付下さいますようよろしくお願いします。
      </Sp>
      <AdressDiv>
        <Adressp>
          東京農業大学微生物リソースセンター 御中
          <br />
          〒156-8502
          <br />
          東京都世田谷区桜丘１ー１ー１
          <br />
          TEL: <a href="tel:0354772549">03-5477-2549</a>
          <br />
          FAX: 03-5477-2537
        </Adressp>
        <Adressp>
          NODAI Culture Collection Center
          <br />
          Tokyo University of Agriculture
          <br />
          Sakuragaoka, Setagaya-ku,
          <br />
          Tokyo 156-8502, Japan.
          <br />
          FAX: 03-5477-2537
        </Adressp>
      </AdressDiv>
      <Sp>
        Email Adress:<a href="mailto:nric@nodai.ac.jp"> nric@nodai.ac.jp </a>
      </Sp>
    </SDiv>
  );
};

const AdressDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Adressp = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const SDiv = styled.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: table;
`;

const Sp = styled.p`
  padding: 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #000000;
`;
