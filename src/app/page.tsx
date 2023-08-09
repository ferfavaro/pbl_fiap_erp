import ProductProvider from "./hooks/useProduct";
import ListPageScreen from "./screens/listPage/page";

export default function Home() {
  return (
    <ProductProvider>
      <ListPageScreen />
    </ProductProvider>
  );
}
