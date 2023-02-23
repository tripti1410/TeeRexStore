import "./product-card.css";
import { Product } from "../../types";

interface PropsType {
  product: Product;
}
const ProductCard = ({ product }: PropsType) => {
  return (
    <article className="product-card">
      <figure>
        <img src={product.imageURL} alt={product.name} />
      </figure>
      <h2>{product.name}</h2>
      <div className="product-details">
        <span>Rs {product.price}</span>
        <button>Add to cart</button>
      </div>
    </article>
  );
};

export default ProductCard;
