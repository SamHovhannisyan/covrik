import { combineReducers } from "redux";
import {productDataReducers} from "./reducers/productDataReducers";
import {homeDataReducers} from "./reducers/homeDataReducers";
import {contactReducers} from "./reducers/contactReducers";
import {aboutReducers} from "./reducers/aboutReducers";
import {shippingReducers} from "./reducers/sippingReducers";
import {shopReducers} from "./reducers/shopReducers";

export const rootReducer = combineReducers({
    productDataReducers,
    homeDataReducers,
    contactReducers,
    aboutReducers,
    shippingReducers,
    shopReducers
});
