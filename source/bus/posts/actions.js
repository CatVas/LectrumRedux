
import { types } from './types';
import { api } from '../../REST';

export const postActions = {
    clearPosts: () => ({ type: types.CLEAR_POSTS }),

    createPost: (post) => ({
        payload: post,
        type:    types.CREATE_POST,
    }),

    createPostAsync: (comment) => ({
        payload: comment,
        type:    types.CREATE_POST_ASYNC,
    }),

    fetchPostsAsync: () => ({
        type: types.FETCH_POSTS_ASYNC,
    }),

    fillPosts: (posts) => ({
        payload: posts,
        type:    types.FILL_POSTS,
    }),
};
