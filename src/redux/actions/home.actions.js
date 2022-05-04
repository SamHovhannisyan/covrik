import {HOME_GET} from "../reducers/homeDataReducers";
import axios from "axios";

export const homeGet = () => {
    return (dispatch) => {
        axios.get("https://kovrik.herokuapp.com/api/home")
            .then(res => {
                dispatch({type: HOME_GET, payload: res.data})
            }).catch(e => console.log("Error",e))
    }
}