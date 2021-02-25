import {
    GET_CONTACT_DATA,
    CONTACT_ERROR,
    CONTACT_LOADING,
    GET_SINGLE_CONTACT
} from "../Actions/types";

const initialState = {
    loading: false,
    allContact: [],
    singleContact: {}

};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACT_DATA:
            return {
                ...state,
                loading: false,
                allContact: action.payload && action.payload.data
            };
        case GET_SINGLE_CONTACT:
            return {
                ...state,
                loading: false,
                singleContact: action.payload && action.payload.data
            }
        case CONTACT_LOADING:
            return {
                ...state,
                loading: true
            };
        case CONTACT_ERROR:
            return {
                ...state,
                loading: false,
                allContact: { success: false, data: action.payload && action.payload.data }
            };
        default:
            return state;
    }
};
