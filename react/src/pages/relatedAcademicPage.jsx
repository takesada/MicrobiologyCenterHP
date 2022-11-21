import { HeaderMargin } from "../components/atoms/headerMargin";
import { SwitchInstiAcademic } from "../components/atoms/switchInstiAcademic";
import { Academic } from "../components/organisms/academic";
import { Header } from "../components/organisms/header";
import { useMediaQuery } from "@mui/material";
import { ResponsiveAcademic } from "../components/organisms/responsiveAcademic.jsx";
import ScrollToTopOnMount from "../components/atoms/scrollToTopOnMount";

export const RelatedAcademicPage = () => {
  const isMedium = useMediaQuery("(min-width:821px)", { noSsr: true });
  return (
    <div>
      <ScrollToTopOnMount />
      <Header />
      <HeaderMargin />
      <SwitchInstiAcademic />
      {isMedium ? <Academic /> : <ResponsiveAcademic />}
    </div>
  );
};
