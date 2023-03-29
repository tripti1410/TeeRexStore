import Cart from "../cart/cart";
import Logo from "../logo/logo";
import Profile from "../profile/profile-icon";
import "./header.css";

const Header = () => {
  return (
    <header className="site-header full-width-bg">
      <Logo />
      <Cart />
      <Profile />
    </header>
  );
};
export default Header;
