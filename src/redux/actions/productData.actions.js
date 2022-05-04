import axios from "axios";
import {PRODUCT_DATA} from "../reducers/productDataReducers";
import {productGetURL} from "../types";

export const productDataGet = () => {
    return (dispatch) => {
         axios.get("https://kovrik.herokuapp.com/api/product")
            .then(res => {
                dispatch({type: PRODUCT_DATA, payload: res.data});
            }).catch(e => {
                console.log("Error",e);
            })
    }
}