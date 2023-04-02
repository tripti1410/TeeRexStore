import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  changeSelectedQuantity,
  changeTotalAmount,
  removeSelectedProduct,
} from "../../features/add-to-cart-slice/add-to-cart-slice";
import CartItems from "./cart-items-list";
import EmptyCartMsg from "./empty-card-msg";
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
      {selectedProducts.length === 0 && <EmptyCartMsg />}
      <CartItems
        selectedProducts={selectedProducts}
        handleDelete={handleDelete}
        handleChangeSelectedQuantity={handleChangeSelectedQuantity}
      />
      {selectedProducts.length !== 0 && <h3>Total Amount: {totalAmount}</h3>}
    </div>
  );
};

export default ShopingCart;
