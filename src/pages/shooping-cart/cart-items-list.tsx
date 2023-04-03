import { ChangeEvent } from "react";
import { SelectedProduct } from "../../types";
import Button from "../../components/button/button";

interface Props {
  selectedProducts: Array<SelectedProduct>;
  handleDelete: (productId: number) => void;
  handleChangeSelectedQuantity: (
    productId: number,
    e: ChangeEvent<HTMLSelectElement>
  ) => void;
}
const CartItems = ({
  selectedProducts,
  handleDelete,
  handleChangeSelectedQuantity,
}: Props) => (
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
        <Button
          classNames="button--small button--danger"
          onClick={() => handleDelete(product.id)}
        >
          Delete
        </Button>
      </li>
    ))}
  </ul>
);

export default CartItems;
