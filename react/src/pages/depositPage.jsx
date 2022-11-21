import { HeaderMargin } from "../components/atoms/headerMargin";
import ScrollToTopOnMount from "../components/atoms/scrollToTopOnMount";
import { Header } from "../components/organisms/header";

export const DepositPage = () => {
  return (
    <div>
      <ScrollToTopOnMount />
      <Header />
      <HeaderMargin />
      <h1>Deposit Page</h1>
    </div>
  );
};
