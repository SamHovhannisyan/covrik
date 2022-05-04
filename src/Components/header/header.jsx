import React, { useState } from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import css from "./header.module.css";
import basket from "../../images/basket.svg";
import { useTranslation } from "react-i18next";
import LogoMain from '../../images/logoMain.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();


  const changeLanguageHandler = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      <section>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
              <NavLink
                  to="/"
                    className={css.logoImg}
              >
                  <span className={css.logMian}>
                      <img src={LogoMain}  alt=""/>
                  </span>
              </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        borderBottom: isActive ? "solid 2px silver" : "black",
                        color: isActive ? "black" : "black",
                    })}
                >
                  {t("home_link")}
                </NavLink>
                <NavLink
                    end
                    to="/product"
                    style={({ isActive }) => ({
                        borderBottom: isActive ? "solid 2px silver" : "black",
                        color: isActive ? "black" : "black",
                    })}
                >
                  {t("product_link")}
                </NavLink>
                <NavLink
                    end
                    to="/about_us"
                    style={({ isActive }) => ({
                      borderBottom: isActive ? "solid 1px silver" : "black",
                      color: isActive ? "black" : "black",
                    })}
                >
                  {t("about_link")}
                </NavLink>
                <NavLink
                    end
                    to="/contact_us"
                    style={({ isActive }) => ({
                      borderBottom: isActive ? "solid 2px silver" : "black",
                      color: isActive ? "black" : "black",
                    })}
                >
                  {t("contact_link")}
                </NavLink>
              </Nav>
              <Nav>
                <select
                    name="cars"
                    id="cars"
                    className={css.select}
                    onChange={changeLanguageHandler}
                >
                  <option value="en">En</option>
                  <option value="ru">Rus</option>
                </select>
                  <NavLink
                      end
                      to="/edit"
                      className={css.navLinkBtn}
                  >
                      <span className={css.createBtn}>
                        {t("create_link")}
                    </span>
                  </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Header;
