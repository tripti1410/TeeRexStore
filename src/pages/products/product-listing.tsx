import ProductCard from "../../components/product-card/product-card";
import { SelectedProduct } from "../../types";
import NotFoundMsg from "./not-found-msg";
type Props = {
  updatedProducts: Array<SelectedProduct>;
};
const ProductListing = (props: Props) => {
  const updatedProducts = props.updatedProducts;
  return (
    <section className="product-listing">
      {updatedProducts.length === 0 ? (
        <NotFoundMsg />
      ) : (
        updatedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      )}
    </section>
  );
};

export default ProductListing;
