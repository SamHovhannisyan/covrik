export const SHIPPING_GET = "SHIPPING_GET";

const initialState = {
    shippingData: []
}

export const shippingReducers = (state = initialState, action) => {
    switch (action.type) {

        case SHIPPING_GET:

            return {...state, shippingData: action.payload};

        default:
            return state;
    }
}