import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import StarIcon from "@material-ui/icons/Star";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import CategoryIcon from "@material-ui/icons/Category";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const toggleMenu = () => {
    return setMenuToggle(() => !menuToggle);
  };

  return (
    <div className={`navbar ${show && "navbar__red"}`}>
      <p className="navbar__brand">
        <Link className="nav__link" to="/">
          Fresh Pepper
        </Link>
      </p>

      <MenuIcon onClick={toggleMenu} className="navbar__menu--icon" />

      <div className="navbar__drawer">
        <div
          className={menuToggle ? "navbar__links-open" : "navbar__links-close"}
        >
          <CloseIcon
            onClick={toggleMenu}
            fontSize="large"
            className="navbar__menu-close"
          />

          <div className="navbar__link">
            <StarIcon fontSize="large" />
            <p>
              <Link to="/popular">Popular</Link>
            </p>
          </div>

          <div className="navbar__link">
            <TrendingUpIcon fontSize="large" />
            <p>
            <Link to="/trending">Trending</Link>
            </p>
          </div>

          <div className="navbar__link">
            <CategoryIcon fontSize="large" />
            <p>Categories</p>
          </div>

          <div className="navbar__link">
            <MovieIcon fontSize="large" />
            <p>Movies</p>
          </div>

          <div className="navbar__link">
            <TvIcon fontSize="large" />
            <p>TV series</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
