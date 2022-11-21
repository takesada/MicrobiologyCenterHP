import styled from "styled-components";

export const CatalogSentence = () => {
  return (
    <>
      <Sh1>書類申し込み</Sh1>
      <Sp>確認書類</Sp>
      <Sp2>提出書類</Sp2>
      <Sp3>
        NRICで保管している菌株はカタログまたはNRICオンラインカタログでご確認ください。
      </Sp3>
      <Sp4>
        分譲申込書に必要事項を記入の上、
        <br />
        下記の申込書送付先へご送付下さいますようよろしくお願いします。
      </Sp4>
    </>
  );
};

const Sh1 = styled.h1`
  /* 書類申し込み */
  width: 501px;
  height: 100px;
  margin-top: 163px;
  margin-left: 580px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Sp = styled.p`
  /* 確認書類 */

  position: absolute;
  width: 271px;
  height: 88px;
  left: 633px;
  top: 241px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const Sp2 = styled.p`
  /* 提出書類 */

  position: absolute;
  width: 271px;
  height: 88px;
  left: 633px;
  top: 900px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
`;
const Sp3 = styled.p`
  position: absolute;
  width: 1372px;
  height: 51px;
  left: 70px;
  top: 1531px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
`;

const Sp4 = styled.p`
  /* 分譲申込書に必要事項を記入の上、 下記の申込書送付先へご送付下さいますようよろしくお願いします。 */

  position: absolute;
  width: 1372px;
  height: 86px;
  left: 83px;
  top: 2338px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
`;
