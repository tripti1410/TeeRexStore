import { ReactNode } from "react";
import "./button.css";

interface Pros {
  children: string | ReactNode;
  onClick: () => void;
  disabled?: boolean;
  classNames?: string;
}
const Button = ({ children, onClick, disabled, classNames }: Pros) => {
  let className = "button";
  if (classNames) {
    className = `button ${classNames}`;
  }
  return (
    <button
      type="button"
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
