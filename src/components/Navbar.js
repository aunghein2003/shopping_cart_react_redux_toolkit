import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import "./Navbar.css";

const Navbar = () => {
  const username = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="logo">ShopperHouse</div>

      <div className="profile">
        <button
          className="dropbtn"
          onClick={() =>
            document.getElementById("dropdown").classList.toggle("show")
          }
        >
          {username}
        </button>
        <div id="dropdown" className="dropdown-content">
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
