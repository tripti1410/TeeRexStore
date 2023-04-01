import { Link } from "react-router-dom";

const EmptyCartMsg = () => (
  <div className="cart-is-empty-msg flex-center flex-direction-column">
    <p>Cart is empty. </p>
    <Link to="/" className="link-curtain-effect">
      Continue shopping
    </Link>
  </div>
);

export default EmptyCartMsg;
