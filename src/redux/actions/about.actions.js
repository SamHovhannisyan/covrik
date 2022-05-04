import axios from "axios";
import {ABOUT_GET} from "../reducers/aboutReducers";

export const aboutGet = () => {
    return (dispatch) => {
        axios.get("https://kovrik.herokuapp.com/api/about")
            .then(res => {
                console.log(res.data)
                dispatch({type: ABOUT_GET, payload: res.data})
            }).catch(e => console.log("Error",e))
    }
}