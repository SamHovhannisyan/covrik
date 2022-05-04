import axios from "axios";
import {CONTACT_GET, CONTACT_POST} from "../reducers/contactReducers";

export const contactGet = () => {
    return (dispatch) => {
        axios.get("https://kovrik.herokuapp.com/api/contact")
            .then(res => {
                dispatch({type:CONTACT_GET, payload: res.data})
            }).catch(e => console.log(e, 'Error'));
    }
}


export const contactPost = (data) => {
    return (dispatch) => {
        axios.post('https://kovrik.herokuapp.com/api/contact-message',data)
            .then(res => {
                dispatch({type: CONTACT_POST, payload: res.data})
                console.log(res.data)
            }).catch(e => console.log(e,'Error'));
    }
}

export const contactPostFooter = (data) => {
    return (dispatch) => {
        axios.post('http://kovrik.herokuapp.com/api/subscribe',data)
            .then(res => {
                console.log(res.data)
            }).catch(e => console.log(e,'Error'));
    }
}