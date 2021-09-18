import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments: [] }, action) => {

    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload };
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            // Concat new comment object to existing state with new array
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state;

    }

}