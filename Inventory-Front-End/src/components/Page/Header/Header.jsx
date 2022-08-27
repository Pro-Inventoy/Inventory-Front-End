// import SlideoutMenu from './SlideoutMenu.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import User from './User.jsx';
import './Header.css';
import Hamburger from './HamburgerMenu.jsx';
import { useWindowDimensions } from '../Layout.jsx';

const primary = [
  { to: '/', label: 'Home' },
  { to: 'inventory', label: 'Inventory' },
  { to: 'orders', label: 'Orders' },
  { to: 'users', label: 'Users' },
  { to: 'profile', label: 'Profile' },
];



// const slideMenu = true;

export default function Header() {
  const { width } = useWindowDimensions();
  return (
    <header className="Header">
      <div className="MenuContainer"S>
        {/* <SlideoutMenu navigation={primary} /> */}
        above ham
        {width <= 700 ? <Hamburger /> : <></>}
        below ham
      </div>
      <div className="NavigationContainer">
        {width > 700 ? <Navigation navigation={primary} /> : <></> }
        NavCont
      </div>

      <User />
    </header>
  );
}
