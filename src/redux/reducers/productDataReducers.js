export const PRODUCT_DATA = "PRODUCT_DATA";


const initialState = {
    product: []
}

export const productDataReducers = (state = initialState, action) => {
    switch (action.type) {

        case PRODUCT_DATA:

            return {...state, product: action.payload}

        default:
            return state;
    }
}