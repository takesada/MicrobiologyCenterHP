import { HeaderMargin } from "../components/atoms/headerMargin";
import { SwitchInstiAcademic } from "../components/atoms/switchInstiAcademic";
import { Header } from "../components/organisms/header";
import { useMediaQuery } from "@mui/material";
import { Institution } from "../components/organisms/institution";
import { ResponsiveInsti } from "../components/organisms/responsiveInsti.jsx";
import { ResponsiveHeaderMargin } from "../components/atoms/responsiveHeaderMargin";
import ScrollToTopOnMount from "../components/atoms/scrollToTopOnMount";

export const RelatedInstiPage = () => {
  const isMedium = useMediaQuery("(min-width:768px)", { noSsr: true });
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      {isMedium ? <HeaderMargin /> : <ResponsiveHeaderMargin />}
      <SwitchInstiAcademic />
      {isMedium ? <Institution /> : <ResponsiveInsti />}
    </>
  );
};
