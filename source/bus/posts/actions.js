
import { FETCH_POSTS_ASYNC, FILL_POSTS } from './types';
import { api } from '../../REST';

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({ type: FETCH_POSTS_ASYNC });
    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};

export const fillPosts = posts => ({
    payload: posts,
    type:    FILL_POSTS,
});
