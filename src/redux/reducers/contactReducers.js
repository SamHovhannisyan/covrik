export const CONTACT_GET = "CONTACT_GET";
export const CONTACT_POST = "CONTACT_POST";

const initialState = {
    contactGet: [],
    contactPost: []
}

export const contactReducers = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_GET:

            return {...state, contactGet: action.payload}

        case CONTACT_POST:

            return {...state, contactPost: action.payload}

        default:
            return state;
    }
}