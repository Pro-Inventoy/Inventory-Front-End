import SlideoutMenu from './SlideoutMenu.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import User from './User.jsx';
import styles from './Header.css';

const primary = [
  { to: '/', label: 'Home' },
  { to: 'inventory', label: 'Inventory' },
  { to: 'orders', label: 'Orders' },
  { to: 'users', label: 'Users' },
  { to: 'profile', label: 'Profile' },
];

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <SlideoutMenu navigation={primary} />
      </div>

      <h1>My App</h1>

      <div className={styles.NavigationContainer}>
        <Navigation navigation={primary} />
      </div>

      <User />
    </header>
  );
}
