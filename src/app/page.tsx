import Banners from "./components/Banners";
import Products from "./components/products";
import Category from "./components/category";
import Small_Banner from "./components/small banner";
import Banner from "./components/banner";
import Discount_Products from "./components/discount products";
import Banner2 from "./components/banner2";
import Footer from "./components/footer";
export default function app() {
  return (
    <div>
      <Banner />
      <Small_Banner />
      <Category />
      <Products />
      <Banners />
      <Discount_Products />
      <Banner2 />
      <Footer />
    </div>
  );
}
