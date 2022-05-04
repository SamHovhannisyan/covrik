import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import css from "./header.module.css";
import basket from "../../images/basket.svg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();

  const clickhandler = () => {
    setToggle(!toggle);
  };

  const changeLanguageHandler = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <section>
        <div className="container">
          <header
            id="header"
            className={
              toggle ? `${css.navbar_demo} ${css.open_nav}` : css.navbar_demo
            }
          >
            <div className={css.nav_bar}>
              <ul>
                <li>
                  <NavLink end to="/">
                    Logo
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      borderBottom: isActive ? "solid 1px silver" : "black",
                      color: isActive ? "black" : "black",
                    })}
                  >
                    home_link
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    end
                    to="/product"
                    style={({ isActive }) => ({
                      borderBottom: isActive ? "solid 1px silver" : "black",
                      color: isActive ? "black" : "black",
                    })}
                  >
                    Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    end
                    to="/AboutUs"
                    style={({ isActive }) => ({
                      borderBottom: isActive ? "solid 1px silver" : "black",
                      color: isActive ? "black" : "black",
                    })}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    end
                    to="/ContactUs"
                    style={({ isActive }) => ({
                      borderBottom: isActive ? "solid 1px silver" : "black",
                      color: isActive ? "black" : "black",
                    })}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>
                  {/* <select
                    name="cars"
                    id="cars"
                    className={css.select}
                    onChange={changeLanguageHandler}
                  >
                    <option value="en">En</option>
                    <option value="ru">Rus</option>
                  </select> */}
                  <p onClick={() => changeLanguageHandler("en")}>en</p>
                  <p onClick={() => changeLanguageHandler("ru")}>ru</p>
                </li>
                <li>
                  <NavLink
                    end
                    to="/Edit"
                    style={({ isActive }) => ({
                      borderBottom: isActive ? "solid 1px silver" : "black",
                      color: isActive ? "black" : "black",
                    })}
                  >
                    Create your own
                  </NavLink>
                </li>
              </ul>
            </div>
            <button type="" className={css.menu_btn} onClick={clickhandler}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
          </header>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Header;
