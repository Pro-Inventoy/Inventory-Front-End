import './Navigation.css';
import { handTruck, wareHouse, persons, profile, home } from '../Icons'

export default function Navigation() {
  return (
    <nav className="Navigation">
      <a id="Home" className="menu-item" href="/">{home}Home</a>
          <a id="Inventory" className="menu-item" href="/inventory">{wareHouse}Inventory</a>
          <a id="Orders" className="menu-item" href="/orders">{handTruck}Orders</a>
          <a id="Users" className="menu-item" href="/users">{persons} Users</a>
          <a id="Profile" className="menu-item" href="/profile">{profile}Profile</a>
    </nav>
  );
}

