
import { apply, put, select } from 'redux-saga/effects';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { api } from '../../../../REST';

export function* likePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.like, [postId]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);
            throw new Error(message);
        }

        const liker = yield select(
            state => state.profile
                .remove('avatar')
                .remove('token')
        );

        yield put(postActions.likePost({ liker, postId }));
    } catch (error) {
        yield put(uiActions.emitError(error, 'likePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
