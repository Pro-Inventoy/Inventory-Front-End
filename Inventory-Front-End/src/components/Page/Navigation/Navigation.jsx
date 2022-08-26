import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ navigation }) {
  return (
    <nav className="Navigation">
      {navigation.map(({ to, label }) => (
        <NavLink key={to} to={to}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

function NavLink({ children, ...rest }) {
  return (
    <Link className="label-text" {...rest}>
      {children}
    </Link>
  );
}
