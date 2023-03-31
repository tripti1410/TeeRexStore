import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  changeSelectedQuantity,
  changeTotalAmount,
  removeSelectedProduct,
} from "../../features/add-to-cart.slice/add-to-cart.slice";
import "./shooping-cart.css";

const ShopingCart = () => {
  const cart = useAppSelector((state) => state.cart);
  const { selectedProducts, totalAmount } = cart;
  const dispatch = useAppDispatch();

  function handleChangeSelectedQuantity(
    productId: number,
    e: ChangeEvent<HTMLSelectElement>
  ) {
    const quantity = e.target.value;
    dispatch(changeSelectedQuantity({ productId, quantity }));
  }
  const handleDelete = (productId: number) =>
    dispatch(removeSelectedProduct({ productId }));
  dispatch(changeTotalAmount());
  return (
    <div className="shopping-cart-page">
      <h1>Shopping cart</h1>
      {selectedProducts.length === 0 && (
        <div className="cart-is-empty-msg flex-center flex-direction-column">
          <p>Cart is empty. </p>
          <Link to="/">Continue shopping</Link>
        </div>
      )}
      <ul className="shopping-cart-items">
        {selectedProducts.map((product) => (
          <li key={product.id}>
            <figure>
              <img src={product.imageURL} alt={product.name} />
            </figure>
            <div>
              <h2>{product.name}</h2>
              <div>
                {product.currency === "INR" && "Rs "}
                {product.price}
              </div>
            </div>
            <select
              name="product-quantity"
              onChange={(e) => handleChangeSelectedQuantity(product.id, e)}
            >
              {Array.from({ length: product.quantity }, (v, i) => i + 1).map(
                (quantity) => (
                  <option
                    key={quantity}
                    selected={quantity === product.selectedQuantity}
                    value={quantity}
                  >
                    {quantity}
                  </option>
                )
              )}
            </select>
            <button
              className="button button--small button--danger"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {selectedProducts.length !== 0 && <h3>Total Amount: {totalAmount}</h3>}
    </div>
  );
};

export default ShopingCart;
