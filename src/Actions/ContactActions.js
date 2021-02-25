import axios from "axios";
import {
    GET_CONTACT_DATA,
    CONTACT_ERROR,
    CONTACT_LOADING,
    GET_SINGLE_CONTACT
} from "./types";

// Contact Loading
export const setPlansLoading = () => {
    return {
        type: CONTACT_LOADING,
    };
};

// get all contact data
export const getContactData = (page) => (dispatch) => {
    dispatch(setPlansLoading());

    axios
        .get(`/api/users?page=${page}`)
        .then((result) => {
            dispatch({
                type: GET_CONTACT_DATA,
                payload: result.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: CONTACT_ERROR,
                payload: err && err.response ? err.response.data : "",
            });
        });
};


// get single contact data
export const getSingleContact = (id) => (dispatch) => {
    dispatch(setPlansLoading());
    axios
        .get(`/api/users/${id}`)
        .then((res) => {
            dispatch({
                type: GET_SINGLE_CONTACT,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response && err.response.data,
            })
        );
};

