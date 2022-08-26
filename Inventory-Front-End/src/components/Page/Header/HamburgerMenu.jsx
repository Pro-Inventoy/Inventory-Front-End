import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './HamburgerMenu.css'

class Hamburger extends React.Component {
    showSettings (event) {
      event.preventDefault();
    }

    
  
    render () {
      // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
      return (
        <Menu>
          <a id="Home" className="menu-item" href="/">Home</a>
          <a id="Inventory" className="menu-item" href="/inventory">Inventory</a>
          <a id="Orders" className="menu-item" href="/orders">Orders</a>
          <a id="Users" className="menu-item" href="/users">Users</a>
          <a id="Profile" className="menu-item" href="/profile">Profile</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
      );
    }
  }

  export default Hamburger