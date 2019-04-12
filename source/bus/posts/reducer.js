
import { fromJS, List } from 'immutable';
import { types } from './types';

const initialState = List();

export const postsReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case types.CLEAR_POSTS:
            return state.clear();

        case types.CREATE_POST:
            return state.unshift(fromJS(payload));

        case types.FILL_POSTS:
            return fromJS(payload);

        default:
            return state;
    }
};
