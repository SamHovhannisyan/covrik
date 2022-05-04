import {
    ERROR_GET,
    PRICE_GET,
    PRICE_GET_CUPE,
    SHOP_CAR_GET,
    SHOP_CAR_MODEL_GET,
    SHOP_GET,
    SHOP_POST
} from "../reducers/shopReducers";
import axios from "axios";

export const shopActions = () => {
    return (dispatch) => {
        axios.get("http://kovrik.herokuapp.com/api/sample-type")
            .then(res => {
                dispatch({type: SHOP_GET, payload: res.data});
            }).catch(e => console.log(e, "Error"))
    };
};


export const shopPostActions = (dataMain) => {
    console.log('action datamain', dataMain)
    return (dispatch) => {
        setTimeout(() => {
            axios.post("https://kovrik.herokuapp.com/api/order", dataMain)
                .then(res => {
                    console.log(res.data,'actions')
                    dispatch({type: SHOP_POST, payload: res.data})
                }).catch(e => console.log(e, 'Error'))
        }, 1000)
    }
}

export const carsBrandGet = () => {
    return (dispatch) => {
        axios.get("http://kovrik.herokuapp.com/api/car")
            .then(res => {
                dispatch({type: SHOP_CAR_GET, payload: res.data});
            }).catch(e => console.log(e, "Error"))
    };
};


export const carIdPost = (carId) => {
    console.log(carId,'id')
    return (dispatch) => {
        axios.post("http://kovrik.herokuapp.com/api/car-model",carId)
            .then(res => {
                dispatch({type: SHOP_CAR_MODEL_GET, payload: res.data})
            }).catch(e => console.log(e,'Error'))
    }
}

export const PriceGetData = () => {
    return (dispatch) => {
        axios.get("http://kovrik.herokuapp.com/api/price/1")
            .then(res => {
                dispatch({type: PRICE_GET, payload: res.data})
            }).catch(e => {
            console.log(e, 'Error')
        })
    }
}


export const errorGet = (error) => {
    return (dispatch) => {
        dispatch({type: ERROR_GET, payload: error})
    }
}


export const priceCupe = () => {
    return (dispatch) => {
        axios.get("http://kovrik.herokuapp.com/api/price/2")
            .then(res => {
                dispatch({type: PRICE_GET_CUPE, payload: res.data})
                console.log(res.data,'----------------')
            }).catch(err => {
                console.log(err,'Error')
        })
    }
}
