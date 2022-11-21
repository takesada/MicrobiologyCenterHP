import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseHeader } from "../atoms/baseHeaders";
import { ResponsiveHeader } from "../atoms/responsiveHeader";

export const Header = () => {
  const navigate = useNavigate();
  const onClickDrTanaka = () => {
    window.open("http://dbs.nodai.ac.jp/html/270_ja.html", "_blank");
  };
  const [nowLanguage, setNowLanguage] = useState("English");
  const onClickLanguage = () => {
    nowLanguage === "日本語"
      ? setNowLanguage("English")
      : setNowLanguage("日本語");
  };

  const onClickLogo = () => {
    navigate("/");
  };

  const isMedium = useMediaQuery("(min-width:821px)", { noSsr: true });

  return (
    <>
      {isMedium ? (
        <BaseHeader
          onClickLogo={onClickLogo}
          onClickDrTanaka={onClickDrTanaka}
          onClickLanguage={onClickLanguage}
          language={nowLanguage}
        />
      ) : (
        <ResponsiveHeader onClickLogo={onClickLogo} />
      )}
    </>
  );
};
