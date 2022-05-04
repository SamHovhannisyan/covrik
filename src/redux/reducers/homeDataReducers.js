export const HOME_GET = "HOME_GET";

const initialState = {
    homeData: []
}

export const homeDataReducers = (state = initialState, action) => {
    switch (action.type) {

        case HOME_GET:

            return {...state, homeData: action.payload}

        default:
            return state;
    }
}