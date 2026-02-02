import { NavLink } from 'react-router-dom';
import './NavButton.css';

interface NavButtonProps {
  to: string;
  text: string;
}

const NavButton = ({ to, text }: NavButtonProps) => {
  return (
    <div className="nav-button">
      <NavLink to={to} className="nav-button__link">
        ← {text}
      </NavLink>
    </div>
  );
};

export default NavButton;
