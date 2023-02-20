import "./cart.css";

const Cart = () => {
  const numberOfSelectedProducts = 0;
  return (
    <div id="cart">
      <svg width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 32">
        <title>Shopping cart icon</title>
        <path
          fill="currentColor"
          d="m12.57,25.07c.46,1.15.6,1.29.68,1.32.21.19.48.31.77.31h2.52c-1.03.4-1.76,1.39-1.76,2.56,0,1.51,1.22,2.74,2.74,2.74s2.74-1.22,2.74-2.74c0-1.17-.72-2.16-1.76-2.56h10.79c-1.03.4-1.76,1.39-1.76,2.56,0,1.51,1.23,2.74,2.74,2.74s2.74-1.22,2.74-2.74c0-1.17-.72-2.16-1.75-2.56h3.56c.61,0,1.11-.5,1.11-1.11h0c0-.6-.5-1.1-1.11-1.1H14.76l-.7-2.42h19.49c.61,0,1.04-.02,1.15-.05.73-.16.84-.89,1.04-1.51l1.93-5.8c.42-1.29.87-2.56,1.29-3.89l.93-2.89c.2-.55.13-1.29-.91-1.29l-30.16.04L6.84.77c-.09-.19-.2-.33-.32-.43-.21-.21-.5-.34-.82-.34H1.17C.53,0,0,.53,0,1.17h0c0,.65.53,1.17,1.17,1.17h3.77l7.63,22.74Z"
          fillRule="evenodd"
        />
      </svg>
      <span>cart</span>

      <span className="cart-total">{numberOfSelectedProducts}</span>
    </div>
  );
};

export default Cart;
