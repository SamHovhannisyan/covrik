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

function App() {

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
            path="/about_us"
            element={
              <HelmetLayout>
                <AboutUs />
              </HelmetLayout>
            }
          />
          <Route
            path="/contact_us"
            element={
              <HelmetLayout>
                <ContactUs />
              </HelmetLayout>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <HelmetLayout>
                <Detail />
              </HelmetLayout>
            }
          />
          <Route
            path="shipping"
            element={
              <HelmetLayout>
                <Shipping />
              </HelmetLayout>
            }
          />
          <Route
            path="terms"
            element={
              <HelmetLayout>
                <Terms />
              </HelmetLayout>
            }
          />
          <Route
            path="edit"
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
