import { HeaderMargin } from "../components/atoms/headerMargin";
import ScrollToTopOnMount from "../components/atoms/scrollToTopOnMount";
import { Header } from "../components/organisms/header";
import MaterialTable from "material-table";

export const BackUpPage = () => {
  return (
    <div>
      <ScrollToTopOnMount />
      <Header />
      <HeaderMargin />
      <h1>BackUp Page</h1>

      <MaterialTable
        columns={[
          { title: "商品名", field: "itemName" },
          { title: "カテゴリー", field: "category" },
          { title: "重量(g)", field: "weight" },
          { title: "価格(円)", field: "price" },
        ]}
        data={[
          {
            itemName: "チョコレート",
            category: "お菓子",
            weight: 100,
            price: 120,
          },
          { itemName: "ケーキ", category: "お菓子", weight: 400, price: 480 },
          { itemName: "りんご", category: "フルーツ", weight: 500, price: 360 },
          { itemName: "バナナ", category: "フルーツ", weight: 200, price: 300 },
          { itemName: "みかん", category: "フルーツ", weight: 250, price: 180 },
        ]}
        options={{
          showTitle: false,
        }}
      />
    </div>
  );
};
