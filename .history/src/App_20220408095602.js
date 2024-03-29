import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetLayout } from "./layouts";
import Home from "./Containers/Home/home";
import AboutUs from "./Containers/About Us/AboutUs";
import { Container } from "react-bootstrap";
import ContactUs from "./Containers/Contact Us/ContactUs";
import Detail from "./Containers/Detail/detail";
import Shipping from "./Containers/Shipping/shipping";
import Terms from "./Containers/Terms/terms";
import Edit from "./Containers/Edit/edit";
import Product from "./Containers/Product/product";
import AddressBy from "./Containers/AddresBy";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import eng from "./i18/eng.json";
import ru from "./i18/ru.json";
import arm from "./i18/arm.json";
function App() {
  const [lenguage, setLenguage] = useState("en");

  i18next.init({
    interpolation: { escapeValue: false },
    lng: lenguage,
    resources: {
      en: {
        common: eng,
      },
      ru: {
        common: ru,
      },
      arm: {
        common: arm,
      },
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <HelmetLayout>
                  <Home />
                </HelmetLayout>
              }
            />
            {/* <Route
            path="/shop"
            element={
              <HelmetLayout>
                <Shop />
              </HelmetLayout>
            }
          /> */}
            <Route
              path="/product"
              element={
                <HelmetLayout>
                  <Product />
                </HelmetLayout>
              }
            />
            <Route
              path="/AboutUs"
              element={
                <HelmetLayout>
                  <AboutUs />
                </HelmetLayout>
              }
            />
            <Route
              path="/ContactUs"
              element={
                <HelmetLayout>
                  <ContactUs />
                </HelmetLayout>
              }
            />
            <Route
              path="/Detail/:id"
              element={
                <HelmetLayout>
                  <Detail />
                </HelmetLayout>
              }
            />
            <Route
              path="Shipping"
              element={
                <HelmetLayout>
                  <Shipping />
                </HelmetLayout>
              }
            />
            <Route
              path="Terms"
              element={
                <HelmetLayout>
                  <Terms />
                </HelmetLayout>
              }
            />
            <Route
              path="Edit"
              element={
                <HelmetLayout>
                  <Edit />
                </HelmetLayout>
              }
            />
            <Route
              path="/address"
              element={
                <HelmetLayout>
                  <AddressBy />
                </HelmetLayout>
              }
            />
          </Routes>
        </Router>
      </div>
    </I18nextProvider>
  );
}

export default App;
