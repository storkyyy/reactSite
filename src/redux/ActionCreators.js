import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        // pass propert update using shorthand when prop = value
        campsiteId,
        rating,
        author,
        text
    }
});

export const fetchCampsites = () => dispatch => {

    // Pass store's dispatch method and dispatch this action
    dispatch(campsitesLoading());

    // Brief delay before dispatching addCampsites action
    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);

};

export const campsitesLoading = () => ({

    type: ActionTypes.CAMPSITES_LOADING
    
});

export const campsitesFailed = errMess => ({

    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess

});

export const addCampsites = campsites => ({

    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites

});