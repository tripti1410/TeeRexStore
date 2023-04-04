import "./product-card.css";
import { Product, SelectedProduct } from "../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addProductToCart,
  subtractProductFromCart,
} from "../../features/add-to-cart-slice/add-to-cart-slice";
import Button from "../button/button";

interface PropsType {
  product: Product;
}

const ProductCard = ({ product }: PropsType) => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cart.selectedProducts);
  const handleAddToCart = () => dispatch(addProductToCart(product));
  const handleRemoveFromCart = () => dispatch(subtractProductFromCart(product));

  const isSelectedProduct = cartProducts.some(
    (selectedProduct: SelectedProduct) => selectedProduct.id === product.id
  );
  const updatedProduct: SelectedProduct = cartProducts.filter(
    (selectedProduct) => selectedProduct.id === product.id
  )[0];

  const isProductSoldOut = product.quantity === 0 ? true : false;

  return (
    <article className={`product-card ${isProductSoldOut ? "sold-out" : ""}`}>
      <figure>
        <img
          src={product.imageURL}
          alt={product.name}
          width="300px"
          height="300px"
        />
      </figure>
      <h2>{product.name}</h2>
      <div className="product-details">
        <span>Rs {product.price}</span>
        {!isSelectedProduct && !isProductSoldOut && (
          <Button onClick={handleAddToCart}>Add to cart</Button>
        )}
        {isSelectedProduct && (
          <div>
            <Button
              disabled={updatedProduct.selectedQuantity === 0}
              onClick={handleRemoveFromCart}
            >
              -
            </Button>
            <span className="selected-quantity">
              {updatedProduct.selectedQuantity}
            </span>
            <Button
              disabled={
                updatedProduct.selectedQuantity === updatedProduct.quantity
              }
              onClick={handleAddToCart}
            >
              +
            </Button>
            {updatedProduct.selectedQuantity === updatedProduct.quantity && (
              <div className="out-of-stock">No more product available!</div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
