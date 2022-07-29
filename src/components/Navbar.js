import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import './Navbar.css';

const Navbar = () => {
  const username = useSelector((state) => state.user.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isActive = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none',
    };
  };

  const logoutHandler = async () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className='navigation'>
      <div className='logo'>ShopperHouse</div>
      <nav>
        <NavLink to='/' style={isActive} className='navlink'>
          Home
        </NavLink>

        <NavLink to='shop' style={isActive} className='navlink'>
          Shop
        </NavLink>

        <NavLink to='about' style={isActive} className='navlink'>
          About
        </NavLink>

        <div className='profile'>
          <button
            className='dropbtn'
            onClick={() =>
              document.getElementById('dropdown').classList.toggle('show')
            }
          >
            {username}
          </button>
          <div id='dropdown' className='dropdown-content'>
            <button onClick={logoutHandler}>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
