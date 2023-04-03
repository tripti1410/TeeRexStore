import Cart from "../cart/cart";
import Logo from "../logo/logo";
import Profile from "../profile/profile-icon";
import "./header.css";

const Header = () => {
  return (
    <header className="site-header full-width-bg">
      <a className="skip-links" href="#main">
        Skip to main content
      </a>

      <Logo />
      <nav>
        <Cart />
      </nav>

      <Profile />
    </header>
  );
};
export default Header;
