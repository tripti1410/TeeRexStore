import "./product-card.css";
import { Product, SelectedProduct } from "../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../features/add-to-cart.slice/add-to-cart.slice";

interface PropsType {
  product: Product;
}

const ProductCard = ({ product }: PropsType) => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cart.selectedProducts);
  const handleAddToCart = () => dispatch(addProductToCart(product));
  const handleRemoveFromCart = () => dispatch(removeProductFromCart(product));

  const isSelectedProduct = cartProducts.some(
    (selectedProduct: SelectedProduct) => selectedProduct.id === product.id
  );
  const updatedProduct: SelectedProduct = cartProducts.filter(
    (selectedProduct) => selectedProduct.id === product.id
  )[0];

  const isProductOutOfStock = product.quantity === 0 ? true : false;

  return (
    <article className="product-card">
      <figure>
        <img src={product.imageURL} alt={product.name} />
      </figure>
      <h2>{product.name}</h2>
      <div className="product-details">
        <span>Rs {product.price}</span>
        {!isSelectedProduct && !isProductOutOfStock && (
          <button className="button" onClick={handleAddToCart}>
            Add to cart
          </button>
        )}
        {isSelectedProduct && (
          <div>
            <button
              className="button"
              disabled={updatedProduct.selectedQuantity === 0}
              onClick={handleRemoveFromCart}
            >
              -
            </button>
            <span className="selected-quantity">
              {updatedProduct.selectedQuantity}
            </span>
            <button
              className="button"
              disabled={
                updatedProduct.selectedQuantity === updatedProduct.quantity
              }
              onClick={handleAddToCart}
            >
              +
            </button>
          </div>
        )}

        {isProductOutOfStock && (
          <div className="out-of-stock">Out of stock </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
