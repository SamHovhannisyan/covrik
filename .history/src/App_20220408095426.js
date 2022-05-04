import React from "react";
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
function App() {
  const [lenguage, setLenguage] = useState("en");
  return (
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
  );
}

export default App;
