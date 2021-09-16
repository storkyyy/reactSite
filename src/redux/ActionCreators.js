import * as ActionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        // pass propert update using shorthand when prop = value
        campsiteId,
        rating,
        author,
        text
    }
})