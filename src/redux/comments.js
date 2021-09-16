import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {

    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            // Concat new comment object to existing state with new array
            return state.concat(comment);
        default:
            return state;

    }

}