import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import "../css/navbar.css";

const Navbar = () => {
  const [showDrop, setShowDrop] = useState(false);
  const { user: userInfo } = AppState();
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("userLogin");
    navigate("/login");
  };
  return (
    <nav className="nav">
      <div className="container nav__container">
        <Link className="nav__brand" to="/">
          Fifa Rank
        </Link>
        <div className="nav__links-container">
          <ul className="nav__links">
            <li className="nav__item">
              <button
                className="nav__link"
                onClick={() => setShowDrop(!showDrop)}
              >
                <span className="nav__link-text">
                  {userInfo && userInfo.name}
                </span>
                <span className="nav__drop-icon fas fa-chevron-down"></span>
              </button>
              <ul className={showDrop ? "nav__drop drop-active" : "nav__drop"}>
                <li className="nav__drop-item">
                  <Link className="nav__drop-link" to="/profile">
                    Profile
                  </Link>
                </li>
                {userInfo?.role === "admin" && (
                  <li className="nav__drop-item">
                    <Link className="nav__drop-link" to="/contest">
                      Contest
                    </Link>
                  </li>
                )}
                <li className="nav__drop-item">
                  <button
                    className="nav__drop-link btn"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
