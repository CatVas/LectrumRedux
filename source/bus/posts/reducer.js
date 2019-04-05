
import { fromJS, List } from 'immutable';
import { CREATE_POST_ASYNC, FILL_POSTS } from './types';

const initialState = List();

export const postsReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case CREATE_POST_ASYNC:
            return state.unshift(fromJS(payload));

        case FILL_POSTS:
            return fromJS(payload);

        default:
            return state;
    }
};
