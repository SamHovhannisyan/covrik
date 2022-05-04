import axios from "axios";
import {SHIPPING_GET} from "../reducers/sippingReducers";

export const shippingGet = () => {
    return (dispatch) => {
        axios.get("http://kovrik.herokuapp.com/api/shipping")
            .then(res => {
                dispatch({type: SHIPPING_GET, payload: res.data})
            }).catch(e => console.log(e, "Error"))
    }
}