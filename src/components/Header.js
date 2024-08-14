import React from 'react';
import './styles.css';
import logo from './images/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul className="sidebar">
          <li className="hide-sidebar" onClick={() => hideSidebar()}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </a>
          </li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
        </ul>
        <ul>
          <li className="hideOnMobile"><a href="#">Home</a></li>
          <li className="hideOnMobile"><a href="#">About Us</a></li>
          <li className="hideOnMobile"><a href="#">Services</a></li>
          <li className="hideOnMobile"><a href="#">Products</a></li>
          <li className="show-sidebar" onClick={() => showSidebar()}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#5f6368">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </header>
  );
};

const showSidebar = () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
  sidebar.classList.add('show');
};

const hideSidebar = () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('show');
  setTimeout(() => {
    sidebar.style.display = 'none';
  }, 500);
};

export default Header;
