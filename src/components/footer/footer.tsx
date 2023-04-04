import SocialMedia from "../social-media/social-media";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer full-width-bg">
      <SocialMedia />
      <div className="copyright">
        © 2023 - Today / Copyright TeeRex Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
