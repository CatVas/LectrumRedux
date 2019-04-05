
import { CREATE_POST_ASYNC, FETCH_POSTS_ASYNC, FILL_POSTS } from './types';
import { api } from '../../REST';

export const createPostAsync = (comment) => async (dispatch) => {
    const response = await api.posts.create(comment);
    const result = await response.json();
    const { data, message } = result;

    if (response.status === 200) {
        dispatch({
            payload: data,
            type: CREATE_POST_ASYNC,
        });
    } else {
        console.error(message);
    }
};

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
