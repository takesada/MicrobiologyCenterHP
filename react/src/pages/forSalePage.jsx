import { ForSale } from "../components/organisms/forSale";
import { Header } from "../components/organisms/header";
import { PriceTable } from "../components/organisms/priceTable";
import { HeaderMargin } from "../components/atoms/headerMargin.jsx";
import ScrollToTopOnMount from "../components/atoms/scrollToTopOnMount";

export const ForSalePage = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <HeaderMargin />
      <ForSale />
      <PriceTable />
    </>
  );
};
