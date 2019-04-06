
import { types } from './types';
import { api } from '../../REST';

export const postActions = {
    createPost: (post) => ({
        payload: post,
        type:    types.CREATE_POST,
    }),

    createPostAsync: (comment) => ({
        payload: comment,
        type:    types.CREATE_POST_ASYNC,
    }),

    fetchPostsAsync: () => async (dispatch) => {
        dispatch({ type: types.FETCH_POSTS_ASYNC });
        const response = await api.posts.fetch();
        const result = await response.json();

        dispatch(postActions.fillPosts(result.data));
    },

    fillPosts: (posts) => ({
        payload: posts,
        type:    types.FILL_POSTS,
    }),
};
