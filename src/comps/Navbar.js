import React from 'react';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>Safe Travel Barrowmeter</div>
        <div className='links'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
