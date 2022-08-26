import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
// import './reset.css';
// import './global.css';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <div className="Layout">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}