import { useNavigate } from "react-router-dom";
import "./Button.scss";

const Button = ({
  color,
  label,
  onClick,
  shape = "rounded",
  size = "medium",
  to,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`padding-2 shadow-none hover:shadow background-light-${color} hover:background-dark-${color} ${shape} ${size}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
